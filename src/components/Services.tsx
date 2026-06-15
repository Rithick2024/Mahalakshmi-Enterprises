import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Truck, Shovel, Droplets, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Mountain,
    title: 'M-Sand Supply',
    description: 'Connect customers with trusted M-Sand suppliers for residential and commercial construction projects.',
    features: ['Quality verified sources', 'Competitive pricing', 'Timely delivery', 'Various grades available'],
    image: 'https://metsand.in/wp-content/uploads/2024/10/Metsand-blog-image-2.jpg',
  },
  {
    icon: Shovel,
    title: 'Earthmover Rental',
    description: 'Arrange trusted operators for JCB, excavators, and backhoe loaders for your construction needs.',
    features: ['JCB', 'Excavator', 'Backhoe Loader', 'Experienced operators'],
    image: 'https://img.mechandlink.com/news/1753273176580-backhoe-loader-jcb-2dx-2.png',
  },
  {
    icon: Truck,
    title: 'Lorry & Tipper Services',
    description: 'Connect customers with transport providers for material delivery, sand transport, and construction logistics.',
    features: ['Material delivery', 'Sand transport', 'Construction logistics', 'Flexible scheduling'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512313523/QP/BN/VU/224625935/tipper-services.jpeg',
  },
  {
    icon: Droplets,
    title: 'Septic Tank Cleaning',
    description: 'Arrange professional sewage and septic tank cleaning services through trusted partners.',
    features: ['Professional cleaning', 'Eco-friendly disposal', 'Modern equipment', 'Emergency services'],
    image: 'https://5.imimg.com/data5/IOS/Default/2023/9/344695971/KN/XA/ZH/50284905/product-jpeg.png',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            What We <span className="text-primary-500">Offer</span>
          </h2>
          <p className="section-subtitle">
            We connect you with trusted service providers across various construction and infrastructure needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r"></div>
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <div className="p-3 bg-primary-500 rounded-xl">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <div className="hidden lg:flex items-start mb-4">
                    <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-500 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
