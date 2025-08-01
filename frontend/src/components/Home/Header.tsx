'use client';

import { Search, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b-4 border-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-black">
            NPMChat
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#docs"
            className="font-semibold text-black hover:text-purple-400 transition-colors">
            Docs
          </a>
          <a
            href="https://github.com/ThePlator/NPMChat "
            target="_blank"
            className="font-semibold text-black hover:text-purple-400 transition-colors">
            GitHub
          </a>
          <a
            href="#features"
            className="font-semibold text-black hover:text-purple-400 transition-colors">
            Features
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
            <Search className="w-5 h-5 text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
            <Heart className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border-2 border-black rounded-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t-2 border-black">
          <nav className="flex flex-col space-y-4 pt-4">
            <a
              href="#docs"
              className="font-semibold text-black hover:text-purple-400 transition-colors">
              Docs
            </a>
            <a
              href="#github"
              className="font-semibold text-black hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a
              href="#features"
              className="font-semibold text-black hover:text-purple-400 transition-colors">
              Features
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
