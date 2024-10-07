import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPanelPage() {
  const result = await verifyAuth();

  if (!result.user) {
    redirect("/signup");
  }

  return <h1>Admin Panel</h1>;
}
