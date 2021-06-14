import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  console.log("In Header.js");
  console.log(props);

  return (
    <div>
      <h1>Header</h1>
      <p>
        I am {props.myObj.name}. I am {props.myObj.age} years old.{" "}
      </p>

      <div>
        <h3>Hobbies</h3>
        {/* map() is used here because in App.js, hobbies is an array */}
        <ul>
          {props.myObj.hobbies.map((input, i) => (
            <li key={i}>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Typechecking with PropTypes: It's a good practice.
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
Header.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.object,
};

export default Header;
