import { getPosts } from "@/lib/db";

export default async function AllStoredPosts() {
  const posts = await getPosts();


  return (
    <ul className="grid grid-cols-4 gap-8 p-8">
      {posts.map((post) => (
        <li key={post.id} className="bg-slate-500 text-white rounded-md p-2 h-32 hover:bg-slate-800">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="">{post.tags}</p>
        </li>
      ))}
    </ul>
  );
}
