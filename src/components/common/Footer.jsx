import React from 'react';
import ZaptBadge from './ZaptBadge';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Online Earning Guide. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">
              This guide is for informational purposes only. Individual results may vary.
            </p>
          </div>
          <ZaptBadge />
        </div>
      </div>
    </footer>
  );
};

export default Footer;