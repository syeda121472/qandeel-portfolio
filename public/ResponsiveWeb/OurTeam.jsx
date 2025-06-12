import React from 'react';
import { FaCamera } from "react-icons/fa6";
import { TbLayersSubtract } from "react-icons/tb";
import { BiSolidMessageRounded } from "react-icons/bi";
const OurTeam = () => {
  return (
  <div className='bg-black bg-opacity-80 max-h-[95vm] rounded-bl-[90px] rounded-tr-[90px] mt-20 pb-16'>
    <h1 className='text-4xl text-blue-700 text-center ml-10 font-semibold pt-6'>OUR TEAM</h1>
     {/* MAIN DIV  */}

<div className='grid grid-cols-3 mt-9'>
    
    {/* FIRST IMAGE DIV */}
    <div className='ml-56 text-center'>
        <img className='w-28 h-28 rounded-full object-cover ml-14 outline-double outline-white ' src="../images/Elon Musk Twitter CEO.jpg" alt="ceo" />
        <h1 className='text-white text-2xl mt-9 font-semibold'>ELON MUSK</h1>
        <h1 className='text-blue-600 text-md font-bold'>CEO & Founder</h1>
        <p className='text-yellow-500 font-semibold '>Web Developer & Programmer</p>
        <div className='flex gap-2 ml-14 mt-2'>
        <FaCamera className='h-7 w-7 text-white' />
        <TbLayersSubtract className='h-7 w-7 text-white' />
        <BiSolidMessageRounded  className='h-7 w-7 text-white' />
        </div>
    </div>
        {/* 2ND IMAGE DIV */}
    <div className='ml-44 '>
        <img className='w-32 h-32 rounded-full object-cover outline-double outline-white ' src="../images/VCEO.jpg" alt="ceo" />
        <h1 className='text-white text-2xl mt-6 font-semibold'>RAMZAY ALYA</h1>
        <h1 className='text-blue-600 text-md font-bold'>VCEO & Planner</h1>
        <p className='text-yellow-500 pl-7 font-semibold'>IT Expert</p>
        <div className='flex gap-3 ml-3 mt-2 '>
        <FaCamera className='h-7 w-7 text-white' />
        <TbLayersSubtract className='h-7 w-7 text-white' />
        <BiSolidMessageRounded  className='h-7 w-7 text-white' />
        </div>
    </div>

       {/* 3RD IMAGE DIV */}

    <div className='ml-9 '>
        <img className='w-28 h-28 rounded-full object-cover outline-double outline-white ' src="../images/Managing Director.jpg" alt="ceo" />
        <h1 className='text-white text-2xl mt-9 font-semibold'>JANIFER OKLA</h1>
        <h1 className='text-blue-600 text-md font-bold'>Managing Director</h1>
        <p className='text-yellow-500  pl-4 font-semibold'>Web Designer</p>
        <div className='flex gap-3 ml-5 mt-2'>
        <FaCamera className='h-7 w-7 text-white' />
        <TbLayersSubtract className='h-7 w-7 text-white' />
        <BiSolidMessageRounded  className='h-7 w-7 text-white' />
        </div>
    </div>
    </div>
  </div>
  )
}

export default OurTeam;
