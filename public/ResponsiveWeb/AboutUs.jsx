import React from 'react';
import { MdOutlineMonitor } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { FaWandMagic } from "react-icons/fa6";

const AboutUs = () => {
  return (
 
<div className="bg-black bg-opacity-80 mt-16">
    <h1 className="text-4xl text-blue-700 text-center font-semibold pt-6" >ABOUT US</h1>
   <div className="grid grid-cols-3 p-28 text-white">
        <div>
 <MdOutlineMonitor className="h-12 w-14 ml-28 " />
 <h1 className="text-xl font-bold ml-20 ">Easy to Use</h1>
 <p className="w-72 text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta? Sunt assumenda ullam nobis ad ab minus eligendi quae laborum sed! </p>
        </div>

        <div>
 <FaTrophy  className="h-12 w-14 ml-28" />
 
 <h1 className="text-xl font-bold ml-20">Awesom Design</h1>
 <p className="w-72 text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta? Sunt assumenda ullam nobis ad ab minus eligendi quae laborum sed! </p>
        </div>

        <div>

        <FaWandMagic className="h-12 w-14 ml-28" />
 <h1 className="text-xl font-bold ml-16">Easy to Customize</h1>
 <p className="w-72 text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta? Sunt assumenda ullam nobis ad ab minus eligendi quae laborum sed! </p>
        </div>

     </div>
</div>
       
  )
}

export default AboutUs;