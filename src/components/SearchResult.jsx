import { useState } from "react"
import TrackList from "./TrackList"

function SearchResult() {
  const [ tracks ] = useState([
    { id: '1', title: 'Dusk Till Dawn', artist: 'Zayn Malik' }, 
    { id: '2', title: 'Dusk Till Dawn', artist: 'Zayn Malik' }
  ])

  return (
    <>
      <TrackList tracks={tracks}/>
    </>
  )
}

export default SearchResult