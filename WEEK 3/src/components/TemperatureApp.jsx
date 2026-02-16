import { useState, useEffect } from "react";

const TemperatureApp = () => {
  const useTemperature = () => {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    useEffect(() => {
      if (celsius !== "") {
        setFahrenheit(((celsius * 9) / 5 + 32).toFixed(2));
      }
    }, [celsius]);

    useEffect(() => {
      if (fahrenheit !== "") {
        setCelsius((((fahrenheit - 32) * 5) / 9).toFixed(2));
      }
    }, [fahrenheit]);

    return { celsius, setCelsius, fahrenheit, setFahrenheit };
  };

  const { celsius, setCelsius, fahrenheit, setFahrenheit } = useTemperature();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950">
      <div className="bg-gray-900 p-6 rounded-xl shadow w-96 border border-teal-300">
        <h1 className="text-2xl font-extrabold tracking-tight mb-4 text-teal-500">
          Temperature Converter
        </h1>

        <div className="mb-4">
          <label className="block mb-1 text-white font-bold">Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="w-full border border-teal-300 p-2 text-white rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-white font-bold">Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            className="w-full border p-2 rounded-md text-white border-teal-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureApp;
