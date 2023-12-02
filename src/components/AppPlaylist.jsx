import Playlist from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({
  data,
  addToPlaylist,
  playlistTrack,
  searchTrack,
  removeFromPlaylist,
}) {
  return (
    <div className="app-playlist">
      <SearchResult
        data={data}
        addToPlaylist={addToPlaylist}
        searchTrack={searchTrack}
        isInPlaylist={false}
      />
      <Playlist
        playlistTrack={playlistTrack}
        isInPlaylist={true}
        removeFromPlaylist={removeFromPlaylist}
      />
    </div>
  );
}

export default AppPlaylist;
