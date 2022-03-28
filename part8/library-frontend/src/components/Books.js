import { ALL_BOOKS, FILTER_BOOKS } from "../queries";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const Books = (props) => {
  const [genre, setGenre] = useState(null);
  const { data, loading } = useQuery(ALL_BOOKS);

  const [loadFilters, { data: filterData, loading: filterLoading }] =
    useLazyQuery(FILTER_BOOKS, { variables: { genre: genre } });

  if (loading || filterLoading) {
    return <div>loading...</div>;
  }

  const filterResults = (filterGenre) => {
    setGenre(filterGenre);
    loadFilters();
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
            : filterData?.allBooks.map((a) => (
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
      <button onClick={() => setGenre(null)}>All Genres</button>
    </div>
  );
};

export default Books;
