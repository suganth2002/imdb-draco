import React from 'react';
import { Link } from 'react-router-dom';

function Upcom(Upmovie) {
    return (
      <Link to={`/movie/${Upmovie.id}`} >
<div className="row">
        <div className='container' key={Upmovie.id}>
          <div className="posterImage">
            <img src={`https://image.tmdb.org/t/p/original${Upmovie && Upmovie.backdrop_path}`} alt='img' />
            <div className="posterImage__title">
              {Upmovie.original_title}
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  }
  export default  Upcom