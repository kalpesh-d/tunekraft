import { useAppContext } from "../context/AppContext";
import "../styles/SearchResult.css";
import TrackList from "./TrackList";

function SearchResult({ isInPlaylist }) {
  const { data, searchTrack } = useAppContext();

  const result =
    searchTrack.length > 0 ? `Result "${searchTrack}"` : "Recommendation";

  return (
    <div className="search-result">
      <h1>{result}</h1>
      <TrackList data={data} isInPlaylist={isInPlaylist} />
    </div>
  );
}

export default SearchResult;
