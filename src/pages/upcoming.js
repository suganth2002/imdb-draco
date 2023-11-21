import React from 'react'
import { useState,useEffect } from 'react'
import Upcom from '../components/Upcomcard'


export const Upcoming = () => {
  const [Upcoming,setUpcoming]=useState([])
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ec3234a60a910deade5a193b84771406')
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      setUpcoming(data.results)
    })
    .catch(err=>console.log("error fetching data",err))
  },[])
console.log(Upcoming)

  return (
    <>
   <div className="column">
      {Upcoming.map(Upmovie => (
       <Upcom key={Upmovie.id} backdrop_path={Upmovie.backdrop_path} original_title={Upmovie.original_title}  id={Upmovie.id}/>
        
      ))}
    </div>
    </>
  )
}



