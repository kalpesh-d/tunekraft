import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ data, addToPlaylist }) {
  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList data={data} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResult;
