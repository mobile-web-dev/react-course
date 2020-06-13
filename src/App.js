import React, { useState } from "react";
import "./App.css";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <div>Counter :{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Counter counter={counter} increment={increment} decrement={decrement} />
    </>
  );
};

export default App;
