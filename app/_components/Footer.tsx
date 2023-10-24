import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center my-6 md:my-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href={"/"} className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Utopiaz
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link
              href={"/politique-de-confidentialite"}
              className="mr-4 hover:underline md:mr-6"
            >
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <Link
              href={"/mentions-legales"}
              className="mr-4 hover:underline md:mr-6"
            >
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href={"mailto:hello@utopiaz.net"} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 Utopiaz 👨‍💻. All rights reserved.
      </span>
    </footer>
  );
}
