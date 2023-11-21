import { useState } from "react"
import TrackList from "./TrackList"

import '../styles/SearchResult.css'

function SearchResult() {
  const [ tracks ] = useState([
    { id: '1', title: 'Dusk Till Dawn', artist: 'Zayn Malik' }, 
    { id: '2', title: 'Dusk Till Dawn', artist: 'Zayn Malik' }
  ])

  return (
    <div className="search-result">
      <h1>Results</h1>
      <TrackList tracks={tracks} />
    </div>
  )
}

export default SearchResult