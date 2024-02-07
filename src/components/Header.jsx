import React from 'react'
// import logo from '../assets/logo.png'

function Header() {
  return (
    <div className=' py-5'>
      <div className="container mx-auto">
        <div className='flex gap-2 p-2 justify-between items-center'>
          <div className='flex flex-col gap-0 '>
            <h1 className='text-gradient text-2xl md:text-4xl font-bold font-secondary'>Shady</h1>
            <h1 className='text-white text-2xl md:text-4xl font-bold font-secondary'>Mahmoud</h1>
          </div>
          <button className='btn btn-lg '>Work With Me</button>
        </div>
      </div>
    </div>
  )
}

export default Header
