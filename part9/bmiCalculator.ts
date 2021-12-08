interface BmiValues {
  value1: number;
  value2: number;
}

type BmiResult = number;

const calculateBmi = (height: number, weight: number): BmiResult => {
  console.log("Your Bmi is all good brother");
  return height / weight;
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2, `The result is: `);
} catch (error: unknown) {
  let errorMessage = "Something bad happened";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
