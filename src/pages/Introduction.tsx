import React from 'react';
import { History, Laptop, Globe } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">
            Introduction to Online Studies
          </h1>
          <p className="text-xl max-w-3xl">
            Discover how online education has evolved and transformed the learning
            landscape, making quality education accessible to everyone.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4">
                <History className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">The Past</h3>
              <p className="text-gray-600">
                Traditional classroom learning was the norm, with limited access to
                educational resources and geographical constraints.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4">
                <Laptop className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">The Present</h3>
              <p className="text-gray-600">
                Digital transformation has made education accessible anywhere,
                anytime, with interactive content and personalized learning paths.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">The Future</h3>
              <p className="text-gray-600">
                AI-powered learning, virtual reality classrooms, and adaptive
                technologies are shaping the future of education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Chart Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The Growth of Online Education
            </h2>
            <p className="text-xl text-gray-600">
              Online learning has seen exponential growth in recent years
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Education Growth Chart"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* COVID-19 Impact */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Pandemic's Influence
              </h2>
              <p className="text-gray-600 mb-6">
                COVID-19 accelerated the adoption of online learning, forcing
                educational institutions worldwide to embrace digital
                transformation. This unprecedented shift has forever changed how we
                think about education delivery and accessibility.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-indigo-600">•</span>
                  <span className="text-gray-600">
                    Rapid adoption of virtual classrooms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-indigo-600">•</span>
                  <span className="text-gray-600">
                    Investment in educational technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-indigo-600">•</span>
                  <span className="text-gray-600">
                    Development of new teaching methodologies
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1585859615975-5279e53717cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Online Learning During Pandemic"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}