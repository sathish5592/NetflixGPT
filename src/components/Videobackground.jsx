import React, { useEffect, useState } from 'react'
import { logo, options } from '../utils/constants';
import VideoTitle from './VideoTitle';

const Videobackground = ({id}) => {
   
    const [showvideos,setshowvideos]=useState();
   const getVideos=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?language=en-US1`, options)
    const json=await data.json();
   
    setshowvideos(json);
    
 }
 const filtereddata=showvideos?.results.filter((item)=>{
     return item.type==="Trailer"
 }) 


    useEffect(()=>{
        getVideos();
    },[])
   if(!filtereddata) return null;
  return (
    <div className='relative bg-gradient-to-r from-black'>
    <iframe 
    width="100%" height="900"
    src={`https://www.youtube-nocookie.com/embed/${filtereddata[0]?.key}?autoplay=1&mute=1`}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen></iframe>
    <VideoTitle data={id}/>
     </div>
  )
}

export default Videobackground

