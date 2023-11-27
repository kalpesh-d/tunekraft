import "../styles/Track.css";

function Track({ track, addToPlaylist }) {
  return (
    <div className="track">
      <div className="track-content">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {track.artist} | {track.album}
        </p>
      </div>
      <button className="track-plus" onClick={() => addToPlaylist(track)}>
        +
      </button>
    </div>
  );
}

export default Track;
