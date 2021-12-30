import StatisticsLine from "./StatisticsLine";

export const Statistics = ({
  good,
  bad,
  neutral,
  findTotal,
  findPositive,
  findAverage,
}) => {
  return (
    <>
      <h1>Statistics</h1>
      {findTotal ? (
        <div>
          <table>
            <tbody>
              <StatisticsLine text="Good" value={good} />
              <StatisticsLine text="Bad" value={bad} />
              <StatisticsLine text="Neutral" value={neutral} />
              <StatisticsLine text="All" value={findTotal} />
              <StatisticsLine text="Average" value={findAverage} />
              <StatisticsLine text="Amount Positive " value={findPositive} />
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p>No Feedback Given</p>
        </div>
      )}
    </>
  );
};
