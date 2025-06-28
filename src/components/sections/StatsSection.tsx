import React from 'react';
import { categories } from '../../data/resources';
import { Users, BookOpen, Globe, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const totalResources = categories.reduce((total, category) => total + category.resources.length, 0);
  const freeResources = categories.reduce((total, category) => 
    total + category.resources.filter(resource => resource.isFree).length, 0
  );
  const categoriesCount = categories.length;
  const featuredResources = categories.reduce((total, category) => 
    total + category.resources.filter(resource => resource.featured).length, 0
  );

  const stats = [
    {
      icon: <BookOpen className="text-purple-600" size={32} />,
      value: totalResources,
      label: 'Curated Resources',
      description: 'Hand-picked tools and platforms'
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      value: categoriesCount,
      label: 'Categories',
      description: 'Organized by purpose and use case'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      value: freeResources,
      label: 'Free Resources',
      description: 'No cost to get started'
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      value: featuredResources,
      label: 'Featured Tools',
      description: 'Editor\'s choice recommendations'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Innovation at Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our growing collection of resources helps thousands of young innovators turn their ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;