import React from "react";
import FSO_data from "../FSO_data";

const Content = () => {
  return (
    <div>
      {FSO_data.map((element, i) => (
        <p>{element.text}</p>
      ))}
    </div>
  );
};

export default Content;
