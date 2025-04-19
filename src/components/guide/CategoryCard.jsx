import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/guide/${category.id}`} className="block">
      <div className={`${category.color} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}>
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;