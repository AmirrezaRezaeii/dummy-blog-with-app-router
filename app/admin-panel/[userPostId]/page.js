import { getPostData } from "@/lib/posts";

export default async function userPostDetailPage({ params }) {
  const post = await getPostData(params.userPostId);

  return (
    <div className="space-y-4 p-4">
      <h3 className="text-3xl font-bold">{post.title}</h3>
      <p className="text-xl font-medium">{post.content}</p>
      <p className="text-base">Tags: {post.tags}</p>
    </div>
  );
}
