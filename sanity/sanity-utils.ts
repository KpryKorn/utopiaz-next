import { Article } from "@/types/Article";
import { Categorie } from "@/types/Categorie";
import { createClient, groq } from "next-sanity";
import { revalidatePath } from "next/cache";

const client = createClient({
  projectId: "17n9vsyq",
  dataset: "production",
  apiVersion: "2023-10-21",
  useCdn: true,
});

// Helper function to get all articles
export async function getArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch(
      groq`*[_type == "article"] | order(_createdAt desc){
        _id,
        _createdAt,
        _updatedAt,
        titre,
        "slug": slug.current,
        resume,
        "auteur": auteur->nom,
        "auteurImg": auteur->image.asset->url,
        "image": image.asset->url,
        "alt": image.alt,
        "categories": categories->titre,
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

export async function getLastArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch(
      groq`*[_type == "article"] | order(_createdAt desc)[0..3]{
        _id,
        _createdAt,
        _updatedAt,
        titre,
        "slug": slug.current,
        resume,
        "auteur": auteur->nom,
        "auteurImg": auteur->image.asset->url,
        "image": image.asset->url,
        "alt": image.alt,
        "categories": categories->titre,
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

export async function getCategories(): Promise<Categorie[]> {
  try {
    const categories = await client.fetch(
      groq`*[_type == "categorie"] | order(_createdAt asc){
        titre,
        description,
        "slug": slug.current,
      }`
    );
    return categories;
  } catch (error) {
    console.error("!! Problèmes lors de la résolution des articles:", error);
    return [];
  }
}

export async function getBackendArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch(
      groq`*[_type == "article" && categories->titre == "Backend"] | order(_createdAt desc){
        _id,
        _createdAt,
        _updatedAt,
        titre,
        "slug": slug.current,
        resume,
        "auteur": auteur->nom,
        "auteurImg": auteur->image.asset->url,
        "image": image.asset->url,
        "alt": image.alt,
        "categories": categories->titre,
        contenu
    }`,
      revalidatePath("/")
    );
    return articles;
  } catch (error) {
    console.error("!! Problèmes lors de la résolution des articles:", error);
    return [];
  }
}
