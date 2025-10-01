import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xl mb-4">
              Nizami Parda & Foam Center
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium curtains, high-quality foam products, elegant sofa covers, and home furnishing solutions since 2009.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/p/Nizami-Parda-Foam-Centre-61579372240519/", color: "hover:text-blue-400" },
                { icon: Instagram, href: "https://instagram.com/nizamiparda", color: "hover:text-pink-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Products", href: "#products" },
                { name: "Gallery", href: "#gallery" },
                { name: "About Us", href: "#about" },
                { name: "Location", href: "#location" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {[
                "Premium Curtains",
                "Quality Foam",
                "Sofa Covers",
                "Protective Covers",
                "Custom Solutions"
              ].map((product) => (
                <li key={product}>
                  <span className="text-gray-300 flex items-center group cursor-pointer hover:text-purple-400 transition-colors duration-300">
                    <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Nizami Parda & Foam Center</p>
                  <p className="text-sm">Railway road</p>
                  <p className="text-sm">Gujrat, Punjab, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm cursor-pointer hover:text-green-400" onClick={() => window.open('tel:+923334331036')}>0333-4331036</p>
                  <p className="text-sm cursor-pointer hover:text-green-400" onClick={() => window.open('tel:+923167147927')}>0316-7147927</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                <p className="text-sm cursor-pointer hover:text-purple-400" onClick={() => window.open('mailto:nizamifoam@gmail.com')}>nizamifoam@gmail.com</p>
              </div>
              
              <div className="flex items-start text-gray-300">
                <Clock className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm">Friday:closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Nizami Parda & Foam Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}