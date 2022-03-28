import { useQuery, useApolloClient } from "@apollo/client";
import { GET_USER } from "./queries";
import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Login from "./components/Login";
import Recommend from "./components/Recommend";

const App = () => {
  const [page, setPage] = useState("books");
  const [setHideLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const client = useApolloClient();
  const { data } = useQuery(GET_USER);

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const logout = () => {
    setToken(null);
    setHideLogin(true);
    localStorage.clear();
    client.resetStore();
  };

  return (
    <div>
      <div>
        <Notify errorMessage={errorMessage} />
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        {token ? (
          <>
            <button onClick={logout}>log out</button>
            <button onClick={() => setPage("add")}>Add Book</button>
            <button onClick={() => setPage("recommend")}>Recommend</button>
            <Recommend
              show={page === "recommend"}
              genre={data.me.favoriteGenre}
            />
          </>
        ) : (
          <button onClick={() => setPage("login")}>Login</button>
        )}
      </div>

      <Notify errorMessage={errorMessage} />
      <Authors show={page === "authors"} />
      <Books show={page === "books"} />
      <NewBook show={page === "add"} />
      {page === "login" && <Login setToken={setToken} setError={notify} />}
    </div>
  );
};

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return <div style={{ color: "red" }}>{errorMessage}</div>;
};

export default App;
