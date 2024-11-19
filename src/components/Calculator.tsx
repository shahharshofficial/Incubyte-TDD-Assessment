import React, { useState } from "react";
import { Calculator } from "../utils/calculator/add";

const StringCalculatorComponent: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<{
    sum: number;
    delimiters: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = () => {
    setError(null);
    setResult(null);
    try {
      const sum = Calculator().add(input);
      setResult(sum);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border-2 border-gray-300 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">String Calculator</h2>
      <textarea
        className="w-full p-3 border rounded-md mb-4 text-gray-800"
        rows={3}
        placeholder='Enter numbers, e.g., "1,2,3"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={handleAdd}
      >
        Add
      </button>
      {result !== null && (
        <>
          <p className="mt-4 text-green-600 font-medium">
            Result: {result?.sum}
          </p>
          <p className="mt-4 text-green-600 font-medium">
            Delimiter is {result?.delimiters.join(" ")}
          </p>
        </>
      )}
      {error && <p className="mt-4 text-red-600 font-medium">Error: {error}</p>}
    </div>
  );
};

export default StringCalculatorComponent;
