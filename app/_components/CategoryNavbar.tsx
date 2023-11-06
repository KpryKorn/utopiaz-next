"use client";

// TODO: chargement de la page => récupérer les catégories (fetch)
// TODO: par défaut : "tous" coché => montre tous les articles
// TODO: au clic sur une catégorie => montre les articles de cette catégorie
// FIX: bg checked pas au run time

export default function CategoryNavbar() {
  return (
    <nav className="my-6 md-my-12">
      <ul className="flex items-center justify-center gap-2 text-sm">
        <li className="radio-label flex items-center justify-center border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="all"
            id="all"
            defaultChecked
            className="hidden"
          />
          <label
            className="cursor-pointer px-4 py-2 rounded-full"
            htmlFor="all"
          >
            Tous
          </label>
        </li>
        <li className="radio-label flex items-center justify-center border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="frontend"
            id="frontend"
            className="hidden"
          />
          <label
            className="cursor-pointer px-4 py-2 rounded-full"
            htmlFor="frontend"
          >
            Frontend
          </label>
        </li>
        <li className="radio-label flex items-center justify-center border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="backend"
            id="backend"
            className="hidden"
          />
          <label
            className="cursor-pointer px-4 py-2 rounded-full"
            htmlFor="backend"
          >
            Backend
          </label>
        </li>
        <li className="radio-label flex items-center justify-center border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="web"
            id="web"
            className="hidden"
          />
          <label
            className="cursor-pointer px-4 py-2 rounded-full"
            htmlFor="web"
          >
            Web
          </label>
        </li>
      </ul>
    </nav>
  );
}
