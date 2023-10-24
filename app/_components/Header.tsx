"use client";

import Link from "next/link";

export default function Header() {
  const routes = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <header className="my-6 md:my-12 font-semibold uppercase">
      <nav>
        <ul className="flex gap-4 justify-center items-center">
          {routes.map((route) => {
            return (
              <li key={route.name}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
