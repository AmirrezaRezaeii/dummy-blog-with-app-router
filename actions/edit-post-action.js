"use server"

import { updatePostData } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function editPost(prevState, formData) {
  const editedTitle = formData.get("editedTitle");
  const editedContent = formData.get("editedContent");
  const editedTags = formData.get("editedTags");
  const postId = formData.get("postId")

  let errors = {};

  if (editedTitle.trim() === "") {
    errors.title = "Edited Title is required";
  }  

  if (editedContent.trim() === "") {
    errors.content = "Edited Content is required";
  }

  if (editedTags.trim() === "") {
    errors.tags = "Edited Tags is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await updatePostData(editedTitle, editedContent, editedTags, postId)
  
  revalidatePath("/admin-panel")
  redirect("/admin-panel")
}
