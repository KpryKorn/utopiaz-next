import { Article } from "@/types/Article";
import { createClient, groq } from "next-sanity";
import { revalidatePath } from "next/cache";

// Helper function to get all articles
export async function getArticles(): Promise<Article[]> {
  const client = createClient({
    projectId: "17n9vsyq",
    dataset: "production",
    apiVersion: "2023-10-21",
    useCdn: true,
  });
  try {
    const articles = await client.fetch(
      groq`*[_type == "article"] | order(_createdAt desc){
        _id,
        _createdAt,
        _updatedAt,
        titre,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        contenu
    }`,
      revalidatePath("/") // revalidate the data when the page is loaded/refreshed
    );
    return articles;
  } catch (error) {
    console.error("!! Problèmes lors de la résolution des articles:", error);
    return [];
  }
}
