import Header from "./Component/Header";
import Body from "./Component/Body";
import "./App.css";

function App() {
  const obj = {
    name: "Robot 3000",
    age: 45,
    hobbies: ["Walking", "Reading", "Meditating in the toilet"],
  };

  const onGreet = () => {
    alert("Hello human...");
  };

  return (
    <div className="App-header">
      {/* There are 2 ways to pass a value:
          1). Passing values to Header "by setting up the props"; myStr, myNum, myObj. 
              Then, go to Header.js and access the value using props.myStr for example.
          2). "By putting everything in between the tag" and then access the value using 
              props.children. */}
      <Header myStr={"Some string"} myNum={42354} myObj={obj}>
        <p>This is in between the Header tag in App.js</p>
      </Header>

      {/* Passing function to child Body.js, where it'll be called using "props.greet".
          And this is callbacks. This is the only way to do child-to-parent communication.
          _ SIDE-NOTE: if you were to use the this keyword in the method, then you'd need 
          to bind it; this.onGreet.bind(this) */}
      <Body myObj={obj} greet={onGreet} />
    </div>
  );
}

export default App;
