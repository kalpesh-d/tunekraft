import { useEffect, useState } from "react";
import TrackList from "./TrackList";
import retrieveFromSession from "../util/retrieveFromSession";
import "../styles/Playlist.css";

function Playlist({ playlistTrack, isInPlaylist, removeFromPlaylist }) {
  const [playlistName, setPlaylistName] = useState(retrieveFromSession("Name"));

  const handlePlaylist = (e) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem("Name", JSON.stringify(playlistName));
  }, [playlistName]);

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
        <TrackList
          data={playlistTrack}
          isInPlaylist={isInPlaylist}
          removeFromPlaylist={removeFromPlaylist}
        />
        <button className="savebtn" onClick={handlePlaylist}>
          save to spotify
        </button>
      </form>
    </div>
  );
}

export default Playlist;
