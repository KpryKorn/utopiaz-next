import {
  getAutreArticles,
  getBackendArticles,
  getFrontendArticles,
  getWebArticles,
} from "@/sanity/sanity-utils";
import ArticlesGridItem from "./ArticlesGridItem";

interface CategoryViewProps {
  slug: string | boolean;
}

export default async function CategoryView({ slug }: CategoryViewProps) {
  let articles;

  switch (slug) {
    case "backend":
      articles = await getBackendArticles();
      break;
    case "frontend":
      articles = await getFrontendArticles();
      break;
    case "web":
      articles = await getWebArticles();
      break;
    case "autre":
      articles = await getAutreArticles();
      break;
  }

  return (
    <ul className="my-6 md:my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles?.map((article) => (
        <ArticlesGridItem article={article} key={article.slug} />
      ))}
    </ul>
  );
}
