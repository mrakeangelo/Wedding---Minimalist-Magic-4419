import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah & Mike',
      message: 'Wishing you both a lifetime of love and happiness. Can\'t wait to celebrate with you!',
      date: '2024-08-15'
    },
    {
      id: 2,
      name: 'The Johnson Family',
      message: 'So excited to witness your beautiful love story unfold. Congratulations!',
      date: '2024-08-10'
    },
    {
      id: 3,
      name: 'Emma',
      message: 'You two are perfect together. Here\'s to your forever and always!',
      date: '2024-08-08'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toISOString().split('T')[0]
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            Leave a Whisper
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Share your thoughts and well wishes for our special day
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 text-gray-900 dark:text-gray-100"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-mono text-sm text-gray-600 dark:text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              value={newMessage.message}
              onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
              rows="4"
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 text-gray-900 dark:text-gray-100 resize-none"
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center space-x-2 px-6 py-3 font-mono text-sm text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={FiHeart} className="w-4 h-4" />
            <span>Leave Message</span>
          </motion.button>
        </motion.form>

        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-mono text-sm font-medium text-gray-900 dark:text-gray-100">
                      {message.name}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {message.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {message.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;