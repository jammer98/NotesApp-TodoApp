import React from 'react'
import { Link } from 'react-router'

function LoginPage() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
     <div className='w-1/2 h-screen flex justify-center flex-col gap-10'>
        <div className='p-2 flex items-center mb-7 h-auto w-full'>
          <a href="/">
          <div className='flex p-2'>
             <img src="../public/logo.png" alt="logo" className='w-10 h-10 ml-5 mt-2 rounded-full' />
            <h1 className='text-2xl font-["Montserrat"] ml-3 font-semibold tracking-tighter mt-2 '>Accelerate</h1>
          </div>
          </a>
        </div>
        <div className='flex flex-col items-center w-full max-w-5xl p-10 h-3/4 mb-9'>
          <form action="submit" className='py-6 px-4 rounded-2xl flex flex-col gap-7 bg-white justify-center items-center w-md'>
                <div className='flex flex-col'>
                    <div className='p-4 w-full text-center text-4xl font-["Playfair_Display"] tracking-tight text-neutral-700 font-bold'>Welcome Back</div>
                    <div className='text-center'>Enter your details</div>
                </div>
                <input type="email" placeholder='Email' className='p-4 w-full border-2 border-neutral-400 rounded-2xl outline-1 outline-neutral-100 hover:outline-2 hover:outline-neutral-500'/>
                <input type="password" placeholder='Password' className='p-4 w-full border-2 border-neutral-400 rounded-2xl outline-1 outline-neutral-100 hover:outline-2 hover:outline-neutral-500' />
                <button type='submit' className='bg-violet-400 w-full p-4 rounded-full cursor-pointer hover:bg-violet-300 transition-all duration-200 text-xl font-["Montserrat"] font-medium text-white'>Login</button>
            </form>

            <footer className='w-full flex justify-start items-center mt-20'>
                <div>
                  don't have an account ? <Link to={"/register"} className='text-blue-600'>Regsiter Here</Link>
                </div>
            </footer>
          </div>
     </div>
     <div className='bg-violet-300 w-1/2 h-screen flex justify-center items-center'>
     <img src="../public/loginImage.png" alt="login image" className='scale-60 rounded-4xl'/>
     </div>
    </div>
  )
}

export default LoginPage