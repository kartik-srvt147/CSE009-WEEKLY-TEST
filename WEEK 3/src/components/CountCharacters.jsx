import React, { useEffect, useState } from "react";

const CountCharacters = () => {
  const LIMIT = 50;

  const useCharacterCounter = (limit) => {
    const [text, setText] = useState("");
    const [remaining, setRemaining] = useState(limit);

    useEffect(() => {
      setRemaining(limit - text.length);
    }, [text, limit]);

    const handleChange = (e) => {
      if (e.target.value.length <= limit) {
        setText(e.target.value);
      }
    };

    return { text, handleChange, remaining };
  };

  const { text, handleChange, remaining } = useCharacterCounter(LIMIT);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950">
      <div className="bg-gray-900 p-6 rounded-xl shadow w-96 border-3 border-teal-300 text-white">
        <h1 className="text-xl font-bold mb-4 text-teal-300">
          Live Character Counter
        </h1>

        <textarea
          value={text}
          onChange={handleChange}
          rows="4"
          className="w-full border p-2 rounded-md border-teal-300"
        />

        <p className="mt-3">Characters: {text.length}</p>
        <p>Remaining: {remaining}</p>

        {remaining <= 10 && remaining >= 1 && (
          <p className="text-red-500 font-bold">
            !!! Only {remaining} characters left!
          </p>
        )}

        {remaining == 0 && (
          <p className="text-red-500 font-bold">!!! No more characters left!</p>
        )}
      </div>
    </div>
  );
};

export default CountCharacters;
