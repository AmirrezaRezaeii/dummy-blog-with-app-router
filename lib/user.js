import db from "./db";

import { verifyAuth } from "./auth";

export function createUser(username, password) {
  const result = db
    .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
    .run(username, password);
  return result.lastInsertRowid;
}

export function getUserByUsername(username) {
  return db.prepare("SELECT * FROM users WHERE username = ?").get(username);
}

export async function getLoggedInUser() {
  const result = await verifyAuth()

  const username = result.user.username

  if (result.user) {
    return db.prepare("SELECT * FROM users WHERE username = ?").get(username)
  }
}

