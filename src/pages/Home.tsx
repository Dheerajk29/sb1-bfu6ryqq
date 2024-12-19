import React from 'react';
import { ArrowRight, BookOpen, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Impact of Online Studies on Students
              </h1>
              <p className="text-xl mb-8">
                Exploring how digital learning is reshaping education and
                empowering students worldwide.
              </p>
              <a
                href="/introduction"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Growing Impact of Online Education
            </h2>
            <p className="text-xl text-gray-600">
              Key statistics that showcase the transformation of learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <BookOpen className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">73%</h3>
              <p className="text-gray-600">
                Of students reported increased engagement with online learning
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">400M+</h3>
              <p className="text-gray-600">
                Students worldwide have participated in online learning
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <Clock className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">60%</h3>
              <p className="text-gray-600">
                Time saved on average compared to traditional learning methods
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Education Through Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Online learning has revolutionized how we approach education,
                making it more accessible, flexible, and personalized than ever
                before. Discover how digital transformation is creating new
                opportunities for students worldwide.
              </p>
              <a
                href="/benefits"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
              >
                Explore the benefits
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Online Learning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}