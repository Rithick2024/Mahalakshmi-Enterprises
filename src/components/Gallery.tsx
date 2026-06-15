import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    title: 'M-Sand Supply',
    category: 'Materials',
    image: 'https://metsand.in/wp-content/uploads/2024/10/Metsand-blog-image-2.jpg',
  },
  {
    title: 'JCB Equipment',
    category: 'Earthmovers',
    image: 'https://img.mechandlink.com/news/1753273176580-backhoe-loader-jcb-2dx-2.png',
  },
  {
    title: 'Tipper Lorry',
    category: 'Transport',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512313523/QP/BN/VU/224625935/tipper-services.jpeg',
  },
  {
    title: 'Septic Cleaning Truck',
    category: 'Sanitation',
    image: 'https://5.imimg.com/data5/IOS/Default/2023/9/344695971/KN/XA/ZH/50284905/product-jpeg.png',
  },
];

const categories = ['All', 'Earthmovers', 'Transport', 'Materials', 'Projects', 'Sanitation'];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Gallery
          </span>
          <h2 className="section-title">
            Equipment & <span className="text-primary-500">Services</span>
          </h2>
          <p className="section-subtitle">
            Browse our collection of equipment and services we help you connect with.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-secondary-400 mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <img
                src={filteredItems[selectedImage]?.image}
                alt={filteredItems[selectedImage]?.title}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {filteredItems[selectedImage]?.title}
                </h3>
                <p className="text-neutral-400">{filteredItems[selectedImage]?.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
