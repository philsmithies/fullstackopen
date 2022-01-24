import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const filteredResults = filterCountries(countries, query);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    filterCountries();
  };

  // const filterCountries = () => {
  //   countries.filter((country) => {
  //     if (query === "") {
  //       return country;
  //     } else if (
  //       country.name.common.toLowerCase().includes(query.toLowerCase())
  //     ) {
  //       setFilteredResults(filteredResults.concat(country));
  //       console.log("the results are", filteredResults);
  //     }
  //   });
  // };

  const filterCountries = (country, query) => {
    if (!query) {
      return country;
    }

    return countries.filter((country) => {
      const countryName = country.common.name.toLowerCase();
      return countryName.includes(query);
    });
  };

  return (
    <div className="App">
      <h1>Search for a country</h1>
      <input
        type="text"
        placeholder="Enter A Country"
        onChange={(e) => handleChange(e)}
      />

      {filteredResults}
    </div>
  );
}

export default App;
