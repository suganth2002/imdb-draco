import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import './homepage.css'

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ec3234a60a910deade5a193b84771406")
      .then(res => res.json())
      .then(data => {
        console.log( data);
        setPopularMovies(data.results);
      })
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);

  

  console.log('Popular Movies:', popularMovies); 
 

  return (
    
   
    
    <div className="homepage" >
      {popularMovies.map(movie => (
       <Card key={movie.id} backdrop_path={movie.backdrop_path} original_title={movie.original_title}  id={movie.id} />
        
      ))}
    </div>
    
  );
  
};

export default HomePage;
