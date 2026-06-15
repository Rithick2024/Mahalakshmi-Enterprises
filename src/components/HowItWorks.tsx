import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, FileCheck, CheckCircle, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Tell Us Your Requirement',
    description: 'Share your project needs through our form, call, or WhatsApp.',
    color: 'primary',
  },
  {
    icon: Search,
    title: 'We Find Trusted Providers',
    description: 'We connect with verified service providers in our network.',
    color: 'secondary',
  },
  {
    icon: FileCheck,
    title: 'Receive Best Quotation',
    description: 'Get competitive quotes from multiple providers quickly.',
    color: 'primary',
  },
  {
    icon: CheckCircle,
    title: 'Work Completed On Time',
    description: 'Your project gets completed professionally and on schedule.',
    color: 'secondary',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white">
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
            Simple Process
          </span>
          <h2 className="section-title">
            How It <span className="text-primary-500">Works</span>
          </h2>
          <p className="section-subtitle">
            Getting construction services made easy with our streamlined 4-step process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-gradient-to-r from-primary-200 via-secondary-300 to-primary-200 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                    step.color === 'primary'
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                      : 'bg-gradient-to-br from-secondary-400 to-secondary-500'
                  } mb-6`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-primary-600">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex items-center justify-center my-4">
                    <div className="p-2 bg-neutral-200 rounded-full">
                      <ArrowDown className="w-4 h-4 text-neutral-500" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Connection dots on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-1 -translate-y-1/2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-300 to-transparent origin-left"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
