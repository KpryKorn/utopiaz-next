const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule: any) => Rule.required().max(60),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resume",
      title: "Résumé de l'article",
      type: "text",
      validation: (Rule: any) => Rule.required().min(50).max(150),
    },
    {
      name: "auteur",
      title: "Auteur",
      type: "reference",
      to: { type: "auteur" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "categories",
      title: "Catégories",
      type: "array",
      of: [{ type: "reference", to: { type: "categorie" } }],
    },
    {
      name: "contenu",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      validation: (Rule: any) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "titre",
      author: "auteur.nom",
      media: "image",
    },
  },
};

export default article;
