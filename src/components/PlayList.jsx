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
  const [loading, setLoading] = useState(false);

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
      try {
        // when there's no validation issue
        setLoading(true);
        await PostPlaylist(playlistName, trackIds);

        setPlaylistName("");
        removeFromPlaylist(trackIds);
        alert("Check Spotify, Playlist is saved!");
      } catch (error) {
        console.error("Error saving to Spotify:", error);
      } finally {
        // Stop loading, whether the request was successful or not
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("Name", JSON.stringify(playlistName));
    sessionStorage.setItem("Playlist", JSON.stringify(playlistTrack));
  }, [playlistName, playlistTrack]);

  return (
    <div className="playlist" onSubmit={handleSubmit}>
      <input
        className="playlist-name"
        type="text"
        placeholder="Enter Playlist Name"
        value={playlistName}
        onChange={handlePlaylist}
      />
      <TrackList data={playlistTrack} isInPlaylist={isInPlaylist} />
      <button className="savebtn" type="submit" onClick={handleSubmit}>
        {/* save to spotify */}
        {loading ? "Saving..." : "Save to Spotify"}
      </button>
    </div>
  );
}

export default Playlist;
