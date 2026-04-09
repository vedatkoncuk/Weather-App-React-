import React, { useState } from 'react'
import Search from '../search';

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  return (
    <Search search={search}
      setSearch={setSearch}
      handleSearch={handleSearch} />
  )
}

export default Weather