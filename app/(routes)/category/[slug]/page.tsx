import CategoryNavbar from "@/app/_components/CategoryNavbar";
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
      <CategoryNavbar />
      <section className="mb-6 md:mb-12">
        <div className="py-6 md:py-12 flex flex-col items-center align-center gap-8">
          <h1 className="text-4xl md:text-7xl font-semibold">
            {categorie!.titre}
          </h1>
          <p className="text-center md:text-2xl">{categorie!.description}</p>
        </div>
        <CategoryView slug={params.slug} />
      </section>
    </>
  );
}
