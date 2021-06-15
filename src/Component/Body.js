import React, { useState } from "react";
import PropTypes from "prop-types";

const Body = (props) => {
  // Declare a new state variable, which we'll call "currentAge"
  const [currentAge, setCurrentAge] = useState(props.myObj.age);

  const ageIncreaseHandler = () => {
    // console.log(name + " is " + currentAge);
    setCurrentAge(currentAge + 10);
  };

  return (
    <div>
      <h1>Body</h1>
      <p>This is a new component!</p>
      <button onClick={ageIncreaseHandler}>
        Click to make {props.myObj.name} older!
      </button>
      <p>
        I am {props.myObj.name} and I am now {currentAge} years old.{" "}
      </p>
      <button onClick={props.greet}>Click me and I'll greet you</button>
    </div>
  );
};

Body.prototype = {
  age: PropTypes.number,
  name: PropTypes.string,
  greet: PropTypes.func,
};

export default Body;
