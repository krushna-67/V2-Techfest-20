import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V2</span>
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:inline">V2 Tech Fest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</Link>
          <a href="#schedule" className="text-gray-700 hover:text-purple-600 transition font-medium">Schedule</a>
          <a href="#speakers" className="text-gray-700 hover:text-purple-600 transition font-medium">Speakers</a>
          <a href="#register" className="text-gray-700 hover:text-purple-600 transition font-medium">Register</a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
          Get Tickets
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-purple-600 font-medium py-2">Home</Link>
            <a href="#schedule" className="block text-gray-700 hover:text-purple-600 font-medium py-2">Schedule</a>
            <a href="#speakers" className="block text-gray-700 hover:text-purple-600 font-medium py-2">Speakers</a>
            <a href="#register" className="block text-gray-700 hover:text-purple-600 font-medium py-2">Register</a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold">
              Get Tickets
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
