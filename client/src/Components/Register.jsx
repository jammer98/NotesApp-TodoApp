import React from 'react'

function Register() {

    const handleRegsiter = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className='w-full h-screen bg-red-300 flex justify-center items-center'>
        <div className=' flex justify-between items-center bg-white p-7 w-full max-w-6xl rounded-2xl h-3/4'>
            <div className="relative z-10">
                    <img
                    src="/Leftt.png"
                    alt="Left Decoration"
                    className="w-64 h-auto -mr-20 z-10 relative scale-400"
                    />
            </div>
            <form action="submit" className='bg-neutral-200 p-10 flex flex-col items-center justify-center rounded-2xl h-full ' onSubmit={handleRegsiter} >
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Register</button>
            </form>
       <div className="relative z-10">
                    <img
                    src="/registerright.png"
                    alt="Left Decoration"
                    className="w-64 h-auto -mr-20 z-10 relative"
                    />
            </div>
        </div>
        
    </div>
  )
}

export default Register