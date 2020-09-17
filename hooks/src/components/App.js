import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTIme] = useState(time);
  const getTime = () => {
    const updateTIme = new Date().toLocaleTimeString();
    setCurrentTIme(updateTIme);
  };
  return (
    <div className="container">
      <h1> {currentTime} </h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
};

export default App;
