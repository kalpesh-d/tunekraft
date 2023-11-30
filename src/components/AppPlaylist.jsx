import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({ data, addToPlaylist, playlistTrack }) {
  return (
    <div className="app-playlist">
      <SearchResult data={data} addToPlaylist={addToPlaylist} />
      <Playlist playlistTrack={playlistTrack} />
    </div>
  );
}

export default AppPlaylist;
