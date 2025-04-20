import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import '../Searchbar/search.css'; 

function Search({ setState }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setState(input.trim());
    }
  };

  const handleClear = () => {
    setInput('');
    setState('');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="search-btn" type="submit"><FaSearch /></button>
        <button className="clear-btn" type="button" onClick={handleClear}><FaTimes /></button>
      </form>
    </div>
  );
}

export default Search;
