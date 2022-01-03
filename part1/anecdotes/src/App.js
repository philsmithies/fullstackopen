import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const allAnecdotes = votes.map((number, i) => (
    <>
      <p>{anecdotes[i]}</p>
      <p>votes: {number}</p>
    </>
  ));

  const randomAnecdote = () => {
    setSelected(randomNumber);
    console.log("selected is", selected);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes:{votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <h1>All Anecdotes</h1>
      {allAnecdotes}
    </div>
  );
};

export default App;
