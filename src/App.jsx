import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import RSVPForm from './components/RSVPForm';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { FontSizeProvider } from './context/FontSizeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div className="w-8 h-8 border border-gray-300 dark:border-gray-600 rounded-full animate-spin border-t-transparent mb-4 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <FontSizeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <OurStory />
                    <WeddingInfo />
                    <RSVPForm />
                    <Gallery />
                    <Registry />
                    <Guestbook />
                  </>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </FontSizeProvider>
    </ThemeProvider>
  );
}

export default App;