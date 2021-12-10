import express from "express";
const app = express();
import { bmiCalculator } from "./bmiCalculator";
import { calculator, Operation } from "./calculator";

interface Body {
  daily_exercises: number[];
  target: number;
  op: Operation;
}

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
  const { daily_exercises, target, op }: Body = req.body as Body;

  if (!daily_exercises || !target) {
    res.status(400).json({
      error: "parameters missing",
    });
  }

  const result = calculator(Number(daily_exercises), Number(target), op);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
