import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className='w-full h-screen flex'>
      {/* Sidebar */}
      <div className='w-1/6 h-screen flex flex-col justify-between border-r-2 border-neutral-500'>
        <div className='flex flex-col gap-8 py-8 h-auto justify-center items-start'>
          <button onClick={() => navigate("/")} className='flex gap-3 items-center px-5 cursor-pointer'>
            <img src="../public/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
            <p className='text-lg font-semibold'>Accelerate</p>
          </button>
          <div className='flex flex-col gap-5 h-auto w-full px-3 justify-start'>
            <button onClick={() => navigate('/Dashboard')} className={`w-full rounded-xl py-2 flex gap-2 items-center transition-all duration-200 cursor-pointer ${isActive("/Dashboard") ? "bg-neutral-300" : "hover:bg-neutral-200"}`}>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </div>
              <p className='font-["Montserrat"]'>Dashboard</p>
            </button>
            <button onClick={() => navigate('/Allideas')} className={`w-full rounded-xl py-2 flex items-center gap-2 transition-all duration-200 cursor-pointer ${isActive("/Allideas") ? "bg-neutral-300" : "hover:bg-neutral-200"}`}>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <p className='font-["Montserrat"]'>All Ideas</p>
            </button>
            <button onClick={() => navigate('/AddNewIdea')} className={`w-full rounded-xl py-2 flex gap-2 items-center transition-all duration-200 cursor-pointer ${isActive("/AddNewIdea") ? "bg-neutral-300" : "hover:bg-neutral-200"}`}>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className='font-["Montserrat"]'>Add New Idea</p>
            </button>
            <button onClick={() => navigate('/Progress')} className={`w-full rounded-xl py-2 flex gap-2 items-center transition-all duration-200 cursor-pointer ${isActive("/Progress") ? "bg-neutral-300" : "hover:bg-neutral-200"}`}>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <p className='font-["Montserrat"]'>Progress</p>
            </button>
            <button onClick={() => navigate('/Collaborate')} className={`w-full rounded-xl py-2 flex gap-2 items-center transition-all duration-200 cursor-pointer ${isActive("/Collaborate") ? "bg-neutral-300" : "hover:bg-neutral-200"}`}>
              <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <p className='font-["Montserrat"]'>Collaborate</p>
            </button>
          </div>
        </div>
        <button onClick={() => navigate('/User')} className='w-full h-auto py-5 px-3 flex items-center hover:bg-neutral-200 cursor-pointer'>
          <div className='px-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <p className='text-lg font-["Montserrat"]'>User</p>
        </button>
      </div>

      {/* Main Content Area */}
      <div className='w-5/6 h-screen flex flex-col'>
        {/* Top Header */}
        <div className='flex border-b-neutral-500 border-b-2 justify-between items-center py-5 bg-white'>
          <div></div>
          <div className='flex justify-center items-center gap-4 px-4'>
            <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
            </button>
            <button className='px-3 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='text-neutral-700 w-full'>
            {/* Page Title */}
            <div className='flex items-center justify-between px-4 py-2'>
              <div>
                <h1 className='text-2xl font-semibold font-["Playfair_Display"]'>DashBoard</h1>
                <p className='font-["Montserrat"] tracking-tight'>Create your ideas and work on it and track your progress</p>
              </div>
              <button onClick={() => navigate("/AddNewIdea")} className='flex items-center gap-3 bg-neutral-100 text-neutral-800 rounded-xl px-3 py-2 cursor-pointer hover:bg-neutral-50'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p>New Task</p>
              </button>
            </div>

            {/* Stats Cards */}
            <div className='p-6'>
              <div className='flex w-full items-stretch gap-4 justify-between'>
                <div className='flex-1 bg-neutral-100 rounded-2xl p-6 flex flex-col justify-center items-center'>
                  <p className='text-lg opacity-90'>Total Ideas</p>
                  <div className='flex items-center mt-8 text-3xl gap-2.5 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    <h1>4</h1>
                  </div>
                </div>
                <div className='flex-1 bg-amber-300 rounded-2xl p-6 flex flex-col justify-center items-center'>
                  <p className='text-lg opacity-90'>In Progress</p>
                  <div className='flex items-center mt-8 text-3xl gap-2.5 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>2</h1>
                  </div>
                </div>
                <div className='flex-1 bg-green-300 rounded-2xl p-6 flex flex-col justify-center items-center'>
                  <p className='text-lg opacity-90'>Completed</p>
                  <div className='flex items-center mt-8 text-3xl gap-2.5 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                    <h1>1</h1>
                  </div>
                </div>
                <div className='flex-1 bg-sky-300 rounded-2xl p-6 flex flex-col justify-center items-center'>
                  <p className='text-lg opacity-90'>Pending</p>
                  <div className='flex items-center mt-8 text-3xl gap-2.5 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <h1>1</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Ideas Section */}
            <div className='px-6'>
              <div className='px-7 py-4 flex justify-between items-center'>
                <div>
                  <p className='font-semibold text-2xl'>Recent Ideas</p>
                  <p>Your most recent ideas and their status</p>
                </div>
                <button onClick={() => navigate("/Allideas")} className='px-4 py-2 rounded-2xl border-2 border-neutral-300 bg-neutral-100 text-neutral-700 text-center hover:bg-neutral-50 cursor-pointer font-["Montserrat"]'>View All</button>
              </div>
              <div className='flex flex-col w-full gap-4 px-5 py-4'>
                <div className='flex justify-between items-center px-3 rounded-2xl py-2 hover:bg-neutral-100'>
                  <div className='flex flex-col justify-center w-full'>
                    <div className='text-lg'>Startup Idea</div>
                    <div className='w-auto flex gap-2 mt-2 items-center'>
                      <div className='bg-red-300 text-white rounded-2xl px-2 py-1 text-sm font-["Montserrat"]'>High</div>
                      <div>Due : 02/11/2025</div>
                    </div>
                  </div>
                  <div className='w-35 px-3 border-2 border-neutral-300 rounded-2xl text-center tracking-tight bg-amber-300 text-white font-["Montserrat"]'>In progress</div>
                </div>
                <div className='flex justify-between items-center px-3 rounded-2xl py-2 hover:bg-neutral-100'>
                  <div className='flex flex-col justify-center w-full'>
                    <div className='text-lg'>Leetcode-23 optimal way</div>
                    <div className='w-auto flex gap-2 mt-2 items-center'>
                      <div className='bg-white text-neutral-500 rounded-2xl px-2 py-1 text-sm font-["Montserrat"]'>Medium</div>
                      <div>Due : 02/11/2025</div>
                    </div>
                  </div>
                  <div className='w-35 px-3 border-2 border-neutral-300 rounded-2xl text-center tracking-tight bg-green-300 text-white font-["Montserrat"]'>Completed</div>
                </div>
                <div className='flex justify-between items-center px-3 rounded-2xl py-2 hover:bg-neutral-100'>
                  <div className='flex flex-col justify-center w-full'>
                    <div className='text-lg'>Odessy Ending - alternate Universe</div>
                    <div className='w-auto flex gap-2 mt-2 items-center'>
                      <div className='text-neutral-500 rounded-2xl px-2 py-1 text-sm border-2 border-neutral-400 font-["Montserrat"]'>Low</div>
                      <div>Due : 02/11/2025</div>
                    </div>
                  </div>
                  <div className='w-35 px-3 border-2 border-neutral-300 rounded-2xl text-center tracking-tight bg-sky-300 text-white font-["Montserrat"]'>Pending</div>
                </div>
                <div className='flex justify-between items-center px-3 rounded-2xl py-2 hover:bg-neutral-100'>
                  <div className='flex flex-col justify-center w-full'>
                    <div className='text-lg'>Maths Assignment - 2</div>
                    <div className='w-auto flex gap-2 mt-2 items-center'>
                      <div className='bg-red-300 text-white rounded-2xl px-2 py-1 text-sm font-["Montserrat"]'>High</div>
                      <div>Due : 02/11/2025</div>
                    </div>
                  </div>
                  <div className='w-35 px-3 border-2 border-neutral-300 rounded-2xl text-center tracking-tight bg-amber-300 text-white font-["Montserrat"]'>In progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard