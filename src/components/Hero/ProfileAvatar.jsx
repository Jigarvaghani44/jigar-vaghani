// src/components/Hero/ProfileAvatar.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import ClientPhoto from "@/assets/clientPhoto.png";
import Jekil1 from "@/assets/jekil1.png";
import Jekil2 from "@/assets/jekil2.png";

export default function ProfileAvatar({ theme }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative">
            {/* Outer Glow Ring */}
            <motion.div
                animate={{
                    scale: isHovered ? 1.05 : 1,
                    rotate: isHovered ? 360 : 0
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 rounded-full"
                style={{
                    background: theme === 'light'
                        ? 'conic-gradient(from 0deg, #0A2540, #8B7355, #0A2540)'
                        : 'conic-gradient(from 0deg, #D4AF37, #F4E4A6, #D4AF37)',
                    filter: 'blur(20px)',
                    opacity: 0.3
                }}
            />

            {/* Main Avatar Container */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-white dark:border-gray-900 overflow-hidden shadow-2xl"
            >
                {/* Profile Image */}
                <div
                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
                >
                    {/* Fallback Initials */}
                    <img
                        src={Jekil2}
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                {/* Verified Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Animated Rings */}
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        delay: ring * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 border rounded-full border-navy/20 dark:border-gold/20"
                    style={{
                        top: `-${ring * 8}px`,
                        left: `-${ring * 8}px`,
                        right: `-${ring * 8}px`,
                        bottom: `-${ring * 8}px`,
                    }}
                />
            ))}
        </div>
    )
}