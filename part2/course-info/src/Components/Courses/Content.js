import { Part } from "./Part";

export const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part title={part.name} exercise={part.exercises} key={part.id} />
        );
      })}
    </>
  );
};
