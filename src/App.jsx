import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import ContactForm from "./component/ContactForm";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Header from "./component/Header";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
