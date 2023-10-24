import { getArticles } from "@/sanity/sanity-utils";

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
    <div>
      <h1>{article?.titre}</h1>
      <p>{article?.contenu[0].children[0].text}</p>
    </div>
  );
}
