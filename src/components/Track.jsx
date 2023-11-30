import "../styles/Track.css";

function Track({ track, addToPlaylist }) {
  const artistNames = track.artists.map((artist) => artist.name);
  const artistString =
    artistNames.length > 1 ? artistNames.join(", ") : artistNames[0];

  return (
    <div className="track">
      <div className="track-content">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {artistString} | {track.album.name}
        </p>
      </div>
      <button className="track-plus" onClick={() => addToPlaylist(track)}>
        +
      </button>
    </div>
  );
}

export default Track;
