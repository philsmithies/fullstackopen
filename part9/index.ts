import express from "express";
const app = express();
import { bmiCalculator } from "./bmiCalculator";
import { calculator } from "./calculator";

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
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.send({ error: "malformatted parameters", message: err.message });
      }
    }
  }
});

app.post("/calculate", (req, res) => {
  const { value1, value2, op } = req.body;
  const result = calculator(Number(value1), Number(value2), op);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
