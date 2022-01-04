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
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </>
  );
};
