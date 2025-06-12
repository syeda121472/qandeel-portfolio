import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-70 px-4 py-3 flex items-center h-16 relative fixed w-full z-50 top-0 left-0" >
      {/* Logo */}
      <div>
        <h1 className="font-semibold text-2xl pl-11 text-yellow-500 italic">
          ADAN IT CENTER
        </h1>
      </div>

      {/* Hamburger Toggle */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="md:hidden text-white text-3xl cursor-pointer z-50 ml-auto"
      >
        ☰
      </label>

      {/* Navigation Links */}
      <div className="
        hidden 
        peer-checked:flex 
        md:flex 
        flex-col md:flex-row 
        items-center 
        gap-20 
        absolute md:static 
        top-20 left-0 w-full md:w-auto 
        bg-black md:bg-transparent 
        text-white md:text-white mr-10 font-semibold
        py-4 md:py-0 
        z-40 ml-auto
      ">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/aboutus" className="hover:text-yellow-300">About Us</Link>
        <Link to="/ourservices" className="hover:text-yellow-300">Services</Link>
        <Link to="/ourteam" className="hover:text-yellow-300">Our Team</Link>
        <Link to="/contactus" className="hover:text-yellow-300">Contact Us</Link>
        <Link to="/Footer" className="hover:text-yellow-300">Footer</Link>
      </div>
    </nav>
  );
};

export default Navbar;