interface BmiValues {
  value1: number;
  value2: number;
}
type BmiResult = number;

const parseBmiArguments = (args: Array<string>): BmiValues => {
  if (args.length < 3) throw new Error("Not enough arguments");
  if (args.length > 3) throw new Error("Too many arguments");

  if (!isNaN(Number(args[1])) && !isNaN(Number(args[2]))) {
    return {
      value1: Number(args[1]),
      value2: Number(args[2]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const calculateBmi = (height: number, weight: number): BmiResult => {
  let result = height / weight;
  return result;
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2);
} catch (error: unknown) {
  let errorMessage = "Something bad happened";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

module.exports = calculateBmi;
