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
      {/* Passing values to Header as follows. Then, go to Header.js and access the value using props */}
      <Header myStr={"Some string"} myNum={42354} myObj={obj} />
      <Body />
    </div>
  );
}

export default App;
