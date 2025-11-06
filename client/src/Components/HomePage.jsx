import React from 'react'

function HomePage() {
  return (
    <div className='h-screen w-full bg-white'>
        <div className='bg-white text-white flex justify-between items-center py-4 fixed top-0 left-0 w-full text-center text-lg border-b border-neutral-200 shadow-sm z-10  '>
           <div className='flex justify-center items-center gap-5 ml-5 text-black cursor-pointer'>
            <img src="../public/logo.png" alt="logo" className='w-[40px] h-[40px]' />
            <h1 className='text-2xl font-["Momo_Trust_Display"] font-semibold'>Accelerate</h1>
            </div>

            <div className='flex justify-center items-center gap-8 mr-6'>
                <button className='rounded-xl text-black flex justify-center items-center gap-3 px-7 py-2 cursor-pointer hover:bg-neutral-200 transition-all duration-200 hover:text-neutral-900 font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-5">
                  <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p>login</p>
                </button>
                <button className='rounded-xl bg-blue-500 text-white flex justify-center items-center  px-7 py-2 cursor-pointer hover:bg-blue-400 transition-all duration-200 text-shadow-2xs tracking-wide text-shadow-black'>Register</button>
            </div>
        </div>

        <div className='w-full flex justify-center items-center mt-10'>
          <img src="../public/heroImage.png" alt="hero" className='w-[800px] h-[300px] object-contain'/>
        </div>

        <div className='flex flex-col justify-center items-center bg-yellow-300 mx-auto p-36 w-full mt-10'>
            <h1 className='text-7xl font-bold text-neutral-800 text-center font-["Momo_Trust_Display"] tracking-tight'> Zero Effort  <br/> Idea Tracker</h1>
            <p className='text-neutral-700 mt-4 text-2xl font-["Montserrat"]'>Collect your amazing Ideas and track it effortlessly all in one place </p>
        </div>

        <div className='w-full flex justify-between items-center p-20 gap-10 mt-20'>
          <img 
            src="../public/photo2.png" 
            alt="photo-2" 
            className='w-[800px] h-[550px] object-cover hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer rounded-2xl' 
          />
          <div className='flex justify-center items-center w-full'>
            <div className='bg-violet-400 p-20 rounded-2xl flex flex-col justify-center items-start gap-5 h-[550px]'>
            <h1 className='text-4xl font-bold text-neutral-900 text-center font-["Momo_Trust_Display"] tracking-tight'>Organize your ideas like a pro</h1>
            <ul className='list-disc mt-5 text-neutral-800 text-xl pl-5 gap-2.5 flex flex-col'>
              <li className='font-["Roboto_Condensed"] text-xl'>have a mind blowing movie ending</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Thought of composing two songs </li>
              <li className='font-["Roboto_Condensed"] text-xl'>Write a book about my life</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Deep Dive in the history of the Cosmos</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a amazing idea for a new App</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a New Startup Idea</li>
              <li className='font-["Roboto_Condensed"] text-xl'>Got a brilliant idea for a podcast</li>
            </ul>
            </div>
          </div>
        </div>

    </div>
  )
}

export default HomePage