import "../styles/SearchBar.css";

function SearchBar({ setSearchTrack }) {
  const handleSearch = (e) => {
    setSearchTrack(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Track, Album or Artist"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
