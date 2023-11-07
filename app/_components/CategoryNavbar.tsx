// TODO: chargement de la page => récupérer les catégories (fetch)
// TODO: par défaut : "tous" coché => montre tous les articles
// TODO: au clic sur une catégorie => montre les articles de cette catégorie

import { getCategories } from "@/sanity/sanity-utils";

export default async function CategoryNavbar() {
  const categories = await getCategories();

  return (
    <nav className="my-6 md-my-12 py-4 border-t border-b border-gray-400">
      <ul className="flex items-center justify-center gap-2 text-sm">
        <li className="radio-label flex items-center justify-center border border-slate-600 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="tous"
            id="tous"
            defaultChecked
            className="hidden"
          />
          <label
            className="cursor-pointer px-4 py-1.5 rounded-full"
            htmlFor="tous"
          >
            Tous
          </label>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category.titre}
              className="radio-label flex items-center justify-center border border-slate-600 rounded-full cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category.titre}
                id={category.titre}
                className="hidden"
              />
              <label
                className="cursor-pointer px-4 py-1.5 rounded-full"
                htmlFor={category.titre}
              >
                {category.titre}
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
