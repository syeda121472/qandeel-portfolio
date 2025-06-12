import { FaHandshake } from "react-icons/fa";
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import programing from '../assets/programing.png';
import atom from '../assets/atom.png';
import express from '../assets/express.png';
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-tr from-black via-black to-purple-950 h-[100%] rounded-tr-lg min-h-screen">
      <h2 className="text-4xl font-bold text-center pt-16 text-white"> MY SKILLS</h2>
      <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

      {/* Skills container with controlled spacing */}
      <div className="flex flex-col items-center px-4 pt-20 pb-7 gap-y-12 md:gap-y-16 lg:gap-y-20">
        {/* First row of skills */}
        <div className='flex flex-wrap justify-center gap-5 w-full max-w-6xl'>
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={html} alt="HTML" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>HTML</h1>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={css} alt="CSS" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>CSS</h1>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={javascript} alt="JavaScript" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>JavaScript</h1>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={programing} alt="Node JS" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>Node Js</h1>
          </motion.div>
        </div>

        {/* Second row of skills */}
        <div className='flex flex-wrap justify-center gap-5 w-full max-w-6xl'>
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={atom} alt="React" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>React</h1>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 hover:shadow-[0_0_25px_#8245ec] rounded-2xl cursor-pointer pt-7 text-white'
          >
            <img src={express} alt="Express" className='w-14 h-14 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>Express</h1>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5}}
            whileHover={{ scale: 1.09 }}
            className='h-48 w-48 border-2 rounded-2xl hover:shadow-[0_0_25px_#8255ec] cursor-pointer pt-7 text-white'
          >
            <RiTailwindCssLine className='w-14 h-14 text-purple-500 mx-auto mt-6' />
            <h1 className='font-bold text-xl pt-4 text-center tracking-wider'>Tailwind</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;