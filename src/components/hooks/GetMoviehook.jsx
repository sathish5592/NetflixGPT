import { options } from "../../utils/constants";

export const GetMovieResult=async(movie)=>{
    
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query=Anand&include_adult=false&language=en-US&page=1', options)
        const json= await data.json();

        return json.results;
}