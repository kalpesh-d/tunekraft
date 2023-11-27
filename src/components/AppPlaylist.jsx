import Playlist from "./Playlist";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({ searchSong, data, error, addToPlaylist }) {
  return (
    <div className="app-playlist">
      <SearchResult
        searchSong={searchSong}
        data={data}
        error={error}
        addToPlaylist={addToPlaylist}
      />
      <Playlist />
    </div>
  );
}

export default AppPlaylist;
