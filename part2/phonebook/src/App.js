import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0770918322" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const addToPhonebook = (e) => {
    e.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      setErrorMsg(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    } else {
      const personObject = { name: newName, number: newNumber };
      setPersons(persons.concat(personObject));
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const updateFilter = (e) => {
    let filteredNames = persons.filter((person) => {
      const personName = person.name.toLowerCase();
      console.log(personName === search);
      setFilteredResults(personName);
    });

    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <label for="filterSearch">Filter shown for</label>
      <input id="filterSearch" onChange={updateFilter} />
      <div>
        <p>{filteredResults}</p>
      </div>
      <h2>Add a New Entry:</h2>
      <h2 style={{ color: "red" }}>{errorMsg}</h2>
      <div>debug: {newName}</div>

      <form onSubmit={addToPhonebook}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons &&
        persons.map((person) => {
          return (
            <div>
              <p>
                {person.name} - {person.number}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
