import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./nav.css"; // Import your original styles

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/movie?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className='navbar'>
      <h3>IMDb</h3>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className='ullist'>
        <ul>
        <Link to="/popular"><li className='clickme'>Popular</li></Link>
        <Link to="/toprated"><li className='clickme'>Top Rated</li></Link>
        <Link to="/upcoming"> <li className='clickme'>Upcoming</li></Link>
        </ul>
      </div>
    </div>
  );
}
