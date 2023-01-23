import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

import AuthDetails from './AuthDetails';

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                console.log(userCredential);
                navigate("/orderList");
            }).catch((error) => {
                console.log(error);
            })
    }

  return (
    <>
    <div className='flex max-w-2xl mx-auto shadow border-b'>
    <form onSubmit={signIn}>
        <div className='px-8 py-8'>
            <div className='font-thin'>
                <h1>Log In to your Account</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-xs font-normal'>Email:</label>
                <input type="email" placeholder='Enter your email' onChange={(e) =>setEmail(e.target.value)} value={email} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-xs font-normal'>Password:</label>
                <input type="password" placeholder='Enter your password' onChange={(e) =>setPassword(e.target.value)} value={password} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button type='submit' className='w-full rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'>Log In</button>
            </div>
        </div>
    </form>
    </div>
    <div className='max-w-2xl mx-auto shadow border-b'>
        <AuthDetails />
    </div>    
    </>    
  )
}

export default SignIn