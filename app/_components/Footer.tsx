import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="text-center my-6 md:my-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href={"/"} className="flex items-center mb-4 sm:mb-0">
          <Logo />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
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
      <hr className="my-6 border-gray-300 sm:mx-auto" />
      <span className="block text-sm text-gray-300 sm:text-center">
        © 2023 Utopiaz 👨‍💻. All rights reserved.
      </span>
    </footer>
  );
}
