import { getArticles } from "@/sanity/sanity-utils";
import { ImageResponse } from "next/server";

export const alt = "Article de blog - Utopiaz";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${article?.image})`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            utopiaz.net
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            borderRadius: 12,
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          {article?.titre}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
