import React from 'react'

function Dashboard() {
  return (
    <div className='w-full h-screen'>
      <div className='flex items-center'>
        <div className='w-1/6 bg-red-300 h-screen flex flex-col justify-between'>
        <div className='flex flex-col gap-8 py-8 h-auto justify-center items-start'>
          <div className='flex gap-3 items-center px-5'>
              <img src="../public/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
              <p className='text-lg font-semibold'>Accelerate</p>
          </div>

          <div className='flex flex-col gap-5 h-auto w-full px-3 justify-start'>
            <div className='w-full rounded-xl py-2 flex gap-2 items-center hover:bg-amber-500 transition-all duration-200'>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg"
               width="25" 
               height="25" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="black" 
               stroke-width="1.5" 
               stroke-linecap="round" 
               stroke-linejoin="round" 
               class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                <rect width="7" height="9" x="3" y="3" rx="1"/>
                <rect width="7" height="5" x="14" y="3" rx="1"/>
                <rect width="7" height="9" x="14" y="12" rx="1"/>
                <rect width="7" height="5" x="3" y="16" rx="1"/>
              </svg>
              </div>
             <p>Dashboard</p>
              </div>
            <div className='w-full rounded-xl py-2 hover:bg-amber-500 flex items-center gap-2 transition-all duration-200'>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              </div>
              <p>All Ideas</p>
            </div>
            <div className= 'w-full rounded-xl py-2 hover:bg-amber-500 flex items-center gap-2 transition-all duration-200'>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className="size-6">
                <path stroke-linecap="round" 
                  linejoin="round" 
                  d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p>Add New Idea</p>
            </div>
            <div className='w-full rounded-xl py-2 hover:bg-amber-500 flex items-center gap-2 transition-all duration-200 '>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="size-6">
                <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <p>Progress</p>
            </div>
            <div className='w-full rounded-xl py-2 hover:bg-amber-500 flex items-center gap-2 transition-all duration-200'>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
              </div>
              <p>Collaborate</p>
            </div>
          </div>
        </div>

        <div className='w-full h-auto py-6 px-3 bg-yellow-300 flex items-center'>
          <div className='px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="size-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </div>
          <p className='text-lg'>User</p>
        </div>
      </div>

        <div className='w-5/6 h-screen'>
        <div className='flex border-2 border-neutral-500 justify-between items-center py-4'>
          <p className='px-3'>Dashboard</p>
          <button className='px-3 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-7">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard