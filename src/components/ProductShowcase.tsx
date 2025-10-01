import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    title: "Premium Mattresses",
    description: "High-quality foam and spring mattresses for ultimate comfort and support. From wedding foams to orthopedic support, we have the perfect mattress for every need.",
    image: "/src/assets/images/Araamco Wedding foam.webp",
    features: ["Multiple brands", "Orthopedic support", "Wedding specials", "Premium quality"]
  },
  {
    id: 2,
    title: "Elegant Curtains & Drapes",
    description: "Beautiful curtain sets in various designs, colors, and fabrics. From classic to contemporary styles, transform your space with our premium curtains.",
    image: "/src/assets/images/PARDA1.jpg",
    features: ["Modern designs", "Premium fabrics", "Custom sizes", "Various styles"]
  },
  {
    id: 3,
    title: "Specialty Foam Products",
    description: "Specialized foam products including CEAT, Muller, and Stressless brands. Engineered for specific comfort needs and long-lasting durability.",
    image: "/src/assets/images/Spine-Guard foam.webp",
    features: ["Brand variety", "Specialized support", "Durable materials", "Health-focused"]
  },
  {
    id: 4,
    title: "Luxury Curtain Collections",
    description: "Exclusive curtain collections with intricate designs and premium finishes. Perfect for those who demand the finest quality and style.",
    image: "/src/assets/images/PARDA9.jpg",
    features: ["Luxury designs", "Premium finish", "Exclusive collections", "Statement pieces"]
  }
];

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative overflow-hidden rounded-xl mb-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h3 className="mb-3 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
              {feature}
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Product Range
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive collection of premium mattresses and elegant curtains. 
            From wedding foams to luxury curtain sets, we have everything you need to transform your home with comfort and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}