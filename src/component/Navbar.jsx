import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </li>
        <li>
          <Link to="/testimonials" className="hover:text-blue-400">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
