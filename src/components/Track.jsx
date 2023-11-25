import "../styles/Track.css";

function Track({ name, artist, album }) {
  return (
    <div className="track">
      <div className="track-content">
        <h3 className="track-title">{name}</h3>
        <p className="track-artist">
          {artist} | {album}
        </p>
      </div>
      <button className="track-plus">+</button>
    </div>
  );
}

export default Track;
