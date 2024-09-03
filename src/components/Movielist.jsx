import React, { useEffect ,useState} from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';
import { options } from '../utils/constants';


const Movielist = () => {
    const moviedata=useSelector((store)=>store.movies?.nowPlayingMovie);
    const [PopularMovies,setshowPopularMovies]=useState();
    const [topRatedMovies,setshowtopRatedMovies]=useState();
    const [upcomingMovies,setupcomingMovies]=useState();

    const showgetPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const json =await data.json();
      
      setshowPopularMovies(json);
    }
    const showtopRatedMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      const json =await data.json();
     
      setshowtopRatedMovies(json);
    }
    const showupcomingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const json =await data.json();
      
      setupcomingMovies(json);
    }

    useEffect(()=>{
          showgetPopularMovies();
          showtopRatedMovies();
          showupcomingMovies();
        


    },[])

   
    
  return (
    <div>
        <MovieCard title={"Now Playing Movies"} data={moviedata} />
        <MovieCard title={"Popular Movies"} data={PopularMovies} />
        <MovieCard title={"Top Rated Movies"} data={topRatedMovies} />
        <MovieCard title={"Upcoming Movies"} data={upcomingMovies} />
    </div>
  )
}

export default Movielist