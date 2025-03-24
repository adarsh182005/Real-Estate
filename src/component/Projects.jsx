import React from "react";
import { assets } from "../assets/assets"; // Ensure project images are available

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Apartment",
      description: "A luxury apartment with eco-friendly design and smart home integration.",
      image: assets.project_img_1,
    },
    {
      id: 2,
      title: "Eco-Friendly Villa",
      description: "A green-energy-powered villa with modern architectural design.",
      image: assets.project_img_2,
    },
    {
      id: 3,
      title: "Urban Skyscraper",
      description: "A high-rise commercial building with futuristic design and amenities.",
      image: assets.project_img_3,
    },
  ];

  return (
    <section id="Projects" className="py-16 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          Our <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Discover our latest architectural masterpieces, designed for modern living.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href="#Contact"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
