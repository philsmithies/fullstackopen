import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/name/peru").then((response) => {
      console.log(response.data);
    });
  }, []);

  const searchTerm = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${query}`)
      .then((response) => {
        if (response.data.length > 10) {
          console.log("Too Many Results");
        } else {
          setResult(response.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Search for a country</h1>
      <input
        type="text"
        placeholder="Enter A Country"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={searchTerm()}>Search</button>
      <h1>The query is {query}</h1>
      {result &&
        result.map((country) => {
          return (
            <div>
              <p>{country.name.common}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
