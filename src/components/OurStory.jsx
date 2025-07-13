import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const timeline = [
    {
      year: '2019',
      title: 'First Meeting',
      description: 'We met at a quiet coffee shop on a rainy Tuesday morning. What started as a chance encounter became the beginning of our greatest adventure.'
    },
    {
      year: '2021',
      title: 'Moving In',
      description: 'After two years of long walks and deeper conversations, we decided to create a home together. Our first apartment was small but filled with dreams.'
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'On a quiet beach at sunset, with only the sound of waves as our witness, we promised to spend our lives together.'
    },
    {
      year: '2024',
      title: 'Our Wedding',
      description: 'Today, we celebrate not just our love, but the beautiful journey that brought us here and the adventure that lies ahead.'
    }
  ];

  return (
    <section id="story" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            Our Story
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className="font-mono text-sm text-gray-500 dark:text-gray-500 mb-2">
                  {item.year}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 hidden md:block">
                {index % 2 === 0 && <div className="w-full"></div>}
              </div>
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
            <p className="font-serif text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
              "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            </p>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-500 mt-4">
              — Maya Angelou
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;