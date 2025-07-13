import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2024-09-15T16:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-gray-100 mb-8 leading-tight">
            We're Getting Married
          </h1>
          
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
          
          <p className="font-mono text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
            September 15, 2024
          </p>
          
          <p className="font-mono text-sm text-gray-500 dark:text-gray-500">
            San Francisco, California
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-4 gap-4 max-w-md mx-auto"
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="font-mono text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100">
                  {item.value.toString().padStart(2, '0')}
                </div>
              </div>
              <p className="font-mono text-xs text-gray-500 dark:text-gray-500 mt-2 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="mt-16"
        >
          <button
            onClick={() => document.querySelector('#rsvp').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 font-mono text-sm text-gray-900 dark:text-gray-100 bg-transparent border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            RSVP
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
      </motion.div>
    </section>
  );
};

export default Hero;