import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, IndianRupee, Shuffle, CalendarCheck, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Trusted Network of Providers',
    description: 'All service providers in our network are thoroughly verified for quality and reliability.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get connected with service providers within minutes during business hours.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Pricing',
    description: 'Compare quotes from multiple providers to get the best rates for your project.',
  },
  {
    icon: Shuffle,
    title: 'Reliable Coordination',
    description: 'We handle the coordination between you and service providers for smooth execution.',
  },
  {
    icon: CalendarCheck,
    title: 'Hassle-Free Booking',
    description: 'Simple process to book services without complex procedures or paperwork.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Our dedicated team is available to assist you throughout the service process.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-white">
            Your Trusted Partner for <span className="text-secondary-400">Construction Services</span>
          </h2>
          <p className="section-subtitle text-neutral-400">
            We make finding reliable construction services simple and stress-free.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-800 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl group-hover:from-secondary-400 group-hover:to-secondary-500 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '50+', label: 'Verified Providers' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-neutral-800/30 rounded-xl border border-neutral-700"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
