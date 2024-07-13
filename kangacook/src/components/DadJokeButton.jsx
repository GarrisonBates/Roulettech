import React, { useState } from "react";
import { BASE_URL } from "../global";

export const DadJokeButton = () => {
  const [joke, setJoke] = useState("");
  console.log(joke);

  const getDadJoke = () => {
    fetch(`${BASE_URL}get-dad-joke`)
      .then((r) => r.json())
      .then((data) => {
        setJoke(data.dadJoke);
      });
  };

  return (
    <div className="bg-gray-300 p-5 rounded-lg flex flex-col gap-2 items-center w-1/3">
      <button
        className="bg-white p-2 rounded-lg font-bold w-60"
        onClick={getDadJoke}
      >
        Get Random Dad Joke
      </button>
      <p>{joke}</p>
    </div>
  );
};
