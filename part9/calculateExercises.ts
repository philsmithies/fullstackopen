interface exerciseValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface exerciseInput {
  exercises: Array<any>;
  target: number;
}

const parseExerciseArguments = (args: Array<string>): exerciseInput => {
  if (args.length < 2) throw new Error("Not enough entries");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    let exercises: Array<string | number> = [];
    for (let i = 2; i < args.length; i++) {
      exercises.push(parseInt(args[i], 10));
    }
    return {
      exercises,
      target: Number(args[args.length - 1]),
    };
  } else {
    throw new Error("Incorrect String");
  }
};

const calculateExercises = (
  exercises: Array<number>,
  target: number
): exerciseValues => {
  const periodLength = exercises.length;
  const trainingDays = exercises.filter((entry) => entry > 0).length;
  exercises.pop();
  let total = 0;
  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i] > 0) total += exercises[i];
  }
  // const total = exercises.reduce((x, y) => x + y, 0);
  console.log("the total is " + total);
  const average = total / periodLength;
  const success = average > target;
  let rating = 0;
  let ratingDescription = "";

  switch (true) {
    case average < 1:
      rating = 1;
      break;
    case average < 2:
      rating = 2;
      break;
    case average > 2:
      rating = 3;
      break;
  }

  switch (true) {
    case average < 1:
      ratingDescription = "room for improvement";
      break;
    case average < 2:
      ratingDescription = "not too bad but could be better";
      break;
    case average > 2:
      ratingDescription = "well done";
      break;
  }

  console.log({
    periodLength,
    trainingDays,
    average,
    success,
    target,
    rating,
    ratingDescription,
  });

  return {
    periodLength,
    trainingDays,
    average,
    success,
    target,
    rating,
    ratingDescription,
  };
};

try {
  const { exercises, target } = parseExerciseArguments(process.argv);
  calculateExercises(exercises, target);
} catch (error: unknown) {
  let errorMessage = "Something bad happened";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

module.exports = calculateExercises;
