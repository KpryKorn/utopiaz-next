import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  titre: string;
  slug: string;
  image: string;
  contenu: PortableTextBlock[];
};
