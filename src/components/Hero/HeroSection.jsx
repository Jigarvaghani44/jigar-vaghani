// src/components/Hero/HeroSection.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, TrendingUp,
    Download,
    ChevronDown,
    Sparkles,
    Award,
    Globe,
    Crown,
    Shield,
    Check,
    Briefcase,
    Star,
    Target,
    Zap
} from 'lucide-react'
import ProfileAvatar from './ProfileAvatar'

export default function HeroSection({ profile, theme }) {
    const [textIndex, setTextIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)

    const titleVariations = [
        profile.title,
        "Executive Digital Strategist",
        "Fortune 500 Advisor",
        "Board-Level Consultant",
        "Digital Transformation Leader"
    ]

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
        setMousePosition({ x, y })
    }

    useEffect(() => {
        setIsLoaded(true)

        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % titleVariations.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const handleSaveContact = () => {
        const vcard = `BEGIN:VCARD
VERSION:4.0
FN;CHARSET=UTF-8:${profile.name}
TITLE;CHARSET=UTF-8:${profile.title}
TEL;TYPE=work,voice;VALUE=uri:tel:${profile.phone}
EMAIL;TYPE=work:${profile.email}
URL;TYPE=work:${profile.socialLinks.website}
ADR;TYPE=work;CHARSET=UTF-8:;;${profile.location};;;
NOTE;CHARSET=UTF-8:Digital Business Card
END:VCARD`

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${profile.name.replace(/\s+/g, '_')}_digital_card.vcf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const scrollToNext = () => {
        const aboutSection = document.getElementById('about')
        aboutSection?.scrollIntoView({ behavior: 'smooth' })
    }

    // Premium color palette
    const colors = {
        primary: '#D4AF37', // Gold
        secondary: '#0A2540', // Navy Blue
        accent: '#C19A6B', // Bronze
        light: '#F5F5F5',
        dark: '#1A1A1A',
        gradient: 'linear-gradient(135deg, #D4AF37 0%, #C19A6B 50%, #B8860B 100%)'
    }

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
            onMouseMove={handleMouseMove}
        >
            {/* Enhanced Background with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
                            x: mousePosition.x * 20,
                            y: mousePosition.y * 20
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                            scale: { duration: 8, repeat: Infinity },
                            opacity: { duration: 8, repeat: Infinity }
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${colors.secondary}10 0%, transparent 70%)`,
                            x: mousePosition.x * -15,
                            y: mousePosition.y * -15
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            scale: { duration: 10, repeat: Infinity, delay: 2 },
                            opacity: { duration: 10, repeat: Infinity, delay: 2 }
                        }}
                    />
                </div>

                {/* Geometric Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 120 0 L 0 0 0 120' fill='none' stroke='%23${colors.secondary.replace('#', '')}' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                        backgroundSize: '120px 120px'
                    }} />
                </div>

                {/* Floating Elements */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 8 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        style={{
                            left: `${5 + (i % 4) * 30}%`,
                            top: `${10 + Math.floor(i / 4) * 25}%`,
                            width: `${2 + i % 3}px`,
                            height: `${2 + i % 3}px`,
                            background: colors.primary,
                            opacity: 0.3,
                            borderRadius: '50%'
                        }}
                    />
                ))}

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32">
                    <div className="w-full h-full rounded-full border-[1px] border-gray-200 dark:border-gray-700" />
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-32 translate-y-32">
                    <div className="w-full h-full rounded-full border-[1px] border-gray-200 dark:border-gray-700" />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-20  mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex flex-col justify-center items-center">

                {/* Premium Header Badge */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-lg">
                        <div className="relative">
                            <Crown className="w-5 h-5 text-[#D4AF37]" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                        </div>
                        <span className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] bg-clip-text text-transparent">
                            Executive Digital Identity
                        </span>
                        <Shield className="w-5 h-5 text-[#0A2540] dark:text-[#D4AF37]" />
                    </div>
                </motion.div>

                {/* Profile Section */}
                <div className="flex flex-col items-center justify-center gap-12 lg:gap-16 w-full">

                    {/* Left Column - Profile Avatar */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 "
                    >
                        {/* Glowing Border */}
                        <div className="absolute inset-0 rounded-full">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] animate-spin-slow opacity-30 blur-xl" />
                            <div className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900" />
                        </div>

                        {/* Avatar Container */}
                        <div className="relative z-10 p-4">
                            <ProfileAvatar theme={theme} />

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-[#D4AF37]/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-dashed border-[#0A2540]/30 dark:border-[#D4AF37]/30 rounded-full"
                            />
                        </div>

                        {/* Verified Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            className="absolute -bottom-3 -right-3 z-20"
                        >
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-2xl border-2 border-white dark:border-gray-900">
                                    <Check className="w-7 h-7 text-white" />
                                </div>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="order-2  text-center t max-w-2xl"
                    >
                        {/* Name with Elegant Typography */}
                        <div className="mb-8">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold mb-4"
                            >
                                <span className="block text-[#0A2540] dark:text-white">
                                    {profile.name.split(' ')[0]}
                                </span>
                                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light mt-2">
                                    <span className="bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] bg-clip-text text-transparent bg-size-200 animate-gradient">
                                        {profile.name.split(' ').slice(1).join(' ')}
                                    </span>
                                </span>
                            </motion.h1>

                            {/* Animated Title */}
                            <div className="h-14 mb-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={textIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                                    >
                                        <Briefcase className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
                                            {titleVariations[textIndex]}
                                        </span>
                                        <Zap className="w-5 h-5 text-[#D4AF37]" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center justify-center  gap-2 text-gray-600 dark:text-gray-400"
                            >
                                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                                    <Globe className="w-5 h-5 text-[#0A2540] dark:text-[#D4AF37]" />
                                </div>
                                <span className="font-medium tracking-wider">
                                    {profile.location}
                                </span>
                            </motion.div>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className=" gap-4 mb-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSaveContact}
                                className="group relative px-8 py-4 rounded-xl overflow-hidden shadow-xl"
                            >
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#1a365d] to-[#0A2540] dark:from-[#D4AF37] dark:via-[#C19A6B] dark:to-[#D4AF37]" />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Content */}
                                <div className="relative flex items-center justify-center gap-3">
                                    <Download className="w-5 h-5 text-white group-hover:animate-bounce" />
                                    <span className="text-white font-semibold tracking-wider">
                                        Save Digital Contact
                                    </span>
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                            </motion.button>


                        </motion.div>

                    </motion.div>
                </div>


            </div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${colors.secondary.replace('#', '')}' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>
            {/* Bottom Gradient Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>

            {/* Responsive Adjustments */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    )
}