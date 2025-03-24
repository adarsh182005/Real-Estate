import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <img src={assets.logo} alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li><Link to="/" className="cursor-pointer hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="cursor-pointer hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="cursor-pointer hover:text-gray-400">Projects</Link></li>
          <li><Link to="/testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</Link></li>
        </ul>

        {/* Sign-up Button (hidden on small screens) */}
        <button className="hidden md:block bg-white px-8 py-2 rounded-full shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Navbar;