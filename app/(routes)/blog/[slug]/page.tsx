import { getArticles } from "@/sanity/sanity-utils";
import { formatDate } from "@/app/_lib/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Metadata } from "next";
import AutresArticles from "@/app/_components/AutresArticles";
import FilAriane from "@/app/_components/FilAriane";

// renvoie 404 si article n'existe pas
export const dynamicParams = false;

// fonction qui génère le slug dynamique en fonction de celui des articles
export async function generateStaticParams() {
  const articles = await getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const articles = await getArticles();
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  return {
    title: `Utopiaz - ${article?.titre}`,
    description: article?.resume,
  };
}

// composant pour indiquer à Sanity comment render les images
function imageComponent(props: { value: any }) {
  const { value } = props;

  return (
    <figure className="flex flex-col justify-center items-center my-4 gap-4">
      <Image
        src={`https://cdn.sanity.io/images/17n9vsyq/production/${value.asset._ref
          .replace(/^image-/, "")
          .replace(/-jpg$/, ".jpg")
          .replace(/-png$/, ".png")
          .replace(/-gif$/, ".gif")
          .replace(/-webp$/, ".webp")
          .replace(/-svg$/, ".svg")}`}
        alt={value.alt}
        width={1000}
        height={1000}
        className="block rounded-xl aspect-video object-cover object-center w-3/4 lg:w-2/3"
      />
      <figcaption className="text-sm text-gray-400">{value.alt}</figcaption>
    </figure>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  return (
    <>
      <FilAriane homeElement={"Accueil"} separator={<span> / </span>} />
      <article className="flex flex-col gap-6 lg:gap-12 items-start">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-1 items-start gap-4">
            <h1 className="font-semibold text-3xl md:text-4xl">
              {article?.titre}
            </h1>

            <figure className="flex gap-2 justify-between items-center">
              <Image
                src={article!.auteurImg}
                width={300}
                height={300}
                alt={`Photo de profil de ${article?.auteur}`}
                className="rounded-full border-2 border-purple-500 w-8 h-8 object-cover object-center"
              />
              <figcaption className="text-sm font-medium text-purple-500">
                {article?.auteur}
              </figcaption>
            </figure>

            <div className="flex flex-col text-sm text-gray-400">
              <p>Créé le : {formatDate(article!._createdAt.toString())}</p>
              <p>
                Mis à jour le : {formatDate(article!._updatedAt.toString())}
              </p>
            </div>

            <p className="mr-4">{article?.resume}</p>
          </div>

          <figure className="flex lg:flex-1 items-center justify-end">
            <Image
              src={article!.image}
              alt={article!.alt}
              loading="eager"
              width={1500}
              height={1500}
              title={article?.alt}
              className="block rounded-xl shadow-md aspect-video object-cover object-center"
            />
          </figure>
        </div>
        <div className="flex flex-col gap-4 sanity-container">
          <PortableText
            value={article!.contenu}
            components={{
              types: {
                image: imageComponent,
              },
            }}
          />
        </div>
      </article>
      <AutresArticles />
    </>
  );
}
