// src/components/Hero/HeroSection.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Download,
    ChevronRight,
    Sparkles,
    Award,
    Globe,
    Shield,
    CheckCircle,
    Briefcase,
    Star,
    Target,
    Zap,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    ExternalLink,
    BarChart,
    Users,
    Clock
} from 'lucide-react'
import ProfileAvatar from './ProfileAvatar'

export default function HeroSection({ profile, theme }) {
    const [activeMetric, setActiveMetric] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [typedText, setTypedText] = useState('')
    const [charIndex, setCharIndex] = useState(0)
    const containerRef = useRef(null)

    // SEO-optimized title variations with keywords
    const titleVariations = [
        `${profile.title} | Digital Transformation Leader`,
        "Executive Digital Strategist | Fortune 500 Advisor",
        "Board-Level Technology Consultant | Innovation Expert",
        "Digital Business Transformation Leader | C-Suite Advisor",
        "AI & Digital Innovation Strategist | Global Business Leader"
    ]

    // Professional metrics for social proof
    const metrics = [
        { icon: <Users />, value: "500+", label: "Executives Trained", color: "text-blue-500" },
        { icon: <BarChart />, value: "$4.2B+", label: "Value Generated", color: "text-emerald-500" },
        { icon: <Award />, value: "120+", label: "Projects Delivered", color: "text-amber-500" },
        { icon: <Clock />, value: "15+", label: "Years Experience", color: "text-purple-500" }
    ]

    // Typing effect for SEO-rich content
    useEffect(() => {
        const currentTitle = titleVariations[activeMetric]
        if (charIndex < currentTitle.length) {
            const timeout = setTimeout(() => {
                setTypedText(currentTitle.substring(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            }, 50)
            return () => clearTimeout(timeout)
        }
    }, [charIndex, activeMetric])

    // Rotate metrics for engagement
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % titleVariations.length)
            setCharIndex(0)
            setTypedText('')
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    // VCard download function
    const handleSaveContact = () => {
        const vcard = `BEGIN:VCARD
VERSION:4.0
FN;CHARSET=UTF-8:${profile.name}
TITLE;CHARSET=UTF-8:${profile.title}
ORG;CHARSET=UTF-8:${profile.company || "Executive Consulting"}
TEL;TYPE=work,voice;VALUE=uri:tel:${profile.phone}
EMAIL;TYPE=work:${profile.email}
URL;TYPE=work:${profile.socialLinks.website}
ADR;TYPE=work;CHARSET=UTF-8:;;${profile.location};;;
NOTE;CHARSET=UTF-8:${profile.bio || "Digital Business Card - Executive Profile"}
END:VCARD`

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${profile.name.replace(/\s+/g, '_')}_contact.vcf`
        link.setAttribute('aria-label', `Download contact information for ${profile.name}`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Analytics event (optional)
        if (window.gtag) {
            window.gtag('event', 'download_contact', {
                'event_category': 'engagement',
                'event_label': 'vcard_download'
            })
        }
    }

    // Premium color palette
    const colors = {
        primary: '#1A365D', // Deep Navy
        secondary: '#D4AF37', // Gold
        accent: '#2D3748', // Dark Gray
        highlight: '#4299E1', // Blue
        gradient: 'linear-gradient(135deg, #1A365D 0%, #2D3748 50%, #1A365D 100%)',
        lightGradient: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)'
    }

    // Smooth scroll to next section
    const scrollToNext = () => {
        const aboutSection = document.getElementById('about')
        aboutSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"
            role="banner"
            aria-label="Executive Profile - Hero Section"
        >
            {/* SEO Meta (hidden but accessible) */}
            <div className="sr-only" aria-hidden="true">
                <h1>{profile.name} - {profile.title}</h1>
                <p>{profile.bio || "Executive digital strategist and transformation leader"}</p>
                <p>Location: {profile.location}</p>
                <p>Contact: {profile.email} | {profile.phone}</p>
            </div>

            {/* Advanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Mesh Gradient */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Geometric Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a365d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}
                />

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.sin(i) * 30, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                        style={{
                            left: `${10 + (i % 4) * 20}%`,
                            top: `${15 + Math.floor(i / 4) * 30}%`,
                            width: `${3 + i % 4}px`,
                            height: `${3 + i % 4}px`,
                            background: colors.secondary,
                            opacity: 0.1,
                            borderRadius: '50%'
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12 min-h-screen flex flex-col justify-center">

                {/* Premium Header Badge with SEO */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 lg:mb-2"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full bg-amber-500/20"
                                />
                            </div>
                            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                                Certified Executive Advisor
                            </span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column - Visual & Stats */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-1"
                    >
                        {/* Profile Avatar Container */}
                        <div className="relative mb-12">

                            {/* Main Avatar */}

                            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                                <ProfileAvatar theme={theme} />

                                {/* Verified Badge */}

                            </div>
                            <div className="flex items-center justify-center mt-8">
                                <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    <span className="block text-gray-900 dark:text-white">
                                        {profile.name.split(' ')[0]}
                                    </span>

                                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-light mt-2">
                                        <span className="bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                                            {profile.name.split(' ').slice(1).join(' ')}
                                        </span>
                                    </span>
                                </h1>
                            </div>



                        </div>


                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="order-2 lg:order-2 "
                    >
                        {/* Name with SEO Priority */}
                        <div className="mb-8">


                            {/* Animated Title with Typing Effect */}
                            <div className="mb-8">
                                <div className="h-20">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeMetric}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="inline-block"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <Briefcase className="w-6 h-6 text-amber-500" />
                                                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                                                    {typedText}
                                                    <span className="inline-block w-1 h-8 ml-1 bg-amber-500 animate-pulse"></span>
                                                </h2>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Location with Icon */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={isVisible ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.7 }}
                                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                                >
                                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="font-medium">{profile.location}</span>
                                        <span className="text-sm ml-2">• Available Worldwide</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* SEO Rich Description */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8 }}
                                className="mb-10"
                            >
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    Transforming digital landscapes for Fortune 500 companies with
                                    <span className="font-semibold text-amber-600 dark:text-amber-400"> 15+ years</span> of executive leadership in
                                    <span className="font-semibold text-blue-600 dark:text-blue-400"> digital strategy</span>,
                                    <span className="font-semibold text-emerald-600 dark:text-emerald-400"> AI implementation</span>, and
                                    <span className="font-semibold text-purple-600 dark:text-purple-400"> business transformation</span>.
                                </p>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {['Digital Strategy', 'AI Innovation', 'Board Advisory', 'Digital Transformation', 'Executive Leadership'].map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ scale: 0 }}
                                            animate={isVisible ? { scale: 1 } : {}}
                                            transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 1 }}
                                className="flex flex-col sm:flex-row gap-4 mb-12"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSaveContact}
                                    className="group relative px-8 py-4 rounded-xl overflow-hidden shadow-xl flex-1"
                                    aria-label="Save digital contact card"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <div className="relative flex items-center justify-center gap-3">
                                        <Download className="w-5 h-5 text-white group-hover:animate-bounce" />
                                        <span className="text-white font-semibold tracking-wider">
                                            Save Digital Contact
                                        </span>
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToNext}
                                    className="group px-8 py-4 rounded-xl border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-center gap-3"
                                    aria-label="View more details"
                                >
                                    Explore Profile
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>

                            {/* Quick Contact Info */}
                            <div className=" grid grid-cols-1 sm:grid-cols-2 mt-12 gap-4">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    aria-label={`Email ${profile.name}`}
                                >
                                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50">
                                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                                        <div className="font-medium truncate">{profile.email}</div>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    aria-label={`Call ${profile.name}`}
                                >
                                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50">
                                        <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Phone</div>
                                        <div className="font-medium">{profile.phone}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>

            {/* Bottom Gradient Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

            {/* Responsive Styles */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                /* Responsive typography */
                @media (max-width: 640px) {
                    h1 {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    )
}