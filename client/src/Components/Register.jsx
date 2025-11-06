import React from 'react'

function Register() {

    const handleRegsiter = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className='w-full h-screen bg-blue-400 flex justify-center items-center'>
        <div className=' flex justify-between bg-white items-center p-7 w-full max-w-7xl rounded-2xl h-[90%] gap-6'>
            <div className="relative z-10">
                    <img
                    src="/Leftt.png"
                    alt="Left Decoration"
                    className="relative scale-250 w-[180px] h-[250px] ml-28"
                    />
            </div>
            <form action="submit" className='bg-neutral-200 p-10 flex flex-col items-center justify-center rounded-2xl h-full w-sm gap-7' onSubmit={handleRegsiter} >
                <div className='flex flex-col'>
                    <div className='p-4 w-full text-center text-4xl font-["Playfair_Display"] tracking-tight text-neutral-700 font-bold'>Track Your Ideas</div>
                    <div className='text-center'>Please register yourself</div>
                </div>
                <input type="text" placeholder='Username' className='p-4 w-full border-2 border-neutral-400 rounded-2xl outline-1 outline-neutral-100' />
                <input type="email" placeholder='Email' className='p-4 w-full border-2 border-neutral-400 rounded-2xl outline-1 outline-neutral-100' />
                <input type="password" placeholder='Password' className='p-4 w-full border-2 border-neutral-400 rounded-2xl outline-1 outline-neutral-100' />
                <button type='submit' className='bg-sky-400 w-full p-4 rounded-full cursor-pointer hover:bg-sky-300 transition-all duration-200 text-xl font-["Montserrat"] font-medium text-white'>Register</button>
            </form>
       <div className="relative z-10">
                    <img
                    src="/Rightt.png"
                    alt="Left Decoration"
                    className="w-[200px] h-auto z-10 relative scale-140 mr-20 mt-40"
                    />
            </div>
        </div>
        
    </div>
  )
}

export default Register