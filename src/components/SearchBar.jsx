import '../styles/SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder='Enter a Song Title' />
      <button className='search-btn'>Search</button>
    </div>
  )
}

export default SearchBar