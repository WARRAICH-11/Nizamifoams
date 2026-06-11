import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: ["Nizami Parda & Foam Center", "Railway Road", "Gujrat, Punjab, Pakistan"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0333-4331036"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["nizamifoam@gmail.com", "Quick Response Guaranteed"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sun: 9:00 AM - 8:00 PM", "Friday: Closed"],
    color: "from-orange-500 to-red-500"
  }
];

interface ContactCardProps {
  info: typeof contactInfo[0];
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ info, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleDetailClick = (detail: string, title: string) => {
    if (title === "Call Us" && detail.startsWith('0')) {
      window.open(`tel:+92${detail.substring(1)}`);
    } else if (title === "Email Us" && detail.includes('@')) {
      window.open(`mailto:${detail}`);
    } else if (title === "Visit Our Store") {
      window.open('https://share.google/kP2ukanjZIZfAIbsj', '_blank');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
        <div className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <info.icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="mb-4 text-gray-800">{info.title}</h3>
        
        <div className="space-y-2">
          {info.details.map((detail, idx) => (
            <p 
              key={idx} 
              className={`text-gray-600 text-sm leading-relaxed ${
                (info.title === "Call Us" && detail.startsWith('0')) || 
                (info.title === "Email Us" && detail.includes('@')) || 
                (info.title === "Visit Our Store" && idx < 3)
                  ? 'cursor-pointer hover:text-blue-600 transition-colors duration-300' 
                  : ''
              }`}
              onClick={() => handleDetailClick(detail, info.title)}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Visit Our Store
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Located in the heart of the business district, our showroom displays our complete range of products. 
            Come visit us for personalized consultation and to experience our quality firsthand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={info.title} info={info} index={index} />
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="mb-6 text-gray-800">Find Us on Map</h3>
              
              {/* Map placeholder with glass morphism effect */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-80 flex items-center justify-center border border-white/30 overflow-hidden">
                {/* Mock map interface */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200" />
                  {/* Mock roads */}
                  <div className="absolute top-20 left-0 w-full h-1 bg-gray-400/30" />
                  <div className="absolute top-40 left-20 w-1 h-full bg-gray-400/30" />
                  <div className="absolute bottom-20 left-0 w-full h-1 bg-gray-400/30" />
                </div>
                
                {/* Location marker */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-red-500 to-transparent" />
                </motion.div>
                
                {/* Store name overlay */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/40">
                  <p className="text-sm text-gray-800">Nizami Parda & Foam Center</p>
                  <p className="text-xs text-gray-600">Araamco Foam Center</p>
                </div>
              </div>
              
              {/* Map actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button 
                  onClick={() => window.open('https://share.google/kP2ukanjZIZfAIbsj', '_blank')}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </button>
                <button 
                  onClick={() => window.open('tel:+923334331036', '_blank')}
                  className="flex-1 bg-white/30 backdrop-blur-lg text-gray-700 py-3 px-4 rounded-lg border border-white/40 hover:bg-white/40 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl mb-4">Ready to Transform Your Space?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Visit our showroom today to explore our complete range of products and get expert advice from our experienced team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('tel:+923334331036', '_blank')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Visit
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/923334331036?text=Hello, I would like to request a quote for your products.', '_blank')}
                  className="bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}