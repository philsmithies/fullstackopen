import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Welcome = ({ name }: { name: string }) => <h1>Hello, {name}</h1>;

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
