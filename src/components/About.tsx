import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Star, label: "Premium Quality", value: "100%", description: "Quality Guaranteed" },
  { icon: Award, label: "Years Experience", value: "15+", description: "Industry Expertise" },
  { icon: Users, label: "Happy Customers", value: "5000+", description: "Satisfied Clients" },
  { icon: Clock, label: "Quick Service", value: "24/7", description: "Customer Support" }
];

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-2xl md:text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {stat.value}
        </div>
        <h4 className="mb-2 text-gray-800">{stat.label}</h4>
        <p className="text-sm text-gray-600">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Background decorative elements */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Nizami Parda & Foam Center
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in the home furnishing industry, Nizami Parda & Foam Center has established itself as a trusted name for quality and excellence. We specialize in providing premium curtains, high-grade foam products, elegant sofa covers, and protective solutions for your home.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our commitment to quality and customer satisfaction has made us the preferred choice for thousands of satisfied customers. We source our materials from reputable manufacturers and ensure that every product meets our stringent quality standards.
            </p>
            
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="mb-4 text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Premium quality materials and products",
                  "Expert installation and consultation services",
                  "Competitive pricing with value for money",
                  "Custom solutions tailored to your needs",
                  "Excellent after-sales support and warranty"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
              <img
                src="/images/shop front.png"
                alt="Nizami Parda & Foam Center storefront"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full backdrop-blur-lg border border-white/30 shadow-lg"
            >
              Trusted Since 2009
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Achievements
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}