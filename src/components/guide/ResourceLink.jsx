import React from 'react';

const ResourceLink = ({ resource }) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="text-lg font-medium text-gray-900">{resource.name}</h3>
      <p className="text-gray-600 mt-1">{resource.description}</p>
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        Visit Website →
      </a>
    </div>
  );
};

export default ResourceLink;