import { useEffect, useState } from "react";
import "./App.css";
import AppPlaylist from "./components/AppPlaylist";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import getAll from "./Services/track";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [searchSong, setSearchSong] = useState("");

  useEffect(() => {
    getAll()
      .then((resp) => setData(resp.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar setSearchSong={setSearchSong} />
        <AppPlaylist searchSong={searchSong} data={data} error={error} />
      </main>
    </>
  );
}

export default App;
