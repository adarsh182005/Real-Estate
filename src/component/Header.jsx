import React from 'react';
import headerImage from '../assets/header_img.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden px-4"
      style={{ backgroundImage: `url(${headerImage})` }}
      id="Header"
    >
      <div className="text-center mx-auto py-4 px-6 md:px-16 lg:px-24 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold max-w-4xl mx-auto leading-tight">
          Explore the Home of Your Dreams
        </h2>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto text-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
