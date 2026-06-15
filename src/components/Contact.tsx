import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: [
      { label: 'Call', value: '96770 80928', link: 'tel:+919677080928' },
      { label: 'WhatsApp', value: '96770 80928', link: 'https://wa.me/919677080928' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    details: [{ label: '', value: 'rithickjilla@gmail.com', link: 'mailto:rithickjilla@gmail.com' }],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      {
        label: '',
        value: 'No. 20A, 6th Cross Street, Rail Nagar, Kattankulathur, Chengalpattu, Tamil Nadu - 603203',
        link: null,
      },
    ],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      { label: 'Mon - Sat', value: '8:00 AM - 8:00 PM', link: null },
      { label: 'Sunday', value: 'Closed', link: null },
    ],
  },
];

const serviceOptions = [
  'M-Sand Supply',
  'Earthmover Rental (JCB/Excavator)',
  'Lorry & Tipper Services',
  'Septic Tank Cleaning',
  'Multiple Services',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', service: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-50">
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
            Get In Touch
          </span>
          <h2 className="section-title">
            Contact <span className="text-primary-500">Us</span>
          </h2>
          <p className="section-subtitle">
            Ready to get started? Fill out the form or reach us directly via call or WhatsApp.
          </p>
        </motion.div>

        <div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <div key={i}>
                          {detail.label && (
                            <span className="text-xs text-neutral-500">{detail.label}: </span>
                          )}
                          {detail.link ? (
                            <a
                              href={detail.link}
                              target={detail.link.startsWith('http') ? '_blank' : undefined}
                              rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-neutral-700 hover:text-primary-500 transition-colors text-sm"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <span className="text-neutral-700 text-sm">{detail.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+919941441188"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919677080928?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition-all flex-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0917127173!2d80.0417!3d12.8236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f78d853d3e4b%3A0x8f3b3b3b3b3b3b3b!2sKattankulathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahalakshmi Enterprises Location"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
