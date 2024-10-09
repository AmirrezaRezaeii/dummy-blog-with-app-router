

export default function CreatePostForm() {

    
  return (
    <div className="grid grid-cols-1 place-items-center mt-8">
      <form className="bg-slate-800 flex flex-col rounded-md p-8 gap-y-6">
        <input
          type="text"
          name="title"
          required
          placeholder="Title :"
          className="bg-slate-400 placeholder-white pl-2 py-1"
        />
        <textarea name="content" className="bg-slate-400 placeholder-white pl-2 py-1" cols={100} rows={10} placeholder="Content :"></textarea>
        <textarea name="tags" className="bg-slate-400 placeholder-white pl-2 py-1" cols={100} rows={1} placeholder="Tags :"></textarea>
        <button className="bg-sky-400 hover:bg-slate-500 p-2 rounded">Create</button>
      </form>
    </div>
  );
}
