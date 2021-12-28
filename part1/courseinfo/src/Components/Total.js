import React from "react";
import FSO_data from "../FSO_data";

const Total = ({ parts }) => {
  const totalAmount =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <div>
      <h2>The total is: {totalAmount}</h2>
    </div>
  );
};

export default Total;

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }
