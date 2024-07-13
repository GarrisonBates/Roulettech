import React from "react";
import { DadJokeButton } from "./DadJokeButton";
import { SquareNumberForm } from "./SquareNumberForm";

const Home = () => {
  return (
    <div className="bg-gray-400 h-dvh w-dvw flex flex-col gap-10 items-center justify-center">
      <h1 className="text-white text-4xl">
        Roulettech Application - Garrison Bates
      </h1>
      <DadJokeButton />
      <SquareNumberForm />
    </div>
  );
};
export default Home;
