import PlayList from "./PlayList";
import SearchResult from "./SearchResult";

import "../styles/AppPlaylist.css";

function AppPlaylist({ searchSong, data, error }) {
  return (
    <div className="app-playlist">
      <SearchResult searchSong={searchSong} data={data} error={error} />
      <PlayList />
    </div>
  );
}

export default AppPlaylist;
