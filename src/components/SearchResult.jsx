import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ searchSong, data, error, addToPlaylist }) {
  const filteredData = data?.filter((track) =>
    track.name.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList
        data={filteredData}
        searchSong={searchSong}
        error={error}
        addToPlaylist={addToPlaylist}
      />
    </div>
  );
}

export default SearchResult;
