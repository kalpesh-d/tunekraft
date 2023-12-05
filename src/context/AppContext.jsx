import { createContext, useContext, useState } from "react";
import retrieveFromSession from "../util/retrieveFromSession";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState(
    retrieveFromSession("Playlist")
  );

  const addToPlaylist = (track) => {
    const isTrackInPlaylist = playlistTrack.some(
      (playlistTrack) => playlistTrack.id === track.id
    );

    !isTrackInPlaylist && setPlaylistTrack([...playlistTrack, track]);
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylistTrack((prevPlaylistTrack) => {
      const updatedData = prevPlaylistTrack.filter(
        (track) => !trackId.includes(track.id)
      );
      sessionStorage.setItem("Playlist", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        searchTrack,
        setSearchTrack,
        playlistTrack,
        setPlaylistTrack,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
