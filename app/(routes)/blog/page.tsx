import BlogGridLayout from "@/app/_components/BlogGridLayout";
import CategoryNavbar from "@/app/_components/CategoryNavbar";

export default async function Page() {
  return (
    <>
      <CategoryNavbar />
      <section className="mb-6 md:mb-12">
        <div className="py-6 md:py-12 flex flex-col items-center align-center gap-8">
          <h1 className="text-4xl md:text-7xl font-semibold">Articles</h1>
          <p className="text-center md:text-2xl">
            Explorez des sujets autour du développement web, des dernières
            technologies, du SEO et bien d'autres.
          </p>
        </div>
        <BlogGridLayout />
      </section>
    </>
  );
}
