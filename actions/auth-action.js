"use server";

import { createAuthSession, detstoySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByUsername } from "@/lib/user";
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

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }

  try {
    const hashedPassword = hashUserPassword(password);
    const id = createUser(username, hashedPassword);
    await createAuthSession(id);
    redirect("/");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          username: "This username already exists",
        },
      };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const existingUser = getUserByUsername(username);

  if (!existingUser) {
    return {
      errors: {
        username: "There is no such a username",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "The password is wrong",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }

  return signup(prevState, formData);
}

export async function logout() {
  await detstoySession();
  redirect("/");
}
