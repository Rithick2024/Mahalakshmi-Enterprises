import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Shield, Clock, ThumbsUp } from 'lucide-react';

const highlights = [
  { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our priority' },
  { icon: Shield, title: 'Verified Providers', desc: 'All vendors are thoroughly verified' },
  { icon: Clock, title: 'Quick Turnaround', desc: 'Get quotes within minutes' },
  { icon: ThumbsUp, title: 'Quality Assured', desc: 'Only trusted service providers' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://metsand.in/wp-content/uploads/2024/10/Metsand-blog-image-2.jpg"
                alt="Construction site with heavy equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">10+</span>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Years Experience</div>
                  <div className="text-sm text-neutral-500">Connecting customers with providers</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary-200 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="section-title text-left">
              About <span className="text-primary-500">Mahalakshmi Enterprises</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Mahalakshmi Enterprises serves as a trusted intermediary between customers and verified
              service providers. Whether you need M-Sand, a JCB, a tipper lorry, or septic tank
              cleaning, we help you find the right provider quickly and at competitive rates.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our goal is to save customers time by coordinating with trusted vendors and ensuring
              smooth, hassle-free service. We don't own the equipment or supply materials directly
              instead, we bridge the gap between you and reliable professionals.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">{item.title}</div>
                    <div className="text-xs text-neutral-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
