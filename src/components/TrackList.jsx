import Track from "./Track";
import "../styles/TrackList.css";

function TrackList({ data, addToPlaylist, isInPlaylist, removeFromPlaylist }) {
  return (
    <div className="tracklist">
      {data &&
        data.map((track) => (
          <Track
            track={track}
            key={track.id}
            name={track.name}
            artist={track.artists[0].name}
            album={track.album}
            addToPlaylist={addToPlaylist}
            isInPlaylist={isInPlaylist}
            removeFromPlaylist={removeFromPlaylist}
          />
        ))}
    </div>
  );
}

export default TrackList;
