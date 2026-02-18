import { useState } from 'react';
import '../styles/main.scss';
import searchIcon from '../assets/images/icon-search.svg';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input); //Letting the App to handle the search for now
  };

  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search icon" />
      <input
        type="search"
        placeholder="Search for a place.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
