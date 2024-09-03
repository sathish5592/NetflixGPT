import React, { useEffect, useState } from 'react'
import {logo}    from '../utils/constants'
import { onAuthStateChanged ,signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/UserSlice';
import { toggleGPTsearch } from '../utils/GPTslice';

const Header = () => {
  const navigate=useNavigate();
  const [userDetails,setuserDetails]=useState();
  const name=useSelector((store)=>store.user);
  
  console.log(name+" test");
 // const [status,setstaus]=useState();
  const dispatch=useDispatch()
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid= user.uid;
        setuserDetails(user);
        
        navigate('/browse')
        
        // ...
      } else {
        // User is signed out
        // ...
        // setstaus("state change");
         dispatch(removeUser())
        navigate('/')
        
      }
    });
   
   },[])
  
  return (
    <div className='absolute z-30 top-0 w-full'>
        <div className='flex justify-between items-center'>
        <img src={logo} width={200} />
       <div className='flex gap-12 pr-8 items-center'>
        <button
        className=' bg-purple-700 text-white p-2 rounded-lg text-bold'
        onClick={()=>{
           dispatch(toggleGPTsearch())
        }}
        >GPT search</button>
        <h1 className='text-bold text-red-700 w-28 mr-10'>{userDetails&& userDetails.email}</h1>
        <button
        className='text-bold text-red-700 bg-white px-4 py-2 rounded-lg'
        onClick={()=>{
            signOut(auth).then(() => {
              dispatch(removeUser());
          }).catch((error) => {
              // An error happened.
            });
          
          
        }}
        >logout</button>
        </div>
        </div>
    </div>
  )
}

export default Header