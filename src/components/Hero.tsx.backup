import React from 'react';
import { motion } from 'motion/react';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400/30 to-cyan-400/30 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-4rem)]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img
                  src="/images/LOGO.jpg"
                  alt="Nizami Parda & Foam Center Logo"
                  className="w-54 h-54 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-3xl object-cover border-4 border-white/30 shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl scale-110 -z-10" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
            {/* Glass morphism card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
              >
                Nizami Parda & Foam Center
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed"
              >
                Your premium destination for luxury curtains, high-quality foams, elegant sofa sheets, and protective covers. Transform your space with our exquisite collection.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button 
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.92 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  onClick={() => {
                    const element = document.querySelector('#products');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-lg font-medium"
                >
                  Explore Products
                </motion.button>
                <motion.button 
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.92 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  onClick={() => {
                    const element = document.querySelector('#location');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/30 backdrop-blur-lg text-gray-700 px-8 py-4 rounded-xl border border-white/40 hover:bg-white/40 transition-all duration-300 text-lg font-medium"
                >
                  Visit Our Store
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Floating Badges - Positioned within viewport */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-4 left-4 md:top-6 md:left-6"
            >
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-full backdrop-blur-lg border border-white/40 shadow-xl text-xs md:text-sm font-medium"
              >
                Premium Quality
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
            >
              <motion.div
                animate={{
                  y: [8, -8, 8],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full backdrop-blur-lg border border-white/40 shadow-xl text-xs md:text-sm font-medium"
              >
                Expert Service
              </motion.div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}