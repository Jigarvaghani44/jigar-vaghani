/* eslint-disable no-unused-vars */
// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileData from './data/profile.json';
import HeroSection from './components/Hero/HeroSection';
import LoadingShimmer from './components/UI/LoadingShimmer';



// Main content with animated routes
function AnimatedRoutes({ profile, theme }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen flex flex-col justify-center"
            >
              <HeroSection profile={profile} theme={theme} />
            </motion.div>
          }
        />

        {/* Redirect any unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(profileData.personal);

  // Initialize theme and simulate loading
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setTimeout(() => setIsLoading(false), 1500);
  }, [theme]);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  if (isLoading) {
    return <LoadingShimmer />;
  }

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${theme === 'light'
          ? 'bg-gradient-to-b from-soft-white to-gray-50 text-soft-black'
          : 'bg-gradient-to-b from-soft-black to-gray-900 text-white'
          }`}
      >


        {/* Animated routes */}
        <AnimatedRoutes profile={profile} theme={theme} />
      </div>
    </Router>
  );
}