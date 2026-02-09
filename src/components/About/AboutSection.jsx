// src/components/About/AboutSection.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
    Award,
    Target,
    TrendingUp,
    Zap,
    Globe,
    Users,
    BarChart3,
    Lightbulb,
    Shield,
    Clock,
    CheckCircle2,
    ChevronRight,
    Star,
    Trophy,
    Briefcase,
    Sparkles,
    Crown,
    Gem,
    Diamond,
    LineChart,
    TargetIcon,
    Building2,
    Globe2
} from 'lucide-react'

export default function AboutSection({ profile }) {
    const [activeCategory, setActiveCategory] = useState('all')
    const [animatedStats, setAnimatedStats] = useState({})
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    // Premium color palette with modern gradient combinations
    const colors = {
        primary: '#D4AF37', // Premium Gold
        secondary: '#0F172A', // Deep Navy
        accent: '#C19A6B', // Warm Bronze
        light: '#F8F5F0', // Cream
        dark: '#1E293B', // Dark Slate
        gradient: 'linear-gradient(135deg, #D4AF37 0%, #C19A6B 50%, #F8C471 100%)',
        gradientDark: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
    }

    const expertiseCategories = [
        {
            id: 'strategy',
            label: 'Digital Strategy',
            icon: Target,
            color: '#D4AF37',
            description: 'Transformative digital roadmaps'
        },
        {
            id: 'leadership',
            label: 'Executive Leadership',
            icon: Crown,
            color: '#0F172A',
            description: 'Board-level governance'
        },
        {
            id: 'innovation',
            label: 'Innovation',
            icon: Diamond,
            color: '#C19A6B',
            description: 'Cutting-edge solutions'
        },
        {
            id: 'growth',
            label: 'Growth',
            icon: LineChart,
            color: '#D4AF37',
            description: 'Scalable revenue models'
        }
    ]

    const stats = [
        { value: 500, suffix: 'M+', label: 'Revenue Generated', icon: BarChart3 },
        { value: 50, suffix: '+', label: 'Fortune 500 Clients', icon: Building2 },
        { value: 15, suffix: '+', label: 'Years Experience', icon: Clock },
        { value: 99, suffix: '%', label: 'Client Satisfaction', icon: Star }
    ]

    // Animate counters
    useEffect(() => {
        if (isInView) {
            stats.forEach((stat, index) => {
                const targetValue = stat.value
                const duration = 2000
                const stepTime = 30
                const steps = duration / stepTime
                const increment = targetValue / steps
                let current = 0

                const timer = setInterval(() => {
                    current += increment
                    if (current >= targetValue) {
                        current = targetValue
                        clearInterval(timer)
                    }
                    setAnimatedStats(prev => ({
                        ...prev,
                        [stat.label]: Math.floor(current)
                    }))
                }, stepTime)

                return () => clearInterval(timer)
            })
        }
    }, [isInView])

    // Floating elements component
    const FloatingElement = ({ delay, size, position }) => {
        return (
            <motion.div
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 8,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: size,
                    height: size,
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
                    filter: 'blur(10px)'
                }}
            />
        )
    }

    return (
        <div
            ref={containerRef}
            className="relative py-10  overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, ${colors.primary}20 2%, transparent 0%)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <FloatingElement
                        key={i}
                        delay={i * 0.5}
                        size={Math.random() * 100 + 50}
                        position={{
                            x: Math.random() * 100,
                            y: Math.random() * 100
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    {/* Premium Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#C19A6B]/20 backdrop-blur-xl border border-[#D4AF37]/30 mb-8"
                    >
                        <Gem className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37]">
                            Elite Executive Profile
                        </span>
                        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
                        <span className="block text-white mb-4">Visionary</span>
                        <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F8C471] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                                Leadership
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#C19A6B]/20 blur-2xl"></span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl text-gray-300  mx-auto leading-relaxed"
                    >
                        Transforming organizations through strategic innovation and exceptional executive leadership
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">

                    {/* Left Column - Executive Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative Corner Accents */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-50"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] opacity-50"></div>

                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F8C471] shadow-lg">
                                    <Crown className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                        Executive Excellence
                                    </h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] rounded-full"></div>
                                </div>
                            </div>

                            {/* Biography */}
                            <div className="space-y-6 mb-8">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {profile.bio}
                                </p>
                            </div>

                            {/* Key Achievements */}
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-[#D4AF37]" />
                                    Signature Achievements
                                </h3>
                                <div className="grid gap-4">
                                    {[
                                        "Orchestrated digital transformations for 10+ Fortune 500 companies",
                                        "Delivered 200% average revenue growth across portfolio companies",
                                        "Built and scaled elite executive teams driving industry disruption",
                                        "Pioneered innovative strategies adopted as industry standards"
                                    ].map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#C19A6B]/20">
                                                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <span className="text-gray-300 flex-1">
                                                {achievement}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Accent */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block"
                        >
                            <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full border border-[#D4AF37]"></div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Stats & Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8 lg:space-y-12"
                    >
                        {/* Performance Metrics Card */}
                        <div className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#1E293B]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C19A6B]">
                                <span className="text-sm font-bold text-white">IMPACT METRICS</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C19A6B]/20 mb-4">
                                                <stat.icon className="w-6 h-6 text-[#D4AF37]" />
                                            </div>

                                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                                {animatedStats[stat.label] || '0'}
                                                <span className="text-[#D4AF37]">{stat.suffix}</span>
                                            </div>

                                            <div className="text-sm font-medium text-gray-400">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Expertise Categories Card */}
                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#C19A6B]/20">
                                    <TargetIcon className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                Core Expertise
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {expertiseCategories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 overflow-hidden group ${activeCategory === category.id
                                            ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/10 to-[#C19A6B]/10'
                                            : 'border-white/10 hover:border-[#D4AF37]/30'
                                            }`}
                                    >
                                        {/* Background Glow */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeCategory === category.id ? 'opacity-100' : ''}`}
                                            style={{ background: `radial-gradient(circle at center, ${category.color}20 0%, transparent 70%)` }}
                                        />

                                        <div className="relative z-10">
                                            <div className={`flex items-center gap-3 mb-3 ${activeCategory === category.id ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
                                                <div className={`p-2 rounded-lg ${activeCategory === category.id
                                                    ? 'bg-gradient-to-br from-[#D4AF37] to-[#C19A6B]'
                                                    : 'bg-white/5'}`}
                                                >
                                                    <category.icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-semibold text-sm sm:text-base">
                                                    {category.label}
                                                </span>
                                            </div>

                                            <p className="text-xs text-gray-400 text-left">
                                                {category.description}
                                            </p>

                                            {activeCategory === category.id && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute -top-2 -right-2"
                                                >
                                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C19A6B]"></div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Active Category Description */}
                            <AnimatePresence>
                                {activeCategory && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-6 pt-6 border-t border-white/10"
                                    >
                                        <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                                            <ChevronRight className="w-4 h-4" />
                                            <span className="font-semibold">Active Focus</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            {expertiseCategories.find(c => c.id === activeCategory)?.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Global Impact Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                        <Globe2 className="w-6 h-6 text-[#D4AF37]" />
                        <span className="text-gray-300 font-medium">
                            Global impact across <span className="text-[#D4AF37] font-bold">25+ countries</span>
                        </span>
                        <div className="flex items-center gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    )
}