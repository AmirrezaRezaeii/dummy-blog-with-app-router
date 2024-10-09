"use server";

import { storePost } from "@/lib/db";
import { getLoggedInUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const tags = formData.get("tags");
  
  const author = await getLoggedInUser();
  const authorId = author.id;
  // console.log(author, authorId);

  let errors = {};

  if (title.trim() === "") {
    errors.title = "Title is required";
  }

  if (content.trim() === "") {
    errors.content = "Content is required";
  }

  if (tags.trim() === "") {
    errors.tags = "Tags is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  try {
    await storePost({
      title,
      content,
      userId: authorId,
      tags,
    });
  } catch (error) {
    throw error;
  }

  redirect("/admin-panel");
}
