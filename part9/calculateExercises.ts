interface exerciseValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exercises: Array<number>,
  target: number
): exerciseValues => {
  const periodLength = exercises.length;
  const trainingDays = exercises.filter((entry) => entry > 0).length;
  const total = exercises.reduce((x, y) => x + y, 0);
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
    case average < 2:
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
    case average < 2:
      ratingDescription = "well done";
      break;
  }

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

module.exports = calculateExercises;
