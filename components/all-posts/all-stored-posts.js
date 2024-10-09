import { getPosts } from "@/lib/db";
import Link from "next/link";
import DeleteBtn from "../delete-button";

export default async function AllStoredPosts() {
  const posts = await getPosts();

  return (
    <ul className="grid grid-cols-4 gap-8 p-8">
      {posts.map((post) => (
        <li
          key={post.id}
          className="bg-slate-500 flex flex-col justify-between text-white rounded-md p-2 h-32"
        >
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="">{post.tags}</p>
          <div className="flex justify-between items-center">
            <Link
              className="bg-sky-900 text-white p-2 rounded hover:bg-slate-800"
              href={`/admin-panel/${post.id}`}
            >
              See Post
            </Link>
            <DeleteBtn postId={post.id} />
            <Link
              className="hover:bg-sky-400 p-2 hover:rounded"
              href={`/admin-panel/${post.id}/edit`}
            >
              Edit
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
