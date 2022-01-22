import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/name/peru").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Search for a country</h1>
      <input type="text" placeholder="Enter A Country" />
    </div>
  );
}

export default App;
