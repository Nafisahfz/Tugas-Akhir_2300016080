import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
