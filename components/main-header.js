import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="bg-sky-900 text-white flex justify-between p-4">
      <p className="ml-8">Dummy Blog</p>
      <ul className="flex justify-between gap-x-10 mx-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">All Posts</Link>
        </li>
      </ul>
    </div>
  );
}
