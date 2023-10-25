import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <span className="font-bold text-xl uppercase bg-gradient-to-l from-purple-500 to-blue-400 text-transparent bg-clip-text">
        Utopiaz
      </span>
    </Link>
  );
}
