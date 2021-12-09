import express from "express";
const app = express();
const bmiCalculator = require("./bmiCalculator");

app.get("/ping", (_req, res) => {
  res.send("pong ping");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  res.send(bmiCalculator(req.query.height, req.query.weight));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
