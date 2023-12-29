import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSearchDataApi } from '../../services/api.jsx';
import './SearchComponent.css'

const SearchComponent = () => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
    
    const handleSearch =async () => {
      try {
      const response = await fetchSearchDataApi(searchQuery);
      setSearchResult(response?.data?.articles);

      const category = {
        title: `Search Results found - ${searchQuery}`,
        data: response?.data?.articles,
      };
      navigate('/detail/search', {state: {category}});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }

  return (
    <div className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchComponent