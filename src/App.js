
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">TasteBite</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-500">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recipes"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Recipe Page
                  </Link>
                </li>
                <li>
                  <Link to="/pages" className="text-gray-600 hover:text-blue-500">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link to="/buy" className="text-gray-600 hover:text-blue-500">
                    Buy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
         <Navbar />
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/recipes" element={<div>Recipe Page</div>} />
          <Route path="/pages" element={<div>Pages</div>} />
          <Route path="/buy" element={<div>Buy Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

