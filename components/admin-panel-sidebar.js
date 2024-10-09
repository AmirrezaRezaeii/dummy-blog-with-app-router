import Link from "next/link";

export default function AdminPanelSidebar() {
  return (
    <ul className="bg-sky-900 flex flex-col gap-y-10 font-semibold text-xl px-4 py-10 h-screen text-white">
      <Link href="/admin-panel/create-post">
        <li className="hover:bg-sky-400 hover:text-black rounded p-2 text-center">
          Create Post
        </li>
      </Link>
    </ul>
  );
}
