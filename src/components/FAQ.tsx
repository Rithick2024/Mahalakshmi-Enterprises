import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you own the equipment?',
    answer: 'No, we do not own any equipment or supply materials directly. We act as a trusted intermediary, connecting customers with verified and reliable service providers who own and operate the equipment.',
  },
  {
    question: 'Can I request multiple services at once?',
    answer: 'Yes, absolutely! You can request multiple services in a single inquiry. Whether you need M-Sand, a JCB, and tipper services all together, we can coordinate with different providers to fulfill your requirements.',
  },
  {
    question: 'How soon can I get a quotation?',
    answer: 'Usually, we provide quotations within a few minutes during business hours. Our team connects with multiple providers to get you competitive rates quickly. For complex requirements, it may take up to a few hours.',
  },
  {
    question: 'Do you provide services for both residential and commercial projects?',
    answer: 'Yes, we connect customers with service providers for both residential and commercial construction projects. Whether it is a small home renovation or a large commercial development, we can help you find the right providers.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Chengalpattu, Kanchipuram, and surrounding areas in Tamil Nadu. For projects outside these areas, please contact us to check availability.',
  },
  {
    question: 'How do you ensure quality of service providers?',
    answer: 'We have a thorough verification process for all service providers in our network. We check their credentials, past work, and gather feedback from previous customers. Only providers with proven track records are included in our network.',
  },
  {
    question: 'What are your business hours?',
    answer: 'We are available Monday to Saturday from 8:00 AM to 8:00 PM. For urgent requirements, you can reach us on WhatsApp outside business hours, and we will respond as soon as possible.',
  },
  {
    question: 'Is there any charge for getting a quotation?',
    answer: 'No, getting a quotation is completely free. We do not charge anything for connecting you with service providers. You only pay for the actual services you use directly to the provider.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="section-title">
            Frequently Asked <span className="text-primary-500">Questions</span>
          </h2>
          <p className="section-subtitle">
            Got questions? We have got answers. If you do not find what you are looking for, feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${openIndex === index ? 'bg-primary-500' : 'bg-neutral-100'}`}>
                    <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-neutral-500'}`} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 pr-4">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 ml-16">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
