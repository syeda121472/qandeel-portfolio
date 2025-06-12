
import React, { useRef } from 'react';
import { hover, motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' }); // triggers on scroll

  return (
    <section
      ref={ref}  id='education'
      className="bg-gradient-to-tr from-black via-black to-purple-950 text-white py-20 px-4 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white">MY EDUCATION</h2>
        <div className="w-48 h-1 bg-purple-500 mx-auto mt-4"></div>
        <div className="relative border-l border-purple-600">

          {/* Item 1 */}
          

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 ml-6 mt-20"
          >
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full mt-1.5 -left-2 border border-white "></div>
            <div className="border-2 border-purple-600 bg-gray-950 p-3 rounded ml-4 hover:shadow-[0_0_25px_#8245ec]  hover:scale-105 tranform " >
              <h3 className="text-2xl font-semibold">Bachelor of Computer Science</h3>
              <span className="text-sm text-gray-400">Govt. Zamindar College | 2022 - 2025</span>
              <p className="mt-3 text-gray-300">
                Specialized in web development, software engineering, and data structures. Actively participated in coding competitions and hackathons.
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <div className="border-2 border-purple-600 bg-gray-950 p-3 rounded ml-4 hover:shadow-[0_0_25px_#8245ec] hover:scale-105 transform">
              <h3 className="text-2xl font-semibold">Intermediate in ICS</h3>
              <span className="text-sm text-gray-400">Margazar College | 2020 - 2021</span>
              <p className="mt-3 text-gray-300">
                Studied Mathematics, Physics, and Computer Science. Developed a strong base in analytical and logical problem-solving.
              </p>
            </div>
          </motion.div>
      

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 ml-6 "
          >
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full mt-1.5 -left-2 border border-white "></div>
            <div className="border-2 border-purple-600 bg-gray-950 p-3 rounded ml-4 hover:shadow-[0_0_25px_#8245ec] hover:scale-105 tranform " >
              <h3 className="text-2xl font-semibold">Diploma Of Web Development</h3>
              <span className="text-sm text-gray-400">Adan IT Center |  2025</span>
              <p className="mt-3 text-gray-300">
                Specialized in full stack web development, and in Wordpress .
              </p>
            </div>
          </motion.div>
        </div>
        
      </motion.div>

    </section>
  );
};

export default Education;
