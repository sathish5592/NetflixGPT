import React from 'react'
import Videobackground from './Videobackground';


const MainContainer = ({data}) => {
    
   
  return (
    <div className='text-white bg-gradient-to-r from-black'>

        <Videobackground id={data} />
       
       
        </div>
  )
}

export default MainContainer