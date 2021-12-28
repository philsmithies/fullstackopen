import React from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Total from "./Components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <h1>testing</h1>
      <Header course={course} />
      {/* <Content part1={part1} />
      <Total exercises1={exercises1} /> */}
    </div>
  );
};

export default App;
