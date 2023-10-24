import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: Date;
  titre: string;
  slug: string;
  image: string;
  alt: string;
  contenu: PortableTextBlock[];
};
