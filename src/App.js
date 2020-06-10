import React from "react";
import Greet from "./Greet";
const App = () => {
  return (
    <div>
      <Greet name="Sam" age="20" gender="male">
        <p>This is a para</p>
      </Greet>
      <Greet name="Luna" age="15" gender="female">
        <button>Click me</button>
      </Greet>
      <Greet name="John" age="18" gender="male" />
      <Greet name="Amy" age="20" gender="female" />
      <Greet name="xyz" age="25" gender="male" />
    </div>
  );
};

export default App;
