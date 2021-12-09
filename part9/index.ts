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
  if (req.query) {
    try {
      const height = req.query.height as string;
      const weight = req.query.weight as string;
      const result = bmiCalculator(parseInt(height, 10), parseInt(weight, 10));
      res.send(result);
    } catch (error) {
      res.send({ error: "malformatted parameters", message: error.message });
    }
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
