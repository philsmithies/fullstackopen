import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";

const Authors = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [author, setAuthor] = useState("");
  const [born, setBorn] = useState("");

  const { data, loading } = useQuery(ALL_AUTHORS);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const submit = async (event) => {
    event.preventDefault();

    editAuthor({
      variables: { name: author, born: Number(born) },
    });

    setAuthor("");
    setBorn("");
  };

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
          {data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.authorBookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div style={{ maxWidth: "400px" }}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
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
