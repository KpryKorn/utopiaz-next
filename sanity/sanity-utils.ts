import { Post } from "@/types/Post";
import { createClient, groq } from "next-sanity";
import { revalidatePath } from "next/cache";

export async function getPosts(): Promise<Post[]> {
  const client = createClient({
    projectId: "17n9vsyq",
    dataset: "production",
    apiVersion: "2023-10-21",
  });

  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        titre,
        "slug": slug.current,
        "image": image.asset->url,
        contenu
    }`,
    revalidatePath("/") // revalidate the home page when a new post is created
  );
}
