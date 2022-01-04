import React from "react";
import { Header } from "../Header";
import { Content } from "./Content";
import { Total } from "../Total";

export const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        console.log(course.parts);
        return (
          <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            {/* <Total course={course} /> */}
          </div>
        );
      })}
    </>
  );
};
