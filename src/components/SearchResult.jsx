import '../styles/SearchResult.css'
import TrackList from "./TrackList"
import { useEffect, useState } from "react"
import getAll from '../Services/track';

function SearchResult() {
  const [searchTrack, setSearchTrack] = useState([]);
  
  useEffect(() => {
    getAll()
    .then(resp => setSearchTrack(resp.data));
  }, []);

  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList searchTrack={searchTrack} />
    </div>
  )
}

export default SearchResult