import AllStoredPosts from "@/components/all-posts/all-stored-posts";
import { verifyAuth } from "@/lib/auth";
import { getPostsByAuthor } from "@/lib/posts";
import { getUserById } from "@/lib/user";
import Link from "next/link";

export default async function AllPosts() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  const result = await verifyAuth();

  let username = ""

  if (result.user) {
    username = getUserById(result.user.id).username;
  }

  

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Posts by API</h1>
      <ul className="grid grid-cols-4 gap-8 p-8">
        {data.posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li className="bg-slate-500 text-white rounded-md p-2 h-32 hover:bg-slate-800">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <span className="">views: {post.views}</span>
            </li>
          </Link>
        ))}
      </ul>
      {result.user ? (
        <div>
          <h2 className="text-3xl font-bold text-center">
            Posts by user: {username}
          </h2>
          <AllStoredPosts />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
