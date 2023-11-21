import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';


function Card(movie) {
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className="row">
      <div className='container' key={movie.id} id={movie.id}>
        <div className="posterImage">
          <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='img' />
          <div className="posterImage__title">
            {movie.original_title}
          </div>
        </div>
      </div>
    </div>
     </Link>
     
  );
}

export default  Card


