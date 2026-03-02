/* eslint-disable no-unused-vars */
// src/App.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profileData from './data/profile.json'
import HeroSection from './components/Hero/HeroSection'
import QuickActions from './components/Actions/QuickActions'
import AboutSection from './components/About/AboutSection'
import SocialLinks from './components/Social/SocialLinks'
import QRCodeSection from './components/QR/QRCodeSection'
import TrustSection from './components/Trust/TrustSection'
import Footer from './components/UI/Footer'
import ThemeToggle from './components/UI/ThemeToggle'
import LoadingShimmer from './components/UI/LoadingShimmer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState(profileData.personal)

  // Initialize theme and simulate loading
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    setTimeout(() => setIsLoading(false), 1500)
  }, [theme])

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  if (isLoading) {
    return <LoadingShimmer />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'light'
      ? 'bg-gradient-to-b from-soft-white to-gray-50 text-soft-black'
      : 'bg-gradient-to-b from-soft-black to-gray-900 text-white'
      }`}>
      {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <section id="hero" className="full-viewport flex flex-col justify-center  relative overflow-hidden">
            <HeroSection profile={profile} theme={theme} />
          </section>

          {/* Quick Actions (Sticky Bottom) */}
          {/* <QuickActions profile={profile} /> */}

          {/* About Section */}

          <AboutSection profile={profile} />


          {/* Social Links */}
          {/* <section id="social" className="min-h-screen flex items-center ">
            <SocialLinks profile={profile} />
          </section> */}



          {/* Trust Section */}
          {/* <section id="trust" className="min-h-screen flex items-center">
            <TrustSection profile={profile} />
          </section> */}
          {/* QR Code */}
          {/* <section id="qr" className="min-h-screen flex items-center">
            <QRCodeSection profile={profile} />
          </section> */}
          {/* Footer */}
          {/* <Footer /> */}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}