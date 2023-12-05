import { useEffect } from "react";
import "./App.css";
import AppPlaylist from "./components/AppPlaylist";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import getAll from "./services/track";
import { useAppContext } from "./context/AppContext";

function App() {
  const { setData, searchTrack, setSearchTrack } = useAppContext();

  useEffect(() => {
    getAll(searchTrack)
      .then((resp) => {
        if (resp.data.tracks.items) {
          setData(resp.data.tracks.items); // Searched Track
        } else {
          setData(resp.data.tracks); // Recommendations
        }
      })
      .catch((err) => console.log(err));
  }, [searchTrack, setData]);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar setSearchTrack={setSearchTrack} />
        <AppPlaylist />
      </main>
    </>
  );
}

export default App;
