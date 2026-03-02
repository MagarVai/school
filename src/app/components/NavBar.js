"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-blue-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <img className="w-[50] h-[50] rounded-full" src="./logo.jpg" alt="logo"/>
            <span className="font-bold text-xl tracking-tight text-white uppercase">
              Belpuspa <span className="text-amber-500">Shiskhyalaya</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:scale-[1.2] font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#footer"><button className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg">
              Contact Us
            </button></a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 text-lg font-medium">
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;