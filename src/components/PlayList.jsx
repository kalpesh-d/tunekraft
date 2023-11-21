import { useState } from "react";
import TrackList from "./TrackList";

import '../styles/PlayList.css'

function PlayList() {
  const [playlist, setPlaylist] = useState('Playlist')
  const [ tracks ] = useState([
    { id: '1', title: 'One Dance', artist: 'Drake' }, 
    { id: '2', title: 'One Dance', artist: 'Drake' }
  ])

  const handlePlaylist = (e) => {
    setPlaylist(e.target.value)
  }

  return (
    <div className="playlist">
      <form action="">
        <input className="playlist-name" type="text" value={playlist} onChange={handlePlaylist} />
        <TrackList tracks={tracks} />
        <button className="savebtn" disabled>save to spotify</button>
      </form>
    </div>
  )
}

export default PlayList