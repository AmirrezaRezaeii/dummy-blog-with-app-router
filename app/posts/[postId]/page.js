export default async function PostDetailPage({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const post = await res.json();

  console.log(post)

  return (
    <div className="space-y-4 p-4">
      <h3 className="text-3xl font-bold">{post.title}</h3>
      <p className="text-base font-medium">{post.body}</p>
      <p className="text-xl">Tags: {post.tags.join(" - ")}</p>
      <div className="flex gap-x-2">
        <p className="text-green-700">likes: {post.reactions.likes}</p>
        <p className="text-red-600">dislikes: {post.reactions.dislikes}</p>
      </div>
    </div>
  );
}
