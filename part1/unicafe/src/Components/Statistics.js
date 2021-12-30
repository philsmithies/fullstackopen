export const Statistics = ({
  good,
  bad,
  neutral,
  findTotal,
  findPositive,
  findAverage,
}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Bad {bad}</p>
      <p>Neutral {neutral}</p>
      <p>All {findTotal}</p>
      <p>Average {findAverage}</p>
      <p>Amount Positive {findPositive}</p>
    </div>
  );
};
