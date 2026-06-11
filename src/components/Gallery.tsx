import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Star, Zap, Shield, Layers, Clock } from 'lucide-react';

const foamProducts = [
  // Mattress Products
  {
    id: 1,
    name: "Araamco Wedding Foam",
    description: "Premium quality wedding foam mattress designed for ultimate comfort and durability. Perfect for newlyweds and special occasions.",
    image: "/src/assets/images/Araamco Wedding foam.webp",
    features: ["Premium Quality", "Wedding Special", "Long Lasting"],
    price: "From ₨ 18,000",
    category: "Mattresses",
    rating: 4.8
  },
  {
    id: 2,
    name: "CEAT 2-in-1 Foam",
    description: "Versatile 2-in-1 foam mattress that adapts to your sleeping preferences. Dual comfort zones for personalized support.",
    image: "/src/assets/images/Ceat-2-in-1foam.webp",
    features: ["2-in-1 Design", "Adaptive Comfort", "Premium Brand"],
    price: "From ₨ 22,000",
    category: "Mattresses",
    rating: 4.7
  },
  {
    id: 3,
    name: "Coach Spring Mattress",
    description: "High-quality spring mattress with superior support and comfort. Engineered for optimal spinal alignment and restful sleep.",
    image: "/src/assets/images/Coach spring mattress.webp",
    features: ["Spring Support", "Spinal Alignment", "Breathable"],
    price: "From ₨ 25,000",
    category: "Mattresses",
    rating: 4.9
  },
  {
    id: 4,
    name: "Repose Spring Mattress",
    description: "Luxury spring mattress designed for deep, restorative sleep. Features advanced spring technology for maximum comfort.",
    image: "/src/assets/images/Repose spring mattress.webp",
    features: ["Luxury Design", "Advanced Springs", "Restorative Sleep"],
    price: "From ₨ 28,000",
    category: "Mattresses",
    rating: 4.8
  },
  {
    id: 5,
    name: "Spine-Guard Foam",
    description: "Orthopedic foam mattress specifically designed for spine health. Provides targeted support for back pain relief.",
    image: "/src/assets/images/Spine-Guard foam.webp",
    features: ["Orthopedic Support", "Spine Health", "Pain Relief"],
    price: "From ₨ 20,000",
    category: "Mattresses",
    rating: 4.9
  },
  {
    id: 6,
    name: "Stressless Foam",
    description: "Anti-stress foam mattress that helps reduce tension and promotes relaxation. Perfect for stress relief and better sleep.",
    image: "/src/assets/images/Stresslessfoam.webp",
    features: ["Anti-Stress", "Tension Relief", "Relaxation"],
    price: "From ₨ 19,000",
    category: "Mattresses",
    rating: 4.7
  },
  {
    id: 7,
    name: "Muller Foam",
    description: "High-density Muller foam mattress with excellent durability and comfort. German engineering for superior quality.",
    image: "/src/assets/images/Muller foam.webp",
    features: ["High Density", "German Quality", "Durable"],
    price: "From ₨ 24,000",
    category: "Mattresses",
    rating: 4.8
  },
  {
    id: 8,
    name: "Coach Foam",
    description: "Premium coach foam mattress with luxurious comfort and support. Designed for those who appreciate quality sleep.",
    image: "/src/assets/images/coach foam.webp",
    features: ["Luxury Comfort", "Premium Quality", "Quality Sleep"],
    price: "From ₨ 26,000",
    category: "Mattresses",
    rating: 4.9
  },
  // Curtain Products
  {
    id: 9,
    name: "Elegant Curtain Set 1",
    description: "Beautiful curtain set with modern design and premium fabric. Perfect for living rooms and bedrooms.",
    image: "/src/assets/images/PARDA1.jpg",
    features: ["Modern Design", "Premium Fabric", "Living Room"],
    price: "From ₨ 8,000",
    category: "Curtains",
    rating: 4.6
  },
  {
    id: 10,
    name: "Luxury Curtain Set 2",
    description: "Luxurious curtain set with elegant patterns and rich colors. Adds sophistication to any room.",
    image: "/src/assets/images/PARDA2.jpg",
    features: ["Luxury Design", "Rich Colors", "Sophisticated"],
    price: "From ₨ 9,500",
    category: "Curtains",
    rating: 4.7
  },
  {
    id: 11,
    name: "Classic Curtain Set 3",
    description: "Classic curtain design with timeless appeal. Versatile style that complements any interior decor.",
    image: "/src/assets/images/PARDA3.jpg",
    features: ["Classic Style", "Timeless Appeal", "Versatile"],
    price: "From ₨ 7,500",
    category: "Curtains",
    rating: 4.5
  },
  {
    id: 12,
    name: "Contemporary Curtain Set 4",
    description: "Contemporary curtain set with clean lines and modern aesthetics. Perfect for contemporary homes.",
    image: "/src/assets/images/PARDA4.jpg",
    features: ["Contemporary", "Clean Lines", "Modern Aesthetics"],
    price: "From ₨ 8,500",
    category: "Curtains",
    rating: 4.6
  },
  {
    id: 13,
    name: "Premium Curtain Set 5",
    description: "Premium quality curtain set with intricate details and superior craftsmanship. A statement piece for your home.",
    image: "/src/assets/images/PARDA5.jpg",
    features: ["Premium Quality", "Intricate Details", "Statement Piece"],
    price: "From ₨ 10,000",
    category: "Curtains",
    rating: 4.8
  },
  {
    id: 14,
    name: "Designer Curtain Set 6",
    description: "Designer curtain set with unique patterns and premium materials. Created for discerning customers.",
    image: "/src/assets/images/PARDA6.jpg",
    features: ["Designer", "Unique Patterns", "Premium Materials"],
    price: "From ₨ 11,000",
    category: "Curtains",
    rating: 4.9
  },
  {
    id: 15,
    name: "Elegant Curtain Set 7",
    description: "Elegant curtain set with sophisticated design and quality fabric. Enhances the beauty of any space.",
    image: "/src/assets/images/PARDA7.jpg",
    features: ["Elegant", "Sophisticated", "Quality Fabric"],
    price: "From ₨ 9,000",
    category: "Curtains",
    rating: 4.7
  },
  {
    id: 16,
    name: "Modern Curtain Set 8",
    description: "Modern curtain set with contemporary style and functionality. Perfect blend of beauty and practicality.",
    image: "/src/assets/images/PARDA8.jpg",
    features: ["Modern", "Contemporary", "Functional"],
    price: "From ₨ 8,200",
    category: "Curtains",
    rating: 4.6
  },
  {
    id: 17,
    name: "Luxury Curtain Set 9",
    description: "Luxury curtain set with opulent design and premium finish. For those who demand the finest quality.",
    image: "/src/assets/images/PARDA9.jpg",
    features: ["Luxury", "Opulent Design", "Premium Finish"],
    price: "From ₨ 12,000",
    category: "Curtains",
    rating: 4.9
  },
  {
    id: 18,
    name: "Stylish Curtain Set 10",
    description: "Stylish curtain set with trendy design and vibrant colors. Adds personality to your living space.",
    image: "/src/assets/images/PARDA10.jpg",
    features: ["Stylish", "Trendy Design", "Vibrant Colors"],
    price: "From ₨ 8,800",
    category: "Curtains",
    rating: 4.7
  },
  {
    id: 19,
    name: "Premium Curtain Set 11",
    description: "Premium curtain set with exceptional quality and beautiful design. The perfect finishing touch for your home.",
    image: "/src/assets/images/PARDA11.jpg",
    features: ["Premium", "Exceptional Quality", "Beautiful Design"],
    price: "From ₨ 10,500",
    category: "Curtains",
    rating: 4.8
  }
];

const categories = ["All", "Mattresses", "Curtains"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? foamProducts 
    : foamProducts.filter(product => product.category === selectedCategory);

  const handleWhatsAppContact = (productName: string) => {
    const message = `Hi! I'm interested in ${productName}. Can you provide more details?`;
    const phoneNumber = "923334331036";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Product Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of mattresses and curtains. From comfortable foam mattresses to elegant curtain sets, each product is crafted with quality and style in mind.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg'
                  : 'bg-white/40 backdrop-blur-lg text-gray-700 border-white/30 hover:bg-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <span className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and WhatsApp Button */}
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div className="text-lg font-bold text-blue-600">
                    {product.price}
                  </div>
                  <button
                    onClick={() => handleWhatsAppContact(product.name)}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Zap, title: "Fast Delivery", desc: "Quick dispatch across Pakistan" },
            { icon: Shield, title: "Quality Assured", desc: "Premium materials guaranteed" },
            { icon: Layers, title: "Custom Cutting", desc: "Tailored to your needs" },
            { icon: Clock, title: "Long Lasting", desc: "Durable foam products" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-center">
              <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}