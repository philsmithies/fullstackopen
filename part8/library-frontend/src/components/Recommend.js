import { ALL_BOOKS } from "../queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const Recommend = (props) => {
  const [genre] = useState(props.genre);
  const { data, loading } = useQuery(ALL_BOOKS);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <h2>Recommendations</h2>
      <h3>
        Books based on your favourite genre: <strong>{genre}</strong>
      </h3>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {data?.allBooks
            .filter((b) => b.genres.includes(genre))
            .map((a) => (
              <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommend;
