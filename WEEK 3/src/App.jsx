import React from "react";
import UserSearch from "./components/UserSearch";
import CountCharacters from "./components/CountCharacters";
import TemperatureApp from "./components/TemperatureApp";
import FocusTracker from "./components/FocusTracker";

const App = () => {
  return (
    <div>
      <UserSearch />
      <CountCharacters />
      <TemperatureApp />
      <FocusTracker />
    </div>
  );
};

export default App;
