
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import Card from '../card';
import "./Search.css"

const SearchMovies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=ec3234a60a910deade5a193b84771406`)
        .then(response => response.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            setMovie(data.results);
          } else {
            console.error('No results found for the given query.');
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [location.search]);

  if (!movie) {
    return <div className='navbar'>No results found for the given query.</div>;
  }
  console.log(movie)

  return (
    <div className='search'>
      {movie.map(movie => (
       <Card key={movie.id} backdrop_path={movie.poster_path} original_title={movie.original_title}  />
        
      ))
      }
     
    </div>
  );
};

export default SearchMovies;
