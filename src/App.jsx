import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App(){ return (
  

   <div className="bg-purple-500">
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
   <div>
     
     <Navbar/>
     <About/>
     <Skills/>
     <Project/>
     <Education/>
    <Contact/>
    <Footer/>
   </div>
  </div>
 
  )
}


export default App;