import { Article } from "@/types/Article";
import { formatDate } from "@/app/_lib/utils";
import Link from "next/link";
import { Heart, MessageSquare, Share2 } from "lucide-react";

export default function ArticlesGridItem(props: { article: Article }) {
  const { article } = props;
  return (
    <li
      key={article._id}
      className="aspect-square md:aspect-[2/3] max-w-full rounded-lg bg-slate-800 p-[2px] text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden"
    >
      <Link
        href={`blog/${article.slug}`}
        className="p-4 flex flex-col justify-between h-full bg-slate-900 rounded-lg"
      >
        <div>
          <h3 className="font-semibold text-lg">{article.titre}</h3>
        </div>
        <figure>
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
      </Link>
    </li>
  );
}
