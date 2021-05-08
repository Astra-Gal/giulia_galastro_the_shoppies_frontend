import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <h3>Search for movies:</h3>
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBar;
