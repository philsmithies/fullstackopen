import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

const Authors = (props) => {
  const { data, loading } = useQuery(ALL_AUTHORS, {
    pollInterval: 2000,
  });

  const [editAuthor] = useMutation(EDIT_AUTHOR);

  const [author, setAuthor] = useState("");
  const [born, setBorn] = useState("");

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(data);

  const submit = async (event) => {
    event.preventDefault();

    editAuthor({
      variables: { name: author, born: Number(born) },
    });

    setAuthor("");
    setBorn("");
  };

  const authors = data?.allAuthors;

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
          {authors?.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.authorBookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <form onSubmit={submit}>
        <div>
          name{" "}
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          born{" "}
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">edit age!</button>
      </form>
    </div>
  );
};

export default Authors;
