import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">Online Earning Guide</span>
            </Link>
          </div>
          <div className="flex items-center">
            <nav className="ml-6 flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Resources
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;