
export default async function AllPosts() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json()
  
    return <ul className="grid grid-cols-4 gap-8 p-8">
      {data.posts.map((post) => <li className="bg-slate-500 text-white rounded-md p-2" key={post.id}>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-base font-medium">{post.body}</p>
      </li>)}
    </ul>;
  }
  