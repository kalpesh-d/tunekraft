import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ data, addToPlaylist, searchTrack }) {
  const result =
    searchTrack.length > 0 ? `Result "${searchTrack}"` : "Recommendation";

  return (
    <div className="search-result">
      <h1>{result}</h1>
      <TrackList data={data} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResult;
