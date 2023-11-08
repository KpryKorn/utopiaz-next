import { getCategories } from "@/sanity/sanity-utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>;
}
