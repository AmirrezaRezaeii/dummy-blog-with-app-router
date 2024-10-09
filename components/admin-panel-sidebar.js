import Link from "next/link";

export default function AdminPanelSidebar() {
  return (
    <ul className="bg-sky-900 flex flex-col gap-y-10 font-semibold text-xl px-4 py-10 h-screen text-white">
      <li className="hover:bg-sky-400 hover:text-black rounded p-2"><Link href="/admin-panel/create-post">Create Post</Link></li>
      <li className="hover:bg-sky-400 hover:text-black rounded p-2"><Link href="/admin-panel/edit-post">Edit Post</Link></li>
    </ul>
  );
}
