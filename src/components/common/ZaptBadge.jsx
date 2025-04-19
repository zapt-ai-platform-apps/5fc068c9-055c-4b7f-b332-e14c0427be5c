import React from 'react';

const ZaptBadge = () => {
  return (
    <a 
      href="https://www.zapt.ai" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
    >
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded mr-2">
        Made on ZAPT
      </span>
    </a>
  );
};

export default ZaptBadge;