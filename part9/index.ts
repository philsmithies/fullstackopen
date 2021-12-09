import express from "express";
const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong ping");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
