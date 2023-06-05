import React from "react";
import "./StartScreen.css";
const StartScreen = ({ startGame }) => {
  return (
    <div>
      <h1>Start Screen</h1>
      <button onClick={startGame}>next</button>
    </div>
  );
};

export default StartScreen;
