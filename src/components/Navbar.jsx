import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="p-8">
        <ul className="flex gap-4">
          <li className="text-white hover:text-indigo-50">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-white hover:text-indigo-50">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-white hover:text-indigo-50">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
