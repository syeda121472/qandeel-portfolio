import { div } from "framer-motion/client";
import React from "react";

const Footer = () => {
  return (

    <div className="bg-black bg-opacity-80 h-[450px] mt-20 rounded-bl-[90px] rounded-tr-[90px]">
        <div className="flex flex-col lg:flex-row justify-around px-4 lg:px-0 gap-10">
           {/* first div */}
        <div className="pl-9">
          <h1 className="text-blue-600 italic  font-semibold text-4xl pt-16 ">THE TECHNICAL</h1>
          <p className="text-white italic  w-full lg:w-[420px]  pt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut excepturi, nisi fugit voluptas recusandae nobis exercitationem omnis autem eaque, dolore totam vel impedit eligendi dicta, beatae aliquid atque tempore! Magni recusandae a reiciendis voluptatum deleniti! Nesciunt nemo asperiores molestiae, accusantium architecto tenetur, ipsum consequatur inventore quo ratione officia porro ab.
          </p>
        </div>
            {/* scnd div */}
        <div>
            <h1 className="text-4xl text-blue-700 italic font-semibold pt-16">CONTENT</h1>
            <ul className="text-white text-center mt-16">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Team</li>
                <li>Contact Us</li>
            </ul>
        </div>
           {/* 3rd div */}
        <div>
          <div className="flex gap-1  mt-20">
            <div >
            <img className="w-32 h-32 border-2 border-white" src="img1.jpg" alt="img" />
            <img className="w-32 h-32 mt-1 border-2 border-white" src="img2.jpg" alt="img" />
            </div>
            <div >
            <img className="w-32 h-32 border-2 border-white" src="img3.jpg" alt="img" />
            <img className="w-32 mt-1 h-32 border-2 border-white" src="img4.jpg" alt="img" />
            </div>
            <div >
            <img className="w-32 h-32 border-2 border-white" src="img3.jpg" alt="img" />
            <img className="w-32 h-32 mt-1 border-2 border-white" src="img4.jpg" alt="img" />
            </div>
           
          </div>
          
        </div>
        </div>
    

    </div>

);
};

export default Footer;
