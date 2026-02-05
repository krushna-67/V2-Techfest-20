import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8">
            <Zap size={16} className="text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Join the Tech Revolution</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            V2 Tech Fest
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              2024
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            The ultimate gathering for college students and tech enthusiasts. 
            Discover innovations, connect with industry leaders, and level up your skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition transform hover:scale-105">
              Register Now
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">2K+</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">Students Attending</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">Industry Speakers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">3 Days</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">Packed With Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
