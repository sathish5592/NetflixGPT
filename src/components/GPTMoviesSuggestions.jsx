import React, { useEffect, useState } from 'react'
import { Moviesuggestion } from '../utils/OpenAI';
import { options } from '../utils/constants';
import MovieCard from './MovieCard'
import { logDOM } from '@testing-library/react';
import { GetMovieResult } from './hooks/GetMoviehook';

const GPTMoviesSuggestions = ({datas}) => {
 
 
 const [showMovie,setshowMovie]=useState();
 const movieString="https://api.themoviedb.org/3/search/movie?query="+["96"] +"&include_adult=false&language=en-US&page=1";

//  const getResult=async()=>{
//  const data=await fetch('https://api.themoviedb.org/3/search/movie?query=Anand&include_adult=false&language=en-US&page=1', options)
//  const json= await data.json();
//  setshowMovie(json);
//  //console.log(json);
//  //console.log("json data");
 
//  console.log(showMovie);
//  }
//  useEffect(()=>{
//      getResult();
//      console.log("use E");
    
//  },[])

  return (
    <div>
    
    </div>
  )
}

export default GPTMoviesSuggestions