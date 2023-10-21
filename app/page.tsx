import { getPosts } from "@/sanity/sanity-utils";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h2 className="font-semibold text-xl">{post.titre}</h2>
            <p>{post.contenu[0].children[0].text}</p>
          </div>
        );
      })}
    </div>
  );
}
