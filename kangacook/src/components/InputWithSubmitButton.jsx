import React, { useState } from "react";
import { BASE_URL } from "../global";

export const InputWithSubmitButton = () => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");

  const squareNumber = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}square-number?n=${value}`)
      .then((r) => r.json())
      .then((data) => {
        setNumber(data.square);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <input
          className="rounded-l-lg px-2"
          placeholder="Enter a number to square"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="rounded-r-lg bg-gray-800 text-white px-2"
          onClick={(e) => squareNumber(e)}
        >
          Submit
        </button>
      </div>
      <p className="font-bold mt-5">Squared: {number}</p>
    </div>
  );
};
