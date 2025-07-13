import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMapPin, FiClock, FiCamera } = FiIcons;

const WeddingInfo = () => {
  const details = [
    {
      icon: FiCalendar,
      title: 'Date',
      info: 'September 15, 2024',
      subInfo: 'Saturday'
    },
    {
      icon: FiClock,
      title: 'Time',
      info: '4:00 PM',
      subInfo: 'Ceremony begins'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'Garden Pavilion',
      subInfo: 'Golden Gate Park, San Francisco'
    },
    {
      icon: FiCamera,
      title: 'Attire',
      info: 'Garden Party',
      subInfo: 'Semi-formal, earth tones preferred'
    }
  ];

  return (
    <section id="details" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            Wedding Details
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors"
              >
                <SafeIcon icon={detail.icon} className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.div>
              
              <h3 className="font-mono text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                {detail.title}
              </h3>
              
              <p className="font-serif text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                {detail.info}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {detail.subInfo}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              Schedule
            </h3>
            
            <div className="space-y-4">
              {[
                { time: '3:30 PM', event: 'Guest arrival & light refreshments' },
                { time: '4:00 PM', event: 'Ceremony begins' },
                { time: '4:30 PM', event: 'Cocktail hour in the garden' },
                { time: '6:00 PM', event: 'Dinner & celebration' },
                { time: '9:00 PM', event: 'Dancing under the stars' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-500">
                    {item.time}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;