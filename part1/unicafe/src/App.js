import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const findTotal = () => {
    return good + neutral + bad;
  };

  const findAverage = () => {
    // the average score (good: 1, neutral: 0, bad: -1)
    let average = good * 1 - bad;
    return average;
  };

  const findPositive = () => {
    let total = findTotal();
    if (total !== 0) {
      let positiveResult = (good / total) * 100;
      return `${positiveResult}%`;
    }
    return "0%";
  };

  return (
    <>
      <h1>Give Feedback Here</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Bad {bad}</p>
      <p>Neutral {neutral}</p>
      <p>All {findTotal()}</p>
      <p>Average {findAverage()}</p>
      <p>Amount Positive {findPositive()}</p>
    </>
  );
};

export default App;
