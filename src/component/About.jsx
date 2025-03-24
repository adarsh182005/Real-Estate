import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div id="About" className="flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={assets.project_img_1}
          alt="About Us"
          className="w-80 md:w-full rounded-lg md:rounded-tl-[200px] md:rounded-br-[200px]"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          <span className="text-black">About</span> Our Brand
        </h2>
        <p className="text-gray-600 mt-4">
          Passionate About Properties, Dedicated to Your Vision.
        </p>
        
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-black">10+</p>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-black">12+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-black">20+</p>
            <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-black">25+</p>
            <p className="text-gray-600">Ongoing Projects</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mt-6">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        
        {/* Button */}
        <div className="mt-6">
          <a
            href="#Contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 "
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
