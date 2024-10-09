"use client";

import editPost from "@/actions/edit-post-action";
import { useFormState } from "react-dom";

export default function EditPostForm({ post, postId }) {
  const [formState, formAction] = useFormState(editPost, {});

  return (
    <div className="grid grid-cols-1 place-items-center mt-8">
      <form
        action={formAction}
        className="bg-slate-800 flex flex-col rounded-md p-8 gap-y-6"
      >
        <input
          type="text"
          name="editedTitle"
          placeholder="Title :"
          defaultValue={post.title}
          className="bg-slate-400 placeholder-white pl-2 py-1"
        />
        <textarea
          name="editedContent"
          className="bg-slate-400 placeholder-white pl-2 py-1"
          cols={100}
          rows={10}
          placeholder="Content :"
          defaultValue={post.content}
        ></textarea>
        <textarea
          name="editedTags"
          className="bg-slate-400 placeholder-white pl-2 py-1"
          cols={100}
          rows={1}
          placeholder="Tags :"
          defaultValue={post.tags}
        ></textarea>
        <input name="postId" value={postId} className="hidden" readOnly/>
        <button className="bg-sky-400 hover:bg-slate-500 p-2 rounded">
          Submit Edit
        </button>
      </form>
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
