import Track from "./Track";
import "../styles/TrackList.css";

function TrackList({ data, isInPlaylist }) {
  return (
    <div className="tracklist">
      {data &&
        data.map((track) => (
          <Track track={track} key={track.id} isInPlaylist={isInPlaylist} />
        ))}
    </div>
  );
}

export default TrackList;
