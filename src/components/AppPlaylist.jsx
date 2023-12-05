import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist() {
  return (
    <div className="app-playlist">
      <SearchResult isInPlaylist={false} />
      <Playlist isInPlaylist={true} />
    </div>
  );
}

export default AppPlaylist;
