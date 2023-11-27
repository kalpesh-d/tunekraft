import Track from "./Track";

import "../styles/TrackList.css";

function TrackList({ data, error, addToPlaylist }) {
  return (
    <div className="tracklist">
      {error && <p className="error">{error}</p>}
      {data &&
        data.map((track) => (
          <Track
            track={track}
            key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
            addToPlaylist={addToPlaylist}
          />
        ))}
    </div>
  );
}

export default TrackList;
