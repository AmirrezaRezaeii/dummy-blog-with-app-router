import { verifyAuth } from "@/lib/auth";
import Link from "next/link";

export default async function MainHeader() {
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
        <li>
          <Link
            href="/signup"
            className="bg-sky-500 text-sky-900 p-2 rounded hover:bg-sky-700 hover:text-white duration-200"
          >
            signup/login
          </Link>
        </li>
      </ul>
    </div>
  );
}
