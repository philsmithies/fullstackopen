import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";

const Authors = (props) => {
  const [selectedOption] = useState(null);
  const [author, setAuthor] = useState("");
  const [born, setBorn] = useState("");

  const { data, loading } = useQuery(ALL_AUTHORS);

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  if (loading) {
    return <div>loading...</div>;
  }

  console.log("data is author,", data);

  const newOptions = data?.allAuthors.map((a) => {
    return { value: a.name, label: a.name };
  });

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
              {/* <td>{a.authorBookCount}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <form onSubmit={submit}>
        <div style={{ maxWidth: "400px" }}>
          <Select
            defaultValue={selectedOption}
            onChange={(target) => setAuthor(target.value)}
            options={newOptions}
          />
        </div>
        <div>
          born{" "}
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default Authors;
