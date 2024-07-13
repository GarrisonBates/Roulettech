import React from "react";
import { InputWithSubmitButton } from "./InputWithSubmitButton";

export const SquareNumberForm = () => {
  return (
    <form className="flex flex-col bg-gray-300 p-5 rounded-lg">
      <label className="font-bold">Number to Square:</label>

      <InputWithSubmitButton />
    </form>
  );
};
