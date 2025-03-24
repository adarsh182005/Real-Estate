import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/testimonials" className="hover:text-gray-400">Testimonials</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
