"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  let errors = {};

  if (username.trim() === "") {
    errors.username = "Please enter a valid username";
  }

  if (password.trim().length < 8) {
    errors.password = "Please enter a valid password ( 8 characters at least )";
  }

  if(Object.keys(errors).length > 0) {
    return {
        errors: errors
    }
  }

  try {
    const hashedPassword = hashUserPassword(password)
    const id = createUser(username, hashedPassword)
    await createAuthSession(id)
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          username: "This username already exists"
        }
      }
    }
    throw error
  }

  redirect("/")
}
