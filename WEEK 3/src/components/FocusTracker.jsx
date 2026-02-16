import { useState, useRef } from "react";

const FocusTracker = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [focusCount, setFocusCount] = useState(0);

  const inputRef = useRef(null);
  const historyRef = useRef([]);

  const handleSubmit = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      historyRef.current.push(message);
      setMessage("");
    }
  };

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950">
      <div className="bg-sky-50 border-3 border-blue-500 p-6 rounded-xl shadow w-96">
        <h1 className="text-xl font-bold mb-4">Focus Tracker & History</h1>

        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={message}
            onFocus={handleFocus}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
            className="flex-1 border p-2 rounded-md"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-3 rounded-md"
          >
            Submit
          </button>
        </div>

        <button
          onClick={focusInput}
          className="mt-3 bg-gray-800 text-white px-3 py-1 rounded-md"
        >
          Focus Input
        </button>

        <p className="mt-3">Focus count: {focusCount}</p>

        <div className="mt-3">
          {messages.map((msg, i) => (
            <p key={i}>- {msg}</p>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-600">
          History in Ref (no re-render): {historyRef.current.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default FocusTracker;
