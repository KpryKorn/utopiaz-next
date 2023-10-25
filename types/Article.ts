import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  titre: string;
  slug: string;
  auteur: string;
  auteurImg: string;
  image: string;
  alt: string;
  categories: string[];
  contenu: PortableTextBlock[];
};
