import React, { useRef, useState } from 'react';
import {  createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [signin,setsignin]=useState(true);
    const [errormsg,seterroemsg]=useState();
    const name=useRef();
    const email=useRef();
    const Password=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    

    const Handlelogin=()=>{
        signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
           dispatch(addUser(user.email))
          console.log(user);

          if(user){
              navigate('/browse')
          }
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterroemsg(errorMessage)
        });
      
    }
    const HandleSignup=()=>{
        
        createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
          // Signed up 

          
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const user = userCredential.user;
            console.log(user);
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterroemsg(errorMessage)
          // ..
        });
    }
  return (
    <div className='bg-[url("https://www.bhmpics.com/downloads/netflix-backgrounds-/36.netflix-background.jpg")]  w-[100vw] h-[100vh] opacity-[1.4]'>
        <div className=' flex justify-center items-center w-[100vw] h-[100vh]'>
              <div className='bg-black opacity-95 text-white py-12 px-24 rounded-md'>
                <h1 className=' text-center mb-6 text-bold '> {signin?"Sign in":"sign up" }   </h1>
                {!signin&&<div>
                <h1 className='text-bold mb-4 size-26'>Enter name</h1>
                <input className='text-bold mb-4 size-26 p-2 rounded-md outline-none bg-gray-600 w-full' ref={name} />
                </div>}
                
                <h1 className='text-bold mb-4 size-26'>E-mail Id</h1>
                <input className='text-bold mb-4 size-26 p-2 rounded-md  outline-none  bg-gray-600 w-full'  ref={email}/>
                <h1  className='text-bold mb-4 size-26'>Password</h1>
                <input className='text-bold mb-4 size-26 p-2 rounded-md   bg-gray-600 outline-none w-full'  ref={Password}/><br/>

                {errormsg&&<h1 className='text-bold text-red-500'>{errormsg}</h1>}

               {signin? <button className='bg-red-700 py-2 px-4 rounded-md w-full mt-4' onClick={Handlelogin}>Login</button>:
                <button className='bg-red-700 py-2 px-4 rounded-md w-full mt-4'onClick={HandleSignup}>Sign up</button>}
                {signin ?<h1 className='my-8'>Don't have an account <span className='text-red-500 cursor-pointer ' onClick={()=>setsignin(!signin)} >Sign up</span></h1>: <h1 className='my-8'>Already have an Account <span className='text-red-500 cursor-pointer mt-8' onClick={()=>setsignin(!signin)} >Sign in</span></h1>}
                
              </div>
        </div>
    </div>
  )
}

export default Login