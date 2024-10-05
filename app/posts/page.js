import Link from "next/link";

export default async function AllPosts() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  console.log(data);

  return (
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
  );
}
