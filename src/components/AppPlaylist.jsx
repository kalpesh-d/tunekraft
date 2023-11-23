import PlayList from "./PlayList"
import SearchResult from "./SearchResult"

import '../styles/AppPlaylist.css'

function AppPlaylist({ searchSong }) {
  return (
    <div className="app-playlist">
      <SearchResult searchSong={searchSong} />
      <PlayList />
    </div>
  )
}

export default AppPlaylist