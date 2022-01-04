import { Part } from "./Part";

export const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return <Part title={part.name} exercise={part.exercises} />;
      })}
      {/* <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} /> */}
    </>
  );
};
