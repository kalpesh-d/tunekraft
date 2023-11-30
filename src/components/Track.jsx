import "../styles/Track.css";

function Track({ track, addToPlaylist }) {
  // const {name, artist, album} = track;
  return (
    <div className="track">
      <div className="track-content">
        <h3 className="track-title">{track.name}</h3>
        <p className="track-artist">
          {track.artists.map((artist) => (
            <span key={artist.id}>{artist.name}</span>
          ))}
          {" | "}
          {track.album.name}
        </p>
      </div>
      <button className="track-plus" onClick={() => addToPlaylist(track)}>
        +
      </button>
    </div>
  );
}

export default Track;
