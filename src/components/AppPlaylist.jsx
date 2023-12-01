import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({ data, addToPlaylist, playlistTrack, searchSong }) {
  return (
    <div className="app-playlist">
      <SearchResult
        data={data}
        addToPlaylist={addToPlaylist}
        searchSong={searchSong}
      />
      <Playlist playlistTrack={playlistTrack} />
    </div>
  );
}

export default AppPlaylist;
