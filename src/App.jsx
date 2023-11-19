import './App.css'
import AppPlaylist from './components/AppPlaylist'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SearchBar />
        <AppPlaylist />
      </main>
    </>
  )
}
 
export default App
