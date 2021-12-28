import React from "react";
import FSO_data from "../FSO_data";

const Content = () => {
  return (
    <div>
      {FSO_data.map((element, i) => (
        <div>
          <h2>{element.text}</h2>
          <p>{element.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
