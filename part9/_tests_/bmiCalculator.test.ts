const calcBmi = require("../bmiCalculator");

it("can work out a normal bmi", () => {
  expect(calcBmi(180, 74)).toBe("1111");
});
