import { useState } from "react";
import TrackList from "./TrackList";

import '../styles/PlayList.css'

function PlayList() {
  const [playlist, setPlaylist] = useState('')

  const handlePlaylist = (e) => {
    setPlaylist(e.target.value)
  }

  return (
    <div className="playlist">
      <form action="">
        <input className="playlist-name" type="text" placeholder="Enter Playlist Name" value={playlist} onChange={handlePlaylist} />
        <TrackList />
        <button className="savebtn">save to spotify</button>
      </form>
    </div>
  )
}

export default PlayList