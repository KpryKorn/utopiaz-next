const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
      },
    },
    {
      name: "resume",
      title: "Résumé de l'article",
      type: "string",
      options: {
        maxLength: 200,
      },
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
      of: [{ type: "block" }],
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
