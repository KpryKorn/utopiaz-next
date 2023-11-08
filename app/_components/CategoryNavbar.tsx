import { getCategories } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function CategoryNavbar() {
  const categories = await getCategories();

  return (
    <nav className="my-6 md-my-12 py-4 border-t border-b border-gray-400">
      <ul className="flex items-center justify-center gap-2 text-sm">
        <li className="flex items-center justify-center rounded-full cursor-pointer">
          <Link
            href={"/blog"}
            className="px-3.5 py-1.5 bg-slate-900 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors"
          >
            Tous
          </Link>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category.titre}
              className="flex items-center justify-center rounded-full cursor-pointer"
            >
              <Link
                href={`/category/${category.slug}`}
                className="px-3.5 py-1.5 bg-slate-900 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors"
              >
                {category.titre}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
