import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({
  searchSong,
  data,
  error,
  addToPlaylist,
  playlistTrack,
}) {
  return (
    <div className="app-playlist">
      <SearchResult
        searchSong={searchSong}
        data={data}
        error={error}
        addToPlaylist={addToPlaylist}
      />
      <Playlist playlistTrack={playlistTrack} />
    </div>
  );
}

export default AppPlaylist;
