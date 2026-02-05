import React from 'react';
import { Lightbulb, Users, Rocket, Award } from 'lucide-react';

export default function EventOverview() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation Showcase',
      description: 'Explore cutting-edge projects and technologies from leading tech companies and student innovators.'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with industry professionals, mentors, and fellow students passionate about technology.'
    },
    {
      icon: Rocket,
      title: 'Skill Development',
      description: 'Attend workshops and masterclasses to learn in-demand skills from expert practitioners.'
    },
    {
      icon: Award,
      title: 'Competitions & Prizes',
      description: 'Compete in exciting coding challenges and win amazing prizes and recognition.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            V2 Tech Fest brings together the best of innovation, learning, and community. 
            Here's what makes it special.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-purple-50 dark:hover:from-purple-900/20 hover:to-blue-50 dark:hover:to-blue-900/20 transition border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Box */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-100 dark:from-purple-900/30 to-blue-100 dark:to-blue-900/30 rounded-2xl border border-purple-200 dark:border-purple-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Why V2 Tech Fest?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Specially designed for college students, V2 Tech Fest is more than just a conference. 
            It's a launchpad for your tech career. Whether you're a beginner or an experienced developer, 
            you'll find opportunities to learn, grow, and make meaningful connections.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>100+ workshops and talks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Direct access to tech leaders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Free goodies and refreshments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Networking with 2000+ students</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
