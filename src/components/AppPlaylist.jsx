import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({ searchSong, data, addToPlaylist, playlistTrack }) {
  return (
    <div className="app-playlist">
      <SearchResult
        searchSong={searchSong}
        data={data}
        addToPlaylist={addToPlaylist}
      />
      <Playlist playlistTrack={playlistTrack} />
    </div>
  );
}

export default AppPlaylist;
