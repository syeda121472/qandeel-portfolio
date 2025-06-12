import React from "react";

const OurServices = () => {
  return (
    <div className="bg-black opacity-80 mt-3 mb-0 text-white h-auto  px-4 py-10 rounded-tl-[90px] rounded-br-[90px]  ">
      <h2 className="text-4xl text-blue-700 text-center font-semibold pt-3 ">
        BEST SERVICES
      </h2>

      <div className="grid   md:grid-cols-2  lg:grid-cols-3 mt-7  justify-items-center ">
        {/* BASIC */}
        <div className="bg-white text-black  hover:scale-105 w-[320px] max-w-sm  flex flex-col items-center text-center ">
          <h3 className="text-xl font-bold  h-20 w-full  p-6 bg-slate-200 hover:text-yellow-300 font-serif ">BASIC</h3>
          <div className="mt-4 text-xl font-serif "><sub>$</sub> <span className="hover:text-yellow-300 font-semibold text-4xl font-sans">20</span>  <sub>/ month</sub></div>
          <ul className="text-sm text-gray-700 w-full tracking-wider text-center pt-4 tracking-widest space-y-2 mb-6">
            <li> Responsive Website</li>
            <li> Free Name</li>
            <li> Mobile Friendly</li>
            <li> Webmail Free</li>
            <li> Customer Support</li>
          </ul>
          <div className="h-20 w-full  p-6 bg-slate-200">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition ">
            Purchase
          </button>
          </div>
        </div>

        {/* STANDARD */}
        <div className="bg-white text-black rounded hover:scale-105 shadow-lg w-[350px] max-w-sm flex flex-col items-center text-center ">
          <h3 className="text-xl font-bold  h-20 w-full  p-6 bg-slate-200 hover:text-yellow-300 font-serif">STANDARD</h3>
          <div className="mt-4 text-xl font-serif "><sub>$</sub> <span className="hover:text-yellow-300 font-semibold text-4xl font-sans">40</span>  <sub>/ month</sub></div>      
              <ul className="text-sm text-gray-700 w-full tracking-widest text-center pt-4  space-y-2 mb-6">
            <li> Responsive Website</li>
            <li> Free Name</li>
            <li> Mobile Friendly</li>
            <li> Webmail Free</li>
            <li> Customer Support</li>
          </ul>
          <div className="h-20 w-full  p-6 bg-slate-200">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            Purchase
          </button>
</div>        </div>

        {/* UNLIMITED */}
        <div className="bg-white text-black hover:scale-105  rounded  w-[350px] max-w-sm flex flex-col items-center text-center">
          <h3 className="text-xl font-bold h-20 w-full  p-6 bg-slate-200 hover:text-yellow-300 font-serif">UNLIMITED</h3>
          <div className="mt-4 text-xl font-serif "><sub>$</sub> <span className="hover:text-yellow-300 font-semibold text-4xl font-sans">60</span>  <sub>/ month</sub></div>   
          <ul className="text-sm text-gray-700 w-full tracking-widest text-center pt-4  space-y-2 mb-6">
            <li> Responsive Website</li>
            <li> Free Name</li>
            <li> Mobile Friendly</li>
            <li> Webmail Free</li>
            <li> Customer Support</li>
          </ul>
          <div className="h-20 w-full  p-6 bg-slate-200">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            Purchase
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;