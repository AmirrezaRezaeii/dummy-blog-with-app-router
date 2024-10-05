

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center justify-center mt-8">
      <h1 className="text-5xl font-extrabold">Welcome to my dummy blog with app router</h1>
      <h2 className="text-2xl font-bold">Tools that i used:</h2>
      <div className="grid grid-cols-2">
        <div>
          <p>Next js</p>
        </div>
        <div>
          <p>tailwind for styling</p>
        </div>
      </div>
    </div>
  );
}
