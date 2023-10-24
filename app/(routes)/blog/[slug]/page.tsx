import { getArticles } from "@/sanity/sanity-utils";
import { formatDate } from "@/app/_lib/utils";

// renvoie 404 si article n'existe pas
export const dynamicParams = false;

// fonction qui génère le slug dynamique en fonction de celui des articles
export async function generateStaticParams() {
  const articles = await getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// contenu des articles
export default async function Page({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  return (
    <article className="flex flex-col gap-6 items-center">
      <figure className="flex items-center justify-center">
        <img
          src={article?.image}
          alt={article?.alt}
          title={article?.alt}
          className="block rounded-xl shadow-md w-2/3 aspect-video object-cover object-center"
        />
      </figure>
      <h1 className="font-semibold text-2xl md:text-3xl bg-gradient-to-l from-purple-600 to-blue-500 text-transparent bg-clip-text">
        {article?.titre}
      </h1>
      <div className="flex flex-col text-center text-sm text-gray-600">
        <p>Article créé le : {formatDate(article!._createdAt.toString())}</p>
        <p>Mis à jour le : {formatDate(article!._updatedAt.toString())}</p>
      </div>
      <p>{article?.contenu[0].children[0].text}</p>
    </article>
  );
}
