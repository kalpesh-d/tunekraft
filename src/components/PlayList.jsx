import { useState } from "react";
import TrackList from "./TrackList";

function PlayList() {
  const [ tracks ] = useState([
    { id: '1', title: 'One Dance', artist: 'Drake' }, 
    { id: '2', title: 'One Dance', artist: 'Drake' }
  ])

  return (
    <>
      <TrackList tracks={tracks} />
    </>
  )
}

export default PlayList