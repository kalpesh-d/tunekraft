import { useState } from "react";
import TrackList from "./TrackList";

import "../styles/Playlist.css";

function Playlist() {
  const [playlistName, setPlaylistName] = useState("");

  const handlePlaylist = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="playlist">
      <form action="">
        <input
          className="playlist-name"
          type="text"
          placeholder="Enter Playlist Name"
          value={playlistName}
          onChange={handlePlaylist}
        />
        <TrackList />
        <button className="savebtn" onClick={handlePlaylist}>
          save to spotify
        </button>
      </form>
    </div>
  );
}

export default Playlist;
