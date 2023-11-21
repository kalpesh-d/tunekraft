import PlayList from "./PlayList"
import SearchResult from "./SearchResult"

import '../styles/AppPlaylist.css'

function AppPlaylist() {
  return (
    <div className="app-playlist">
      <SearchResult />
      <PlayList />
    </div>
  )
}

export default AppPlaylist