import React from "react";
import FSO_data from "../FSO_data";

const Total = () => {
  let total = FSO_data.reduce((sum, num) => sum + num * num, 0);
  return <div></div>;
};

export default Total;

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }
