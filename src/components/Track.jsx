import { useAppContext } from "../context/AppContext";
import "../styles/Track.css";

function Track({ track, isInPlaylist }) {
  const { addToPlaylist, removeFromPlaylist } = useAppContext();

  const artistNames = track.artists.map((artist) => artist.name);
  const artistString =
    artistNames.length > 1 ? artistNames.join(", ") : artistNames[0];

  const handleClick = (e) => {
    e.preventDefault();
    if (isInPlaylist) {
      removeFromPlaylist(track.id);
    } else {
      addToPlaylist(track);
    }
  };

  return (
    <div className="track">
      <div className="track-content">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {artistString} | {track.album.name}
        </p>
      </div>
      <button className="track-plus" onClick={handleClick}>
        {isInPlaylist ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;
