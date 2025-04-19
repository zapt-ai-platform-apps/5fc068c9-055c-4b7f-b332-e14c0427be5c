import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GuideContent from '../components/guide/GuideContent';
import { guides, categories } from '../data/guideData';

const GuidePage = () => {
  const { categoryId } = useParams();
  const [guide, setGuide] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    console.log('Loading guide for category:', categoryId);
    if (categoryId && guides[categoryId]) {
      setGuide(guides[categoryId]);
      setCategory(categories.find(cat => cat.id === categoryId));
    }
  }, [categoryId]);

  if (!guide || !category) {
    return (
      <PageLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Guide not found</h2>
          <p className="mt-2 text-gray-600">The guide you're looking for doesn't exist or is still being created.</p>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800 cursor-pointer">
            Return to Home
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800 cursor-pointer">
          ← Back to all guides
        </Link>
      </div>
      
      <div className={`${category.color} rounded-lg p-4 mb-8 inline-block`}>
        <span className="text-2xl mr-2">{category.icon}</span>
        <span className="text-lg font-medium">{category.title}</span>
      </div>

      <GuideContent guide={guide} />
    </PageLayout>
  );
};

export default GuidePage;