import { useEffect, useState } from "react";
import TrackList from "./TrackList";
import retrieveFromSession from "../util/retrieveFromSession";
import "../styles/Playlist.css";
import { PostPlaylist } from "../services/postPlaylist";
import { useAppContext } from "../context/AppContext";
import { alertFunciton } from "../util/alertFunction";

function Playlist({ isInPlaylist }) {
  const [playlistName, setPlaylistName] = useState(retrieveFromSession("Name"));
  const { removeFromPlaylist, playlistTrack } = useAppContext();

  const handlePlaylist = (e) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trackIds = playlistTrack.map((track) => track.id);

    const executePost = alertFunciton(playlistName, playlistTrack);
    executePost && alert(executePost); // execute only when its return string

    if (!executePost) {
      // when there's no validation issue
      await PostPlaylist(playlistName, trackIds);
      setPlaylistName("");
      removeFromPlaylist(trackIds);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("Name", JSON.stringify(playlistName));
    sessionStorage.setItem("Playlist", JSON.stringify(playlistTrack));
  }, [playlistName, playlistTrack]);

  return (
    <div className="playlist">
      <form onSubmit={handleSubmit}>
        <input
          className="playlist-name"
          type="text"
          placeholder="Enter Playlist Name"
          value={playlistName}
          onChange={handlePlaylist}
        />
        <TrackList data={playlistTrack} isInPlaylist={isInPlaylist} />
        <button className="savebtn" type="submit">
          save to spotify
        </button>
      </form>
    </div>
  );
}

export default Playlist;
