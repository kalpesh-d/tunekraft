import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ data, addToPlaylist, searchSong }) {
  const result =
    searchSong.length > 0 ? `Result "${searchSong}"` : "Recommendation";

  return (
    <div className="search-result">
      <h1>{result}</h1>
      <TrackList data={data} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResult;
