import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const addToPhonebook = (e) => {
    e.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      setErrorMsg(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    } else {
      const personObject = { name: newName };
      setPersons(persons.concat(personObject));
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h2 style={{ color: "red" }}>{errorMsg}</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons &&
        persons.map((person) => {
          return <p>{person.name}</p>;
        })}
    </div>
  );
};

export default App;
