import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ searchSong, data, error }) {
  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList data={data} searchSong={searchSong} error={error} />
    </div>
  );
}

export default SearchResult;
