import React from 'react'

function HomePage() {
  return (
    <div className='h-screen w-full bg-white flex flex-warp justify-center items-center'>
        <div className='bg-red-300 text-white flex justify-between items-center py-5 fixed top-0 left-0 w-full shadow-xl shadow-neutral-300 text-center text-lg'>
           <div className='flex justify-center items-center gap-5'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="size-7">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h1 className='text-lg'>Note App</h1>
            </div>

            <div>
                <button className='rounded-xl bg-blue-400 text-white'>login</button>
                <button className='rounded-xl bg-red-400 text-white'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage