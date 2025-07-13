import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 h-px bg-gray-700 dark:bg-gray-600 mx-auto mb-8"></div>
          
          <p className="font-mono text-sm text-gray-400 dark:text-gray-500 mb-2">
            Thank you for being part of our story
          </p>
          
          <p className="font-mono text-xs text-gray-500 dark:text-gray-600">
            Minimal Magic – A Modern Minimalist Wedding Template by Mrake Agency
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;