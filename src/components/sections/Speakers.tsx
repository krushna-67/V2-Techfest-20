import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering at TechCorp',
      bio: 'Leading teams of 100+ engineers. 10+ years in tech.',
      image: '🔵',
      topics: ['Leadership', 'Scalability', 'Team Building'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Johnson',
      role: 'AI/ML Expert & Researcher',
      bio: 'PhD in Computer Science. Published researcher in AI ethics.',
      image: '🟣',
      topics: ['Machine Learning', 'AI Ethics', 'Innovation'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO of StartupXYZ',
      bio: 'Built a unicorn startup from scratch. Mentor to 50+ founders.',
      image: '🟡',
      topics: ['Entrepreneurship', 'Fundraising', 'Growth'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Alex Rodriguez',
      role: 'Full Stack Developer & Open Source Contributor',
      bio: 'Core contributor to popular open-source projects.',
      image: '🟢',
      topics: ['Web Development', 'DevOps', 'Open Source'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emma Wilson',
      role: 'Product Manager at Global Tech Company',
      bio: 'Building products for millions of users worldwide.',
      image: '🔴',
      topics: ['Product Strategy', 'User Experience', 'Analytics'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Rajesh Kumar',
      role: 'Cloud Architect & DevOps Expert',
      bio: 'Architecting cloud solutions for fortune 500 companies.',
      image: '⚫',
      topics: ['Cloud Computing', 'Kubernetes', 'Infrastructure'],
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="speakers" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts, successful entrepreneurs, and innovative technologists 
            who are shaping the future of technology.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition transform">
                {speaker.image}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
              <p className="text-purple-600 font-semibold text-sm mb-3">{speaker.role}</p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{speaker.bio}</p>

              {/* Topics */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {speaker.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-6 border-t border-gray-300">
                <a
                  href={speaker.social.linkedin}
                  className="flex-1 py-2 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition font-semibold text-sm"
                >
                  <Linkedin size={16} className="mr-1" /> LinkedIn
                </a>
                <a
                  href={speaker.social.twitter}
                  className="flex-1 py-2 bg-sky-100 hover:bg-sky-600 text-sky-600 hover:text-white rounded-lg flex items-center justify-center transition font-semibold text-sm"
                >
                  <Twitter size={16} className="mr-1" /> Twitter
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Speakers Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">More Speakers Coming Soon</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're continuously adding more amazing speakers and industry leaders to the lineup. 
            Check back soon for the complete speaker list.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </section>
  );
}
