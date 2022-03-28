import { ALL_BOOKS } from "../queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const Books = (props) => {
  const [genre, setGenre] = useState(null);
  const [filteredArray, setFilteredArray] = useState("");
  const { data, loading } = useQuery(ALL_BOOKS);

  if (loading) {
    return <div>loading...</div>;
  }

  const filterResults = (filterGenre) => {
    setGenre(filterGenre);
    console.log("the genre is", filterGenre);
    const results = data.allBooks.filter((b) => b.genres.includes(genre));
    setFilteredArray(results);
    console.log("filtered is", filteredArray);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <h2>books</h2>
      {genre && (
        <h3>
          Viewing genre: <strong>{genre}</strong>
        </h3>
      )}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {!genre
            ? data?.allBooks.map((a) => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))
            : filteredArray.map((a) => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))}
        </tbody>
      </table>
      {data?.allBooks.map((book) => (
        <button onClick={() => filterResults(book.genres[0])}>
          {book.genres[0]}
        </button>
      ))}
      <button onClick={() => setGenre(null)}>clear</button>
    </div>
  );
};

export default Books;
