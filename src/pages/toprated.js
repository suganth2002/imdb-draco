import React from 'react'
import { useState,useEffect } from 'react'
import RatedCard from '../components/Ratedcard'
import './homepage.css'
import Card from '../components/card'
 

export const TopRated = () => {
  const [TopRated,setTopRated]=useState([])
  useEffect(()=>{
   
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ec3234a60a910deade5a193b84771406")
   
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      setTopRated(data.results)
    })
    .catch(err=>console.log("error fetching data",err))
  },[])
console.log(TopRated)

  return (
    <>
   
    
    <div className="toprated">
      {TopRated.map(TopRated => (
       <Card key={TopRated.id} backdrop_path={TopRated.backdrop_path} original_title={TopRated.original_title} id={TopRated.id}  />
        
      ))}
    </div>
    </>
  )
}
