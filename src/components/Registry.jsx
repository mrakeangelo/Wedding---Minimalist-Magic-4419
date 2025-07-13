import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiGift, FiExternalLink } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      title: 'Our Honeymoon Fund',
      description: 'Help us create memories that will last a lifetime on our honeymoon adventure.',
      link: '#',
      icon: FiHeart
    },
    {
      title: 'Home Essentials',
      description: 'Simple, beautiful items to help us build our first home together.',
      link: '#',
      icon: FiGift
    }
  ];

  return (
    <section id="registry" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            A Few Simple Gifts
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your presence is the greatest gift of all. If you'd like to celebrate with us in another way, 
            we've selected a few meaningful options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700 group hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"
                >
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.link}
                    className="inline-flex items-center space-x-2 font-mono text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    <span>View Registry</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-gray-500 dark:text-gray-500">
            Thank you for being part of our story
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;