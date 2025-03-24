import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Amazing experience! The team was professional and delivered beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    feedback: "The quality and attention to detail are exceptional. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "Truly a masterpiece. The team turned my vision into reality.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="Testimonials" className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          Customer <span className="text-blue-600">Testimonials</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Hear from our happy clients about their experiences with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>

      {/* Button to Show Contact Form */}
      <div className="text-center mt-12">
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          Contact Us
        </Link>
      </div>

      {/* Nested Routing for Contact Form */}
      <Routes>
        <Route path="contact" element={<ContactForm />} />
      </Routes>
    </section>
  );
};

export default Testimonials;
