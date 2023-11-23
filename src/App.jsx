import { useState } from 'react'
import './App.css'
import AppPlaylist from './components/AppPlaylist'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {
  const [searchSong, setSearchSong] = useState('');

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar setSearchSong={setSearchSong} />
        <AppPlaylist searchSong={searchSong} />
      </main>
    </>
  )
}
 
export default App
