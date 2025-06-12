import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import firstimg from '../assets/firstimg.png';
import tictactoe from '../assets/tictactoe.png';
import responive from '../assets/responive.png';
import Homepage from '../assets/Homepage.png';
import pararoz from '../assets/pararoz.png';
import reactResponsive from '../assets/reactResponsive.png';

// Public folder video references
const videos = {
  
  firstReact: '/videos/firstReact.mp4',
  scndRec: '/videos/scndRec.mp4',
  eventify: '/videos/eventify.mp4'
};

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const projects = [
    {
      img: firstimg,
      title: "Rock Paper Scissor Game",
      desc: "A fun, interactive game where players choose rock, paper, or scissors to compete.",
      link: "/paper/Rock,Paper,Scissor game.html",
    }, 
    {
      img: tictactoe,
      title: "Tic Tac Toe Game",
      desc: "A simple yet engaging Tic Tac Toe game that lets two players compete with real-time move updates and intuitive controls.",
      link: "/tictacgame/tictac.html",
    }, 
    {
      img: responive,
      title: "Responsive React Website",
      desc: "A fully responsive website built with React showcasing modern UI components.",
      link: "https://github.com/Syeda2462/ReactFirstproject",
      video: videos.firstReact
    }, 
    {
      img: pararoz,
      title: "Pararoz Tailwind",
      desc: "A beautiful website built with Tailwind CSS demonstrating responsive design principles.",
      link: "https://github.com/Syeda2462/TailwindProj1"
    }, 
    {
      img: reactResponsive,
      title: "React Responsive Website",
      desc: "Another responsive React project with modern animations and transitions.",
      link: "https://github.com/Syeda2462/React-Comp",
      video: videos.scndRec
    }, 
    {
      img: Homepage,
      title: "FullStack Eventify Website",
      desc: "A complete MERN stack application for event management with user authentication.",
      link: "https://github.com/syeda121472/EVENTIFY",
      video: videos.eventify
    }
  ];

  return (
    <div id='project' className='bg-gradient-to-tl from-black via-black to-purple-950 min-h-screen'>
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative w-full max-w-4xl">
            <video 
              controls 
              autoPlay 
              muted
              playsInline
              className="w-full rounded-lg shadow-2xl"
              key={selectedVideo}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-purple-400 transition-colors"
              aria-label="Close video"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      <h2 className="text-4xl text-center pt-12 font-bold text-white">MY PROJECTS</h2>
      <div className="w-44 h-1 bg-purple-500 mx-auto mt-4"></div>

      <div
        ref={ref}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-3 w-[90%] mx-auto pb-12 pt-14'
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className='bg-purple-950 h-auto rounded-2xl shadow-2xl backdrop-blur-md cursor-pointer hover:shadow-[0_0_25px_#8245ec] transition-all duration-300 overflow-hidden'
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className='h-56 w-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300'
              loading="lazy"
            />
            <div className="p-4">
              <h1 className='text-2xl font-bold text-white'>{project.title}</h1>
              <p className='mt-2 text-gray-300'>{project.desc}</p>
              <div className="flex gap-3 mt-4">
                {project.video && (
                  <button
                    onClick={() => handleVideoClick(project.video)}
                    className='bg-[#8245ec] text-white font-semibold rounded px-4 py-2 border hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all'
                  >
                    View Demo
                  </button>
                )}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='inline-block'
                >
                  <button className='bg-[#8245ec] text-white font-semibold rounded px-4 py-2 border hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all'>
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;


// 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