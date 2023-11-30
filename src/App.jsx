import { useEffect, useState } from "react";
import "./App.css";
import AppPlaylist from "./components/AppPlaylist";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import getAll from "./Services/track";

function App() {
  const [data, setData] = useState([]);
  const [searchSong, setSearchSong] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState([]);

  useEffect(() => {
    getAll(searchSong)
      .then((resp) => {
        setData(resp.data.tracks);
        // console.log(resp.data.tracks);
      })
      .catch((err) => console.log(err));
  }, [searchSong]);

  const addToPlaylist = (track) => {
    const isTrackInPlaylist = playlistTrack.some(
      (playlistTrack) => playlistTrack.id === track.id
    );

    !isTrackInPlaylist && setPlaylistTrack([...playlistTrack, track]);
  };

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar setSearchSong={setSearchSong} />
        <AppPlaylist
          data={data}
          addToPlaylist={addToPlaylist}
          playlistTrack={playlistTrack}
        />
      </main>
    </>
  );
}

export default App;
