
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import img2 from "../assets/img2.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div ref={ref} id='about' className="bg-gradient-to-tl from-black via-black to-purple-950 min-h-screen">
      <div className="flex flex-col md:flex-row justify-around items-center pt-28">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.9 }}
          className="pt-20 pl-10"
        >
          <h1 className="text-xl text-white font-semibold ml-2">Hello, It's Me</h1>
          <h1 className="text-5xl text-white font-bold mt-3 font-serif">Qandeel Fatima</h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white ml-2 text-xl">I am a </span> Web Developer
          </h3>
          <p className="text-white text-md w-[300px] md:w-[500px] ml-2 mt-5 tracking-wider">
            I am a full-stack developer with over 1 year of experience in building scalable web applications.
            Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
          </p>

          {/* Download CV Button */}
          <div className="flex items-center mt-9 ml-2 space-x-4">
            {/* Download CV Button - Fixed version */}
            <a
              href="/THE-CV.pdf"
              download="Qandeel-Fatima-CV.pdf"
              className="inline-block"
            >
              <button className="text-white rounded-full border border-white bg-gradient-to-r from-purple-600 to-pink-500 font-semibold p-2 px-3 hover:from-pink-600 hover:to-purple-500 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}>
                Download CV
              </button>
            </a>

            {/* Hire Me Button */}
            <a href="#contact" >
              <button
                className="text-white rounded-full border border-white bg-gradient-to-r from-pink-600 to-purple-500 font-semibold p-2 px-7 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 cursor-pointer"
                style={{ 
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}>
                Hire Me
              </button>
            </a>
          </div>


        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img2}
            alt="About Me"
            className="w-[300px] md:w-[480px] mt-12 object-cover "
          />
        </motion.div>

      </div>
    </div>
  );
};

export default About;
