import db from "./db";

export function createUser(username, password) {
  const result = db
    .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
    .run(username, password);
  return result.lastInsertRowid;
}

export function getUserByUsername(username) {
  return db.prepare("SELECT * FROM users WHERE username = ?").get(username);
}
