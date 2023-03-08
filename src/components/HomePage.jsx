import React from 'react'

export default function () {
  return (
    <div className=' w-full  mx-7   text-5xl font-droid  text-[#BEBEBE]' >
      <div className=' max-w-[75%] my-32'>
        <p className=' font-bold'>I'm a Creative Front-end </p>
        <p className='my-2 font-bold'>Developer & UI/UX Designer.I enjoy making websites that are innovative, user-focussed,accessible  & performant.  </p>
        <p className='my-2 font-bold'></p>
        <p className='my-2 font-bold'></p>
        <p className='my-2 font-bold'></p> 
      </div>

      <h1 className='pb-10 text-[#C0A062]'>Projects</h1>
      <div className='pb-28'>
        <div className="flex justify-between max-w-[95%] text-7xl" >
              <span>
                <span className="text-3xl mr-4">(01)</span>
                <span className='cursor-pointer' onClick={()=> window.open("https://github.com/nithinrvs/TO-DO-List-with-Javascript", "_blank")}>TO-DO List </span>
              </span>
              <span>2023</span>
        </div>

        <div className="flex justify-between max-w-[95%] text-7xl" >
              <span>
                <span className="text-3xl mr-4">(02)</span>
                <span  className='cursor-pointer' onClick={()=> window.open("https://github.com/nithinrvs/vtop-clone", "_blank")}>Vtop Clone</span>
              </span>
              <span>2022</span>
        </div>

        <div className="flex justify-between max-w-[95%] text-7xl" >
              <span>
                <span className="text-3xl mr-4">(02)</span>
                <span >Coming Soon</span>
              </span>
              <span>2023</span>
        </div>

        <div className="flex justify-between max-w-[95%] text-7xl" >
              <span>
                <span className="text-3xl mr-4">(03)</span>
                <span>Coming Soon</span>
              </span>
              <span>2023</span>
        </div>

        <div className="flex justify-between max-w-[95%] text-7xl" >
              <span>
                <span className="text-3xl mr-4">(04)</span>
                <span>Coming Soon</span>
              </span>
              <span>2023</span>
        </div>
      </div>


    </div> 
  )
}
