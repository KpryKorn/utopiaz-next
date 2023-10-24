import { getArticles } from "@/sanity/sanity-utils";
import { formatDate } from "@/app/_lib/utils";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <ul className="flex gap-4 items-center">
      {articles.map((article) => {
        return (
          <li key={article._id}>
            <Link href={`blog/${article.slug}`}>
              <h3>{article.titre}</h3>
              <p>
                Article créé le : {formatDate(article._createdAt.toString())}
              </p>
              <img src={article.image} alt={article.alt} title={article.alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
