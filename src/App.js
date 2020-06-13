import React, { useState, createContext } from "react";
import "./App.css";

const info = {
  name: "John",
  age: 20,
  gender: "male"
};

const ThemeContext = createContext(info);

const Person = () => {
  const info = React.useContext(ThemeContext);
  console.log(info);
  return (
    <div>
      <p>
        {info.name}, {info.age}, {info.gender}
      </p>
    </div>
  );
};

const Family = () => {
  return <Person />;
};

const App = () => {
  return (
    <ThemeContext.Provider value={info}>
      <Family />
    </ThemeContext.Provider>
  );
};

export default App;
