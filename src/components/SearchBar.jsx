import { useState } from 'react';
import '../styles/main.scss';
import searchIcon from '../assets/images/icon-search.svg';

function SearchBar({ onSearch, input, setInput }) {

  // Handle search button click (function in App.jsx)
  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      {/* <img src={searchIcon} alt="Search icon" /> */}
      <input
        type="search"
        placeholder="Search for a place.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" id='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
