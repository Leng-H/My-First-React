import Header from "./Component/Header";
import Body from "./Component/Body";
import "./App.css";

function App() {
  const obj = {
    name: "Jake",
    age: 45,
    hobbies: ["Walking", "Reading", "Meditating in the toilet"],
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
      <Body />
    </div>
  );
}

export default App;
