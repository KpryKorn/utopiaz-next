import { Article } from "@/types/Article";
import { formatDate } from "@/app/_lib/utils";
import Link from "next/link";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import CategoryPill from "./CategoryPill";

export default function ArticlesGridItem(props: { article: Article }) {
  const { article } = props;
  return (
    <li
      key={article._id}
      className="aspect-square sm:aspect-[2/3] max-w-full rounded-lg bg-slate-800 hover:bg-slate-600 p-px text-white transition-colors duration-300 ease-out overflow-hidden group"
    >
      <Link
        href={`blog/${article.slug}`}
        className="p-4 flex flex-col justify-between h-full bg-slate-900 relative rounded-lg"
      >
        <div className="z-10">
          <figure className="pb-2 flex justify-between items-center">
            <img
              src={article.auteurImg}
              alt={`Photo de profil de ${article.auteur}`}
              className="rounded-full w-8 h-8 object-cover object-center"
            />
            <figcaption className="text-xs lowercase">
              <CategoryPill category={article.categories} />
            </figcaption>
          </figure>
          <h3 className="font-semibold text-lg">{article.titre}</h3>
        </div>
        <figure className="z-10">
          <figcaption className="text-gray-300 text-sm pb-1">
            {formatDate(article._createdAt.toString())} • 5' de lecture
          </figcaption>
          <img
            src={article.image}
            alt={article.alt}
            title={article.alt}
            className="rounded-lg aspect-[3/2] object-cover object-center"
          />
          <div className="flex justify-between items-center pt-4">
            <Heart className="stroke-gray-300" />
            <MessageSquare className="stroke-gray-300" />
            <Share2 className="stroke-gray-300" />
          </div>
        </figure>
        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl rounded-full bg-indigo-600 group-hover:bg-blue-400 transition-colors duration-300 ease-out"></div>
      </Link>
    </li>
  );
}
