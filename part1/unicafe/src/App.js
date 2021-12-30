import React, { useState } from "react";
import { Statistics } from "./Components/Statistics";
import { Button } from "./Components/Button";

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
    let total = findTotal();
    if (total !== 0) {
      let average = (1 / bad) * good;
      return average;
    }
    return "0";
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
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        findTotal={findTotal()}
        findAverage={findAverage()}
        findPositive={findPositive()}
      />
    </>
  );
};

export default App;
