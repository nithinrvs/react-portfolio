import React from 'react'

export default function () {
  return (
    <div className='flex justify-between items-center h-24 max-w-[95%]  mx-auto border-b-2 text-[#BEBEBE] font-arial'>
      <h1 className='w-full text-xl font-bold text-[#C0A062] border-b-[#BEBEBE]-50'>NTHIN RAYAVARAPU</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 '><button>Home</button></li>
        <li className='p-4'><button>About</button></li>
        <li className='p-4'><button>Contact</button></li>
      </ul>
    </div>
  )
}
