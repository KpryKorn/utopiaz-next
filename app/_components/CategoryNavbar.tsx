// TODO: chargement de la page => récupérer les catégories (fetch)
// TODO: par défaut : "tous" coché => montre tous les articles
// TODO: au clic sur une catégorie => montre les articles de cette catégorie
// TODO: "checked" => bg-slate-900

export default function CategoryNavbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        <li className="flex items-center justify-center px-3 py-2 border border-slate-700 bg-slate-900 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="all"
            id="all"
            defaultChecked
            className="hidden"
          />
          <label className="cursor-pointer" htmlFor="all">
            Tous
          </label>
        </li>
        <li className="flex items-center justify-center px-3 py-2 border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="react"
            id="react"
            className="hidden"
          />
          <label className="cursor-pointer" htmlFor="react">
            React
          </label>
        </li>
        <li className="flex items-center justify-center px-3 py-2 border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="angular"
            id="angular"
            className="hidden"
          />
          <label className="cursor-pointer" htmlFor="angular">
            Angular
          </label>
        </li>
        <li className="flex items-center justify-center px-3 py-2 border border-slate-700 rounded-full cursor-pointer">
          <input
            type="radio"
            name="category"
            value="vue"
            id="vue"
            className="hidden"
          />
          <label className="cursor-pointer" htmlFor="vue">
            Vue
          </label>
        </li>
      </ul>
    </nav>
  );
}
