import React from 'react';

function Search({ search, setSearch, handleSearch }) {
  console.log(setSearch)
  return (
    <div className='search-engine'>
      <input
        type="text"
        placeholder='Enter City Name'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button className='search-btn' onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
}

export default Search;