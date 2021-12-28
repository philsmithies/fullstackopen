import React from "react";
import FSO_data from "../FSO_data";
import Part from "./Part";

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part text={part1} exercises={exercises1} />
      <Part text={part2} exercises={exercises2} />
      <Part text={part3} exercises={exercises3} />
    </div>
  );
};

export default Content;
