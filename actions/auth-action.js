"use server";

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

  const hashedPassword = hashUserPassword(password)

  createUser(username, hashedPassword)

  redirect("/")
}
