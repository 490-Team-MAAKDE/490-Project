import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3001/search/${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-photo-column"></div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="search-photo-column"></div>
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id}>
              <Link to={`/customer/${result.id}`}>{result.username}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;