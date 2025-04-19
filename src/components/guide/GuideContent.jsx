import React from 'react';

const GuideContent = ({ guide }) => {
  if (!guide) return null;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{guide.title}</h1>
        <p className="mt-2 text-xl text-gray-600">{guide.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Get Started</h2>
        <div className="space-y-6">
          {guide.steps.map((step, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900">{index + 1}. {step.title}</h3>
              <p className="mt-1 text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guide.platforms.map((platform, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white">
              <h3 className="text-lg font-medium text-gray-900">{platform.name}</h3>
              <p className="text-gray-600 mt-1">{platform.description}</p>
              <a 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:text-blue-800"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pros</h2>
          <ul className="space-y-2">
            {guide.pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cons</h2>
          <ul className="space-y-2">
            {guide.cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">✕</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pro Tips</h2>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <ul className="space-y-2">
            {guide.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-600 mr-2">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideContent;