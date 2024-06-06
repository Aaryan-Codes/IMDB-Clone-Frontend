import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useContext, useRef } from "react";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const searchResultData = useContext(SearchContext);
  const { setSearchResult } = searchResultData;

  const navRef = useRef();
  const inputRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleSearch = () => {
    setSearchResult(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="header">
      <Link className="logo" to="/imdb-clone">
        <h3>IMDb</h3>
      </Link>
      <nav ref={navRef}>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search IMDb" />
          <Link to="/search-results">
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </Link>
        </div>
        <Link className="link-styles" to="/imdb-clone">
          Home
        </Link>
        <Link className="link-styles" to="/watchlist">
          Watchlist
        </Link>
        <Link className="link-styles" to="/tv-shows">
          TV Shows
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-bars" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Header;
