import { getArticles } from "@/sanity/sanity-utils";
import ArticlesGridItem from "../_components/ArticlesGridItem";

export default async function Home() {
  const articles = await getArticles();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles.map((article) => {
        return <ArticlesGridItem article={article} key={article._id} />;
      })}
    </ul>
  );
}
