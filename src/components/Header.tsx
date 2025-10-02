import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Centered logo */}
        <div className="md:hidden flex items-center justify-center h-16 relative">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
                    src="/images/LOGO.jpg"
              alt="Nizami Parda & Foam Center Logo"
              className="w-20 h-20 rounded-lg object-cover border border-white/20"
            />
            
          </div>
          
          {/* Mobile menu button - positioned absolutely */}
          <div className="absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
                    src="/images/LOGO.jpg"
              alt="Nizami Parda & Foam Center Logo"
              className="w-20 h-20 rounded-lg object-cover border border-white/20"
            />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/20"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/20 backdrop-blur-lg rounded-lg mt-2 mb-4"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}