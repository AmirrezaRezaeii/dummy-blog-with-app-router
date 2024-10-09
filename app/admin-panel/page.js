import AdminPanelSidebar from "@/components/admin-panel-sidebar";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPanelPage() {
  const result = await verifyAuth();

  if (!result.user) {
    redirect("/signup");
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 order-1">
        <h1 className="flex justify-center text-4xl font-bold mt-8">
          Admin Panel
        </h1>
      </div>
      <div className="col-span-3">
        <AdminPanelSidebar />
      </div>
    </div>
  );
}
