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
  const [playlistTrack, setPlaylistTrack] = useState([]);

  useEffect(() => {
    getAll()
      .then((resp) => setData(resp.data))
      .catch((err) => setError(err.message));
  }, []);

  const addToPlaylist = (track) => {
    const isTrackInPlaylist = playlistTrack.some(
      (playlistTrack) => playlistTrack.id === track.id
    );

    !isTrackInPlaylist && setPlaylistTrack([...playlistTrack, track]);
  };

  console.log(playlistTrack);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar setSearchSong={setSearchSong} />
        <AppPlaylist
          searchSong={searchSong}
          data={data}
          error={error}
          addToPlaylist={addToPlaylist}
          playlistTrack={playlistTrack}
        />
      </main>
    </>
  );
}

export default App;
