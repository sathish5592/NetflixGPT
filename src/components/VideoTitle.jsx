import React from 'react'

const VideoTitle = ({data}) => {
   
  return (
    <div className=' absolute bottom-96 left-24 w-96 translate-y-12'>
        <h1 className='text-bold text-6xl mb-4'>{data?.title}</h1>
        <h1 className=''>{data?.overview}</h1>
        <button className='bg-gray-400 px-4 py-2 font-bold text-xl rounded-lg mr-8 translate-y-8 '>▶ Play</button>
        <button className='bg-gray-400 px-4 py-2 font-bold text-xl rounded-lg translate-y-8' >More info</button>
    </div>
  )
}

export default VideoTitle