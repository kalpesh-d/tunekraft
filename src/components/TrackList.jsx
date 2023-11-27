import Track from "./Track";

import "../styles/TrackList.css";

function TrackList({ data, searchSong, error, addToPlaylist }) {
  const filteredData = data?.filter((track) =>
    track.name.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <div className="tracklist">
      {error && <p className="error">{error}</p>}
      {filteredData &&
        filteredData.map((track) => (
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
