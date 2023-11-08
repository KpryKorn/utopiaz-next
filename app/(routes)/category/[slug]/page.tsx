import CategoryView from "@/app/_components/CategoryView";
import { getCategories } from "@/sanity/sanity-utils";

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

  return (
    <>
      <div>Slug: {params.slug}</div>
      <p>{categorie!.description}</p>
      <CategoryView slug={params.slug} />
    </>
  );
}
