import React from "react";
import FSO_data from "../FSO_data";

const Total = ({ exercises1, exercises2, exercises3 }) => {
  const totalAmount = exercises1 + exercises2 + exercises3;
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
