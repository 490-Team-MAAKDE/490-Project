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
      <div className="search-hero-bar">
      </div>
      <div className="search-container">
        <div className="search-section">
          <h2 className="search-subtitle">Search Across Users</h2>

          <p className="search-text">
            Having the ability to search for users on a website can greatly enhance the user experience and make it easier for people to connect with each other. Whether it's a social media platform, an online marketplace, or a professional networking site, allowing users to search for each other can help to build communities, foster collaborations, and ultimately drive more engagement on the platform.
          </p>
        </div>
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