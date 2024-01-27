import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css'; // Import your original styles

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/movie?query=${encodeURIComponent(searchTerm)}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <h3>IMDb</h3>
      <div className={`ullist ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <Link to="/popular">
            <li className="clickme" onClick={toggleMenu}>
              Popular
            </li>
          </Link>
          <Link to="/toprated">
            <li className="clickme" onClick={toggleMenu}>
              Top Rated
            </li>
          </Link>
          <Link to="/upcoming">
            <li className="clickme" onClick={toggleMenu}>
              Upcoming
            </li>
          </Link>
        </ul>
        <form onSubmit={handleSearch} className="mobile-search">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            value={searchTerm}
            placeholder='search movies here....'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="ham" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
