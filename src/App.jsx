import { useEffect, useState } from "react";

//This is a component.
function Card({ title }) {
  //hasLiked is a State
  //useState is a react hook
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  });

  return (
    <>
      <div className="card rounded-md bg-orange-400 flex-col justify-center gap-4">
        <h2>{title}</h2>
        <button
          onClick={() => {
            setHasLiked((prevState) => (prevState = !prevState));
          }}
          className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        >
          {hasLiked ? "Liked" : "Like"}
        </button>
      </div>
    </>
  );
}

function App() {
  /*the title is called as a "prop".*/
  return (
    <>
      <h1 className="bg-red-200">The Movies:</h1>
      <Card title="Mahavatar Narsimha" />
      <Card title="Kurukshetra" />
      <Card title="Ramayan: Part-1" />
    </>
  );
}

export default App;
