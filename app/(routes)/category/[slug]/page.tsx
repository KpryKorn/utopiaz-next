import { getBackendArticles, getCategories } from "@/sanity/sanity-utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const categories = await getCategories();
  const categorie = categories.find(
    (category) => category.slug === params.slug
  );

  const backendArticles = await getBackendArticles();

  return (
    <>
      <div>Slug: {params.slug}</div>
      <p>{categorie!.description}</p>
      <div>
        {backendArticles.map((article) => {
          return (
            <div key={article._id}>
              <h2>{article.titre}</h2>
              <p>{article.resume}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
