import {openai} from '../utils/OpenAI'
import React, { useRef, useState } from 'react'
import GPTMoviesSuggestions from './GPTMoviesSuggestions';
import { options } from '../utils/constants';

const GPTsearchBar = () => {
  const [recommendedMovies,setrecommendedMovies]=useState([]);
  const searchMovies=useRef();
 
  const ShowGPTMovies=async()=>{
    const query="Act as a movies recommended system for my query "+ searchMovies.current.value+"suggest me only 5 movies based on this with only title comma sperated like the example given ahead.Example result:Darbar,Jailer,Singam,Meesaya Muruku,Kathi"

    
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message.content);
    setrecommendedMovies(chatCompletion?.choices[0]?.message?.content?.split(","));

//     const data=recommendedMovies.map((movie)=>{
//       searchMovieTMBD(movie);
// })
// const promise= await Promise.all(data)
// console.log(promise);
    
    
    
  }

  

 

  return (
    <>
    <div className='mt-36 flex justify-center'>
        <input
        ref={searchMovies}
        className='bg-white w-4/12 p-2  rounded-l-md  outline-none text-bold' placeholder='Hey what would you like to watch today'/>
        <button 
        onClick={ShowGPTMovies}
        className='  bg-orange-500 rounded-r-md text-bold text-white px-4 py-2'>Search</button>
     
       
    
    </div>
    <div style={{
      position:"relative",
      left:"40%",
      marginTop:"50px"
    }}>
    
    {recommendedMovies.map((item,index)=>{
      return <h1 className='text-white' key={index} style={{marginBottom:"10px"}}  >{item}   </h1>
     })}
    
    </div> 

   <GPTMoviesSuggestions datas={recommendedMovies[0]}/>
   
    </>
  )
}

export default GPTsearchBar