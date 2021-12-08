const calculateExercise = require("../calculateExercises.ts");

it("can work out the amount of days that had exercise", () => {
  expect(calculateExercise([3, 0, 2, 4.5, 0, 3, 1])).toBe(7);
});
