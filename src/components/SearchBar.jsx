import '../styles/SearchBar.css'

function SearchBar({ setSearchSong }) {
  
  const handleSearch = (e) => {
    setSearchSong(e.target.value)
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder='Enter a Song Title' onChange={handleSearch} />
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar