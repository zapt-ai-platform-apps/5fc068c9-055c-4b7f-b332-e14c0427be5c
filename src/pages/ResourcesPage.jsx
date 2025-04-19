import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import ResourceLink from '../components/guide/ResourceLink';
import { resources } from '../data/guideData';

const ResourcesPage = () => {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Resources & Tools</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the best tools, platforms, and learning resources to support your online earning journey.
        </p>
      </div>

      {resources.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((resource, idx) => (
              <ResourceLink key={idx} resource={resource} />
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
        <p className="text-gray-700">
          The resources listed on this page are provided for informational purposes only. 
          We do not endorse any specific product or service, and inclusion on this list does not 
          imply our recommendation. Always conduct your own research before using any tool or service.
        </p>
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;