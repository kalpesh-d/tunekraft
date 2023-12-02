import { useEffect, useState } from "react";
import "./App.css";
import AppPlaylist from "./components/AppPlaylist";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import getAll from "./services/track";
import retrieveFromSession from "./util/retrieveFromSession";

function App() {
  const [data, setData] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState(
    retrieveFromSession("Playlist")
  );

  useEffect(() => {
    getAll(searchTrack)
      .then((resp) => {
        if (resp.data.tracks.items) {
          setData(resp.data.tracks.items); // Searched Track
        } else {
          setData(resp.data.tracks); // Recommendations
        }
      })
      .catch((err) => console.log(err));
  }, [searchTrack]);

  useEffect(() => {
    sessionStorage.setItem("Playlist", JSON.stringify(playlistTrack));
  }, [playlistTrack]);

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
        <SearchBar setSearchTrack={setSearchTrack} />
        <AppPlaylist
          data={data}
          searchTrack={searchTrack}
          addToPlaylist={addToPlaylist}
          playlistTrack={playlistTrack}
        />
      </main>
    </>
  );
}

export default App;
