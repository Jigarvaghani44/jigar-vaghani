// src/components/Trust/TrustSection.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Shield,
    Award,
    Trophy,
    Medal,
    Star,
    CheckCircle2,
    BadgeCheck,
    Verified,
    Zap,
    Sparkles,
    Globe,
    Building,
    Briefcase,
    ThumbsUp,
    Crown,
    Ribbon,
    Lock,
    ChevronRight,
    ChevronLeft,
    Eye
} from 'lucide-react'

export default function TrustSection() {
    const [activeBadge, setActiveBadge] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const scrollRef = useRef(null)

    // Premium color palette
    const colors = {
        gold: '#D4AF37',
        navy: '#0A2540',
        bronze: '#C19A6B',
        emerald: '#10B981',
        purple: '#8B5CF6',
        rose: '#F43F5E'
    }

    // Trust badges data
    const trustBadges = [
        {
            id: 1,
            title: "Google Certified",
            description: "Professional Digital Marketer",
            icon: Verified,
            color: colors.gold,
            gradient: 'linear-gradient(135deg, #D4AF37 0%, #C19A6B 50%, #B8860B 100%)',
            issuedBy: "Google",
            year: "2024"
        },
        {
            id: 2,
            title: "AWS Solutions Architect",
            description: "Professional Certification",
            icon: Award,
            color: colors.navy,
            gradient: 'linear-gradient(135deg, #0A2540 0%, #1a365d 50%, #0A2540 100%)',
            issuedBy: "Amazon Web Services",
            year: "2023"
        },
        {
            id: 3,
            title: "Microsoft Partner",
            description: "Gold Certified Partner",
            icon: Shield,
            color: colors.emerald,
            gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #10B981 100%)',
            issuedBy: "Microsoft",
            year: "2024"
        },
        {
            id: 4,
            title: "Forbes Council",
            description: "Business Council Member",
            icon: Crown,
            color: colors.purple,
            gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #8B5CF6 100%)',
            issuedBy: "Forbes",
            year: "2023"
        },
        {
            id: 5,
            title: "HubSpot Certified",
            description: "Marketing Software Expert",
            icon: Medal,
            color: colors.rose,
            gradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 50%, #F43F5E 100%)',
            issuedBy: "HubSpot",
            year: "2024"
        },
        {
            id: 6,
            title: "Adobe Certified",
            description: "Creative Cloud Expert",
            icon: Ribbon,
            color: colors.bronze,
            gradient: 'linear-gradient(135deg, #C19A6B 0%, #B8860B 50%, #C19A6B 100%)',
            issuedBy: "Adobe",
            year: "2023"
        }
    ]

    // Client logos data
    const trustedClients = [
        { name: "Microsoft", logo: "M", color: "#00A4EF" },
        { name: "Google", logo: "G", color: "#4285F4" },
        { name: "Amazon", logo: "A", color: "#FF9900" },
        { name: "Apple", logo: "", color: "#000000" },
        { name: "Meta", logo: "f", color: "#1877F2" },
        { name: "Netflix", logo: "N", color: "#E50914" },
        { name: "Airbnb", logo: "⛺", color: "#FF5A5F" },
        { name: "Uber", logo: "U", color: "#000000" },
        { name: "Spotify", logo: "♪", color: "#1DB954" },
        { name: "Tesla", logo: "T", color: "#E82127" },
        { name: "Salesforce", logo: "SF", color: "#00A1E0" },
        { name: "IBM", logo: "IBM", color: "#054ADA" }
    ]

    // Auto-rotate badges
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setActiveBadge(prev => (prev + 1) % trustBadges.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [isPaused])

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    }

    return (
        <div className="relative py-10  overflow-hidden ">

            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#0A2540]/10 to-transparent dark:from-[#D4AF37]/10 blur-3xl"
                />

                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circles' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='0.5' fill='%230A2540'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circles)'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>
            </div>

            <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
                        <BadgeCheck className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-medium tracking-wider uppercase text-[#0A2540] dark:text-[#D4AF37]">
                            Trust & Credentials
                        </span>
                        <Verified className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-[#0A2540] dark:text-white">Verified</span>{' '}
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] bg-clip-text text-transparent bg-size-200 animate-gradient">
                            Excellence
                        </span>
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Industry-recognized credentials and trusted by leading global brands
                        </p>
                    </div>
                </motion.div>

                {/* Trust Badges Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
                            <Award className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-medium tracking-wider uppercase text-[#0A2540] dark:text-[#D4AF37]">
                                Certifications & Awards
                            </span>
                            <Trophy className="w-4 h-4 text-[#D4AF37]" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540] dark:text-white mb-4">
                            Industry Recognized
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Certified by top technology companies and industry leaders
                        </p>
                    </div>

                    {/* Badges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={badge.id}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                className="relative group"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl group-hover:shadow-2xl transition-all duration-500" />

                                {/* Animated Border */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${badge.color}30, transparent)`,
                                        backgroundSize: '200% 200%',
                                        animation: 'shimmer 2s infinite linear'
                                    }}
                                />

                                {/* Card Content */}
                                <div className="relative p-8 rounded-3xl">
                                    {/* Badge Icon */}
                                    <div className="relative mb-6">
                                        {/* Outer Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute -inset-4 rounded-full border border-gray-300 dark:border-gray-600 opacity-50"
                                        />

                                        {/* Main Badge */}
                                        <div
                                            className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mx-auto"
                                            style={{ background: badge.gradient }}
                                        >
                                            <badge.icon className="w-10 h-10 text-white" />

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Verification Check */}
                                        <div className="absolute -top-2 -right-2">
                                            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-green-500 flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge Content */}
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-[#0A2540] dark:text-white mb-2">
                                            {badge.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {badge.description}
                                        </p>

                                        {/* Badge Details */}
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="text-left">
                                                <div className="font-medium text-gray-700 dark:text-gray-300">
                                                    Issued by
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-400">
                                                    {badge.issuedBy}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium text-gray-700 dark:text-gray-300">
                                                    Valid until
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-400">
                                                    {badge.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trusted by Clients Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
                            <Building className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-medium tracking-wider uppercase text-[#0A2540] dark:text-[#D4AF37]">
                                Trusted By
                            </span>
                            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540] dark:text-white mb-4">
                            Trusted by Global Leaders
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Collaborating with industry pioneers and innovative companies worldwide
                        </p>
                    </div>

                    {/* Client Logos Grid */}
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hidden md:block"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#0A2540] dark:text-[#D4AF37]" />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hidden md:block"
                        >
                            <ChevronRight className="w-5 h-5 text-[#0A2540] dark:text-[#D4AF37]" />
                        </button>

                        {/* Client Logos Container */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto scrollbar-hide gap-8 py-4 px-2"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {trustedClients.map((client, index) => (
                                <motion.div
                                    key={client.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="group flex-shrink-0"
                                >
                                    <div className="relative">
                                        {/* Client Card */}
                                        <div className="w-48 h-48 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-6">
                                            {/* Client Logo */}
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300"
                                                style={{
                                                    background: `${client.color}15`,
                                                    color: client.color,
                                                    border: `2px solid ${client.color}30`
                                                }}
                                            >
                                                {client.logo}
                                            </div>

                                            {/* Client Name */}
                                            <h4 className="text-lg font-semibold text-[#0A2540] dark:text-white text-center">
                                                {client.name}
                                            </h4>

                                            {/* Trust Indicator */}
                                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ThumbsUp className="w-4 h-4 text-[#D4AF37]" />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    Trusted Partner
                                                </span>
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Trust Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 mb-20 md:mt-32"
                >
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: "100%", label: "Verified Credentials", icon: CheckCircle2, color: colors.emerald },
                                { value: "50+", label: "Global Clients", icon: Globe, color: colors.gold },
                                { value: "24/7", label: "Support Available", icon: Shield, color: colors.navy },
                                { value: "5.0", label: "Client Rating", icon: Star, color: colors.purple }
                            ].map((metric, index) => (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 mb-4">
                                        <div className="p-3 rounded-full" style={{ background: `${metric.color}20` }}>
                                            <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-[#0A2540] dark:text-white mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>


            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 hidden lg:block">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="p-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <Lock className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
            </div>

            <div className="absolute bottom-20 left-10 hidden lg:block">
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="p-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <Eye className="w-8 h-8 text-[#0A2540] dark:text-[#D4AF37]" />
                </motion.div>
            </div>
            {/* Bottom Gradient Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
            {/* Responsive Styles */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}