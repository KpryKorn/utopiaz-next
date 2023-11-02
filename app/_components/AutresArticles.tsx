import { getLastArticles } from "@/sanity/sanity-utils";
import ArticlesGridItem from "./ArticlesGridItem";

export default async function AutresArticles() {
  const articles = await getLastArticles();
  return (
    <section className="my-6 md:my-12">
      <p className="text-2xl font-semibold pb-6">/ Autres articles</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => {
          return <ArticlesGridItem article={article} key={article._id} />;
        })}
      </ul>
    </section>
  );
}
