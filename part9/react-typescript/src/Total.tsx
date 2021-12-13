import React from "react";

interface courseProps {
  name: string;
  exerciseCount: number;
}

const Total = ({ courseParts }: { courseParts: Array<courseProps> }) => {
  return (
    <div>
      <p>Number of exercises </p>
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </div>
  );
};

export default Total;
