import React from "react";
import "./App.css";

const Greet = (props) => {
  const { name, age, gender } = props;
  console.log(props);
  return (
    <>
      <h1 className="container">Hello {name}</h1>
      <p>My age is {age}</p>
      <p>My gender is {gender}</p>
      {props.children}
    </>
  );
};
export default Greet;
