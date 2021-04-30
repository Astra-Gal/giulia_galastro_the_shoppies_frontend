import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h2>Search for movies:</h2>
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBar;
