import { getArticles } from "@/sanity/sanity-utils";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../_lib/utils";
import CategoryPill from "./CategoryPill";
import ArticlesGridItem from "./ArticlesGridItem";

export default async function BlogGridLayout() {
  const articles = await getArticles();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 lg:grid-rows-2 gap-4">
      <li
        key={articles[0]._id}
        className="col-span-1 lg:col-span-2 row-span-1 aspect-square lg:aspect-square sm:aspect-[2/3] rounded-lg bg-slate-800 hover:bg-slate-700 p-px text-white transition-colors duration-300 ease-out overflow-hidden group"
      >
        <Link
          href={`/blog/${articles[0].slug}`}
          className="p-4 flex flex-col justify-between h-full bg-slate-950 relative rounded-lg"
        >
          <div className="z-10">
            <figure className="pb-2 flex justify-between items-center">
              <Image
                src={articles[0].auteurImg}
                width={300}
                height={300}
                loading="eager"
                alt={`Photo de profil de ${articles[0].auteur}`}
                className="rounded-full w-8 h-8 object-cover object-center"
              />
              <figcaption className="text-xs lowercase">
                <CategoryPill category={articles[0].categories} />
              </figcaption>
            </figure>
            <h3 className="font-semibold text-lg">{articles[0].titre}</h3>
          </div>
          <figure className="z-10">
            <figcaption className="text-gray-400 text-sm pb-1">
              {formatDate(articles[0]._createdAt.toString())} • 5' de lecture
            </figcaption>
            <Image
              src={articles[0].image}
              width={1000}
              height={1000}
              loading="eager"
              alt={articles[0].alt}
              title={articles[0].alt}
              className="rounded-lg aspect-[3/2] object-cover object-center"
            />
            <div className="flex justify-between items-center pt-4">
              <Heart className="stroke-gray-400" />
              <MessageSquare className="stroke-gray-400" />
              <Share2 className="stroke-gray-400" />
            </div>
          </figure>
          <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl rounded-full bg-indigo-600 group-hover:bg-blue-400 transition-colors duration-300 ease-out"></div>
        </Link>
      </li>
      <li
        key={articles[1]._id}
        className="col-span-1 lg:col-span-2 row-span-1 aspect-square lg:aspect-square sm:aspect-[2/3] rounded-lg bg-slate-800 hover:bg-slate-700 p-px text-white transition-colors duration-300 ease-out overflow-hidden group"
      >
        <Link
          href={`/blog/${articles[1].slug}`}
          className="p-4 flex flex-col justify-between h-full bg-slate-950 relative rounded-lg"
        >
          <div className="z-10">
            <figure className="pb-2 flex justify-between items-center">
              <Image
                src={articles[1].auteurImg}
                width={300}
                height={300}
                loading="eager"
                alt={`Photo de profil de ${articles[1].auteur}`}
                className="rounded-full w-8 h-8 object-cover object-center"
              />
              <figcaption className="text-xs lowercase">
                <CategoryPill category={articles[1].categories} />
              </figcaption>
            </figure>
            <h3 className="font-semibold text-lg">{articles[1].titre}</h3>
          </div>
          <figure className="z-10">
            <figcaption className="text-gray-400 text-sm pb-1">
              {formatDate(articles[1]._createdAt.toString())} • 5' de lecture
            </figcaption>
            <Image
              src={articles[1].image}
              width={1000}
              height={1000}
              loading="eager"
              alt={articles[1].alt}
              title={articles[1].alt}
              className="rounded-lg aspect-[3/2] object-cover object-center"
            />
            <div className="flex justify-between items-center pt-4">
              <Heart className="stroke-gray-400" />
              <MessageSquare className="stroke-gray-400" />
              <Share2 className="stroke-gray-400" />
            </div>
          </figure>
          <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl rounded-full bg-indigo-600 group-hover:bg-blue-400 transition-colors duration-300 ease-out"></div>
        </Link>
      </li>
      <ArticlesGridItem article={articles[2]} />
      <ArticlesGridItem article={articles[3]} />
      <ArticlesGridItem article={articles[4]} />
      <ArticlesGridItem article={articles[5]} />
    </ul>
  );
}
