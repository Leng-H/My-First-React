import React, { useState } from "react";

const Body = (props) => {
  let name = props.myObj.name;

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
      <button onClick={ageIncreaseHandler}>Click to make {name} older!</button>
      <p>
        I am {name} and I am now {currentAge} years old.{" "}
      </p>
    </div>
  );
};

export default Body;
