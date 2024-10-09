"use server";

import { deletePost } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteBtnHandler(prevState, formData) {
  const postId = formData.get("postId");
  await deletePost(postId);

  revalidatePath("/");
  redirect("/admin-panel");
}
