import React from "react";
import FSO_data from "../FSO_data";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      <Part text={parts[0].name} exercises={parts[0].exercises} />
      <Part text={parts[1].name} exercises={parts[1].exercises} />
      <Part text={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

export default Content;
