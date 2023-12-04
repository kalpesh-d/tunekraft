import { useEffect, useState } from "react";
import TrackList from "./TrackList";
import retrieveFromSession from "../util/retrieveFromSession";
import "../styles/Playlist.css";
import { PostPlaylist } from "../services/postPlaylist";

function Playlist({ playlistTrack, isInPlaylist, removeFromPlaylist }) {
  const [playlistName, setPlaylistName] = useState(retrieveFromSession("Name"));

  const handlePlaylist = (e) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (playlistName.trim() === "") {
      alert("Please enter a playlist name.");
      return;
    }

    if (playlistTrack.length === 0) {
      alert("Your playlist is empty. Add tracks before saving.");
      return;
    }

    const trackIds = playlistTrack.map((track) => track.id);

    try {
      await PostPlaylist(playlistName, trackIds);

      setPlaylistName("");
      removeFromPlaylist(trackIds);
    } catch (error) {
      console.error("Error saving playlist:", error);
    }
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
        <button className="savebtn" onClick={handleSubmit}>
          save to spotify
        </button>
      </form>
    </div>
  );
}

export default Playlist;
