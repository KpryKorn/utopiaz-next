const article = {
  name: "article",
  title: "📄 Articles",
  type: "document",
  groups: [
    {
      name: "champsText",
      title: "Champs de texte",
      default: true,
    },
    {
      name: "details",
      title: "Détails",
    },
  ],
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
      group: "champsText",
      validation: (Rule: any) => Rule.required().max(60),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
      },
      group: "champsText",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resume",
      title: "Résumé de l'article",
      type: "text",
      group: "champsText",
      rows: 3,
      validation: (Rule: any) => Rule.required().min(50).max(150),
    },
    {
      name: "auteur",
      title: "Auteur",
      type: "reference",
      group: "details",
      to: { type: "auteur" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: "details",
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
      group: "details",
      type: "array",
      of: [{ type: "reference", to: { type: "categorie" } }],
    },
    {
      name: "contenu",
      title: "Contenu",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
      group: "champsText",
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
