import { getArticles } from "@/sanity/sanity-utils";

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => {
        return (
          <div key={article._id}>
            <h2 className="font-semibold text-xl">{article.titre}</h2>
            <p>{article.contenu[0].children[0].text}</p>
          </div>
        );
      })}
    </div>
  );
}
