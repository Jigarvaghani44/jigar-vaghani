// src/components/UI/ThemeToggle.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {theme === 'light' ? (
                <Moon className="text-gray-700" size={20} />
            ) : (
                <Sun className="text-yellow-300" size={20} />
            )}
        </motion.button>
    )
}