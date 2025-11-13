import React from 'react'
import { useNavigate  } from 'react-router'

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className='h-screen w-full bg-white'>
        <div className='bg-white text-white flex justify-between items-center py-4 fixed top-0 left-0 w-full text-center text-lg border-b border-neutral-200 shadow-sm z-10'>
          <a href='/'>
           <div className='flex justify-center items-center gap-5 ml-5 text-black cursor-pointer'>
            <img src="../public/logo.png" alt="logo" className='w-10 h-10' />
            <h1 className='text-2xl font-["Montserrat"] font-semibold tracking-tight'>Accelerate</h1>
            </div>
            </a>

            <div className='flex justify-center items-center gap-8 mr-6'>
                <button onClick={() => navigate("/login")} className='rounded-xl text-black flex justify-center items-center gap-3 px-7 py-2 cursor-pointer hover:bg-neutral-200 transition-all duration-200 hover:text-neutral-900 font-semibold border-2 border-neutral-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokewidth="1.5" 
                    stroke="currentColor" 
                    class="size-5">
                  <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p>login</p>
                </button>
                <button onClick={() => navigate('/register')} className='rounded-xl bg-blue-500 text-white flex justify-center items-center  px-7 py-2 cursor-pointer hover:bg-blue-400 transition-all duration-200 text-shadow-2xs tracking-wide text-shadow-black'>Register</button>
            </div>
        </div>

        <div className='w-full flex justify-center items-center mt-10'>
          <img src="../public/heroImage.png" alt="hero" className='w-[800px] h-[300px] object-contain'/>
        </div>

        <div className='flex flex-col justify-center items-center bg-yellow-300 mx-auto p-36 w-full mt-10'>
            <h1 className='text-7xl font-bold text-neutral-800 text-center font-["Momo_Trust_Display"] tracking-tight'> Zero Effort  <br/> Idea Tracker</h1>
            <p className='text-neutral-700 mt-4 text-2xl font-["Montserrat"]'>Collect your amazing Ideas and track it effortlessly all in one place </p>
        </div>

        <div className='w-full flex justify-between items-center p-20 gap-20 mt-20'>
          <img 
            src="/photo2.png" 
            alt="photo-2" 
            className='w-[750px] h-[550px] object-cover scale-110 hover:scale-120 transition-transform duration-500 ease-in-out cursor-pointer rounded-3xl' 
          />
          <div className='flex justify-center items-center w-full'>
            <div className='bg-violet-400 p-20 rounded-2xl flex flex-col justify-center items-start gap-5 h-[550px]'>
            <h1 className='text-4xl font-bold text-neutral-900 text-center font-["Roboto_Condensed"] tracking-tight'>Organize your ideas like a pro</h1>
            <ul className='list-disc mt-5 text-neutral-800 text-xl pl-5 gap-2.5 flex flex-col'>
              <li className='font-["Roboto_Condensed"] text-xl'>have a mind blowing movie ending</li>
              <li className='font-["Roboto_Condensed"] text-xl'>composing songs </li>
              <li className='font-["Roboto_Condensed"] text-xl'>Write a book about my life</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Deep Dive in the history of the Cosmos</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a amazing idea for a new App</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a New Startup Idea</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a brilliant idea for a podcast</li>
            </ul>
            </div>
          </div>
        </div>

        <div className='py-32 flex justify-center items-center w-full h-[600px] bg-linear-to-r from-[hsl(233,100%,90%)] from-45% to-[hsl(0,0%,89%)] gap-10'>
          <div className='w-1/2 h-[400px] flex items-center justify-center'>
          <ul className='list-decimal text-neutral-800 space-y-4 ml-10'>
            <li className='font-["Montserrat"] text-4xl tracking-tight'>Write your idea</li>
            <li className='font-["Montserrat"] text-4xl tracking-tight'>Add a tag to it </li>
            <li className='font-["Montserrat"] text-4xl tracking-tight'>Add a time for notification</li>
            <li className='font-["Montserrat"] text-4xl tracking-tight'>Done</li>
          </ul>
          </div>
          <div className='flex justify-center items-center w-1/2 h-[600px]'>
                <button onClick={()=> navigate("/Dashboard")} className='bg-[hsl(233,100%,90%)] p-4 rounded-2xl border-3 border-[hsl(0,0%,100%)] text-neutral-800 text-3xl font-["Roboto_Condensed"] flex items-center justify-center gap-3 hover:text-4xl cursor-pointer transition-all duration-400'>
                 <p>Go to DashBoard</p>
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 strokeWidth="1.5" 
                 stroke="currentColor" 
                 className="size-8">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </button>
          </div>
        </div>

        <footer className="w-full bg-neutral-900 text-white py-30 mt-16 ">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="../public/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-lg font-semibold">Accelerate</h4>
                <p className="text-sm text-neutral-300">Track Ideas - Fast | Effortless | Secure.</p>
              </div>
            </div>

            <nav className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-300 hover:text-white text-xl">Home</a>
              <a href="#" className="text-neutral-300 hover:text-white text-xl">Features</a>
              <a href="#" className="text-neutral-300 hover:text-white text-xl">Pricing</a>
              <a href="#" className="text-neutral-300 hover:text-white text-xl">Contact</a>
            </nav>

            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Accelerate. All rights reserved.
            </div>
          </div>
        </footer>

    </div>
  )
}

export default HomePage