import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  titre: string;
  slug: string;
  image: string;
  alt: string;
  contenu: PortableTextBlock[];
};
