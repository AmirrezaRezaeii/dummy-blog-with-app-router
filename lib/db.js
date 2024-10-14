import sql from "better-sqlite3";

const db = sql("training.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT NOT NULL,
    tags TEXT NOT NULL, 
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER, 
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  )`);

db.exec(`
  CREATE TABLE IF NOT EXISTS likes (
    user_id INTEGER, 
    post_id INTEGER, 
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
  )`);




// const hasTrainings =
//   db.prepare('SELECT COUNT(*) as count FROM trainings').get().count > 0;

// if (!hasTrainings) {
//   db.exec(`
//     INSERT INTO trainings (title, image, description)
//     VALUES
//     ('Yoga', '/yoga.jpg', 'A gentle way to improve flexibility and balance.'),
//     ('Boxing', '/boxing.jpg', 'A high-energy workout that improves strength and speed.'),
//     ('Running', '/running.jpg', 'A great way to improve cardiovascular health and endurance.'),
//     ('Weightlifting', '/weightlifting.jpg', 'A strength-building workout that helps tone muscles.'),
//     ('Cycling', '/cycling.jpg', 'A low-impact workout that improves cardiovascular health and endurance.'),
//     ('Gaming', '/gaming.jpg', 'A fun way to improve hand-eye coordination and reflexes.'),
//     ('Sailing', '/sailing.jpg', 'A relaxing way to enjoy the outdoors and improve balance.');
// `);
// }

export async function getPosts(maxNumber) {
  let limitClause = "";

  if (maxNumber) {
    limitClause = "LIMIT ?";
  }

  const stmt = db.prepare(`
    SELECT posts.id, title, content, created_at AS createdAt, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    ${limitClause}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

export async function storePost(post) {
  const stmt = db.prepare(`
    INSERT INTO posts (title, content, user_id, tags)
    VALUES (?, ?, ?, ?)`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return stmt.run(post.title, post.content, post.userId, post.tags);
}

// export async function updatePostLikeStatus(postId, userId) {
//   const stmt = db.prepare(`
//     SELECT COUNT(*) AS count
//     FROM likes
//     WHERE user_id = ? AND post_id = ?`);

//   const isLiked = stmt.get(userId, postId).count === 0;

//   if (isLiked) {
//     const stmt = db.prepare(`
//       INSERT INTO likes (user_id, post_id)
//       VALUES (?, ?)`);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return stmt.run(userId, postId);
//   } else {
//     const stmt = db.prepare(`
//       DELETE FROM likes
//       WHERE user_id = ? AND post_id = ?`);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return stmt.run(userId, postId);
//   }
// }





export default db;
