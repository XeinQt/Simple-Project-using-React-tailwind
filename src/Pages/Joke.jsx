import { useState } from "react";

function Joke() {
  const [joke, setJoke] = useState("");

  function randomJoke() {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  }

  return (
    <div className="bg-green-800 w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[50%] mb-5 text-white text-xl text-center">
        <p>{joke || "Click the button to get a joke!"}</p>
      </div>
      <button
        onClick={randomJoke}
        className="bg-red-100 py-2 px-5 rounded-2xl hover:bg-red-200 transition"
      >
        Random Joke
      </button>
    </div>
  );
}

export default Joke;
