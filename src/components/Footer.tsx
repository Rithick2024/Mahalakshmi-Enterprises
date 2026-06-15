import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'M-Sand Supply',
  'Earthmover Rental',
  'Lorry & Tipper Services',
  'Septic Tank Cleaning',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-primary-500">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Mahalakshmi</span>
                <span className="text-xs text-neutral-400">Enterprises</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Connecting you with trusted construction services and equipment providers. Your reliable partner for all construction needs.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919941441188" className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block">96770 80928</span>
                    <span className="block text-sm">99414 41188</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:rithickjilla@gmail.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>rithickjilla@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-neutral-400">
                  <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span>No. 20A, 6th Cross Street,</span>
                    <span className="block">Rail Nagar, Kattankulathur,</span>
                    <span className="block">Chengalpattu, Tamil Nadu - 603203</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              2024 Mahalakshmi Enterprises. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm text-center md:text-right">
              Connecting You with Trusted Construction & Infrastructure Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
