import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import CategoryCard from '../components/guide/CategoryCard';
import { categories } from '../data/guideData';

const HomePage = () => {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Online Earning Guide</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover proven ways to earn income online with our comprehensive guides and resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with Online Earning</h2>
        <div className="text-gray-700">
          <p>
            Starting your online earning journey can feel overwhelming with so many options available. Here are some general tips to help you begin:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li><strong>Assess your skills and interests</strong> - Choose earning methods that align with what you're good at and enjoy.</li>
            <li><strong>Start with low investment options</strong> - Begin with methods that require minimal upfront costs while you learn.</li>
            <li><strong>Be prepared to learn</strong> - Invest time in developing necessary skills and understanding your chosen path.</li>
            <li><strong>Start as a side hustle</strong> - Keep your regular income while you build your online earnings.</li>
            <li><strong>Beware of scams</strong> - Research thoroughly and avoid opportunities that promise unrealistic returns.</li>
            <li><strong>Be patient and persistent</strong> - Most online income streams take time to develop and grow.</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;