import EditPostForm from "@/components/edit-post-form";
import { getPostData } from "@/lib/posts";

export default async function EditPostPage({ params }) {
  const post = await getPostData(params.userPostId);


  return (
    <EditPostForm post={post} postId={params.userPostId} />
  );
}
