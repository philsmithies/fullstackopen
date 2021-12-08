const calcBmi = require("../bmiCalculator");

xit("can work out a normal bmi", () => {
  expect(calcBmi(180, 74)).toBe("You're Underweight");
});
