import { ALL_AUTHORS } from "../queries";
import { useQuery } from "@apollo/client";

const Authors = (props) => {
  const { data, loading } = useQuery(ALL_AUTHORS);

  if (loading) {
    return <div>loading...</div>;
  }

  const authors = data.allAuthors;

  if (!props.show) {
    return null;
  }
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.authorBookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
