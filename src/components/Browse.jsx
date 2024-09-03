import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/MovieSlice';
import { useState } from 'react';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from './Header';
import GPTsearch from './GPTsearch';


const Browse = () => {
  const dispatch=useDispatch();
  const showGPTsearch=useSelector((store)=>store.gptSearch.showGPTsearch);
  
 
  

  const GetMovieList=async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const json=await data.json();
  

      //console.log(json);
    dispatch(addNowPlayingMovies(json));
    
  }
  useEffect(()=>{
      GetMovieList();
  },[]);
  const Movies=useSelector((store)=>store.movies?.nowPlayingMovie);
 
   if (!Movies) return; 
  return (
    <div>
      <Header/>
      {
        showGPTsearch?<GPTsearch/>:<><MainContainer data={Movies.results[0]}/>
        <SecondaryContainer  /></>
      }
      
     
    
    </div>
  )
}

export default Browse