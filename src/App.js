import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const onKeypress = (e) => {
    const answer = parseInt(response);
    if (e.key == "Enter") {
      if (answer === num1 + num2) {
        setScore(score + 1);
        setNum1(Math.ceil(Math.random() * 10));
        setNum2(Math.ceil(Math.random() * 10));
        setResponse("");
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  if (score >= 5) {
    return (
      <div className="container">
        <h1 style={{ color: "white" }}>Yoohoo! You won!!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="child">
        <h1>
          {num1} + {num2}
        </h1>
        <input
          type="text"
          value={response}
          placeholder="answer"
          onChange={(e) => setResponse(e.target.value)}
          onKeyDown={onKeypress}
        />
        {error ? <p style={{ color: "red" }}>opps you are wrong</p> : ""}
        <h5>Score: {score}</h5>
      </div>
    </div>
  );
}

export default App;
