import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);

    
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        style={{ padding: '8px', width: '350px',position: 'relative',left: '-300px' }}
      />
      
    </div>
  );
};

export default SearchBar;
