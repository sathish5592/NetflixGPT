import React from 'react'

const MovieCard = ({data,title}) => {
    
    const movieresults=data?.results;
  return (
    <div className='pl-8 '>
        <h1 className='my-8 text-bold text-2xl '>{title}</h1>
    <div className='flex gap-4 flex-wrap '>{
         movieresults?.map((item)=>{
           return <div className=' cursor-pointer w-[190px] .hover:shadow-lg'>
                <img src={"https://image.tmdb.org/t/p/original/"+item?.poster_path} width={190} height={100} />
                <h1 className='mt-2 text-center text-wrap'>{item.title}</h1>
                </div>
         })
        }</div>
        
        </div>
  )
}

export default MovieCard