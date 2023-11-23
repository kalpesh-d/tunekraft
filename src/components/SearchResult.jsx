import '../styles/SearchResult.css'
import TrackList from "./TrackList"
import { useEffect, useState } from "react"
import getAll from '../Services/track';

function SearchResult({ searchSong }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getAll()
    .then(resp => setData(resp.data));
  }, []);

  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList data={data} searchSong={searchSong} />
    </div>
  )
}

export default SearchResult