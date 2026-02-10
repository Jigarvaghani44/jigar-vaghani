// src/components/Trust/TrustSection.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Shield,
    Award,
    Trophy,
    Star,
    CheckCircle,
    Verified,
    Zap,
    Sparkles,
    Globe,
    Building,
    Briefcase,
    ThumbsUp,
    Lock,
    ChevronRight,
    ChevronLeft,
    Eye,
    Medal,
    GraduationCap,
    Target,
    Clock,
    Users,
    TrendingUp,
    ShieldCheck,
    BadgeCheck,
    Heart,
    Globe2,
    Crown
} from 'lucide-react'

export default function TrustSection() {
    const [activeBadge, setActiveBadge] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const scrollRef = useRef(null)

    // Professional color palette
    const colors = {
        primary: '#1E40AF', // Blue
        secondary: '#0F766E', // Teal
        accent: '#D97706', // Amber
        highlight: '#7C3AED', // Purple
        success: '#059669', // Emerald
        premium: '#C2410C' // Orange
    }

    // Enhanced trust badges with SEO content
    const trustBadges = [
        {
            id: 1,
            title: "Google Certified Professional",
            description: "Digital Marketing & Analytics Expert certification from Google",
            icon: Verified,
            color: colors.primary,
            gradient: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
            issuedBy: "Google Cloud",
            year: "2024",
            credentialId: "GCP-DM-2024",
            verificationUrl: "https://cloud.google.com/certification",
            seoText: "Google Certified Professional in Digital Marketing and Analytics"
        },
        {
            id: 2,
            title: "AWS Solutions Architect",
            description: "Professional certification for cloud architecture and solutions",
            icon: Award,
            color: colors.secondary,
            gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
            issuedBy: "Amazon Web Services",
            year: "2023",
            credentialId: "AWS-SA-PRO-2023",
            verificationUrl: "https://aws.amazon.com/certification",
            seoText: "AWS Certified Solutions Architect Professional"
        },
        {
            id: 3,
            title: "Microsoft Partner Gold",
            description: "Gold certified partner for cloud solutions and digital transformation",
            icon: ShieldCheck,
            color: colors.accent,
            gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
            issuedBy: "Microsoft Corporation",
            year: "2024",
            credentialId: "MS-GOLD-2024",
            verificationUrl: "https://partner.microsoft.com",
            seoText: "Microsoft Gold Certified Partner for Cloud Solutions"
        },
        {
            id: 4,
            title: "Forbes Business Council",
            description: "Invitation-only community for successful business leaders",
            icon: Crown,
            color: colors.highlight,
            gradient: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
            issuedBy: "Forbes",
            year: "2023",
            credentialId: "FORBES-MEMBER-2023",
            verificationUrl: "https://councils.forbes.com",
            seoText: "Forbes Business Council Member for Executive Leadership"
        },

        {
            id: 6,
            title: "Adobe Creative Cloud Expert",
            description: "Advanced certification in digital content creation",
            icon: GraduationCap,
            color: colors.premium,
            gradient: 'linear-gradient(135deg, #C2410C 0%, #EA580C 100%)',
            issuedBy: "Adobe",
            year: "2023",
            credentialId: "ADOBE-CCE-2023",
            verificationUrl: "https://adobe.com/certification",
            seoText: "Adobe Creative Cloud Expert Certification"
        }
    ]

    // Trusted clients data with real company colors
    const trustedClients = [
        { name: "Microsoft", logo: "MS", color: "#00A4EF", industry: "Technology" },
        { name: "Google", logo: "G", color: "#4285F4", industry: "Technology" },
        { name: "Amazon", logo: "AMZN", color: "#FF9900", industry: "E-commerce" },
        { name: "Meta", logo: "FB", color: "#1877F2", industry: "Social Media" },
        { name: "Netflix", logo: "NFLX", color: "#E50914", industry: "Entertainment" },
        { name: "Salesforce", logo: "CRM", color: "#00A1E0", industry: "Software" },
        { name: "IBM", logo: "IBM", color: "#054ADA", industry: "Technology" },
        { name: "Oracle", logo: "ORCL", color: "#F80000", industry: "Software" },
        { name: "Adobe", logo: "ADBE", color: "#FF0000", industry: "Software" },
        { name: "Intel", logo: "INTC", color: "#0071C5", industry: "Semiconductors" },
        { name: "Cisco", logo: "CSCO", color: "#1BA0D7", industry: "Networking" },
        { name: "SAP", logo: "SAP", color: "#0FAAFF", industry: "Software" }
    ]

    // Trust metrics
    const trustMetrics = [
        { value: "100%", label: "Verified Credentials", description: "All certifications independently verified", icon: Shield },
        { value: "75+", label: "Global Clients", description: "Across 25+ countries worldwide", icon: Globe2 },
        { value: "24/7", label: "Support Available", description: "Executive-level support", icon: Clock },
        { value: "4.9★", label: "Client Rating", description: "Average client satisfaction", icon: Star },
        { value: "15+", label: "Years Experience", description: "Industry leadership", icon: TrendingUp },
        { value: "500+", label: "Projects Delivered", description: "Successful implementations", icon: Target }
    ]

    // Auto-rotate badges
    useEffect(() => {
        if (isHovered) return

        const interval = setInterval(() => {
            setActiveBadge(prev => (prev + 1) % trustBadges.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isHovered])

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
        }
    }

    const verifyCredential = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <section
            className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10"
            id="credentials"
            aria-label="Trust & Credentials Section"
        >
            {/* SEO Content (hidden) */}
            <div className="sr-only">
                <h1>Professional Credentials & Trust Indicators</h1>
                <p>Industry-recognized certifications and verifiable credentials from leading technology companies including Google, Microsoft, AWS, and more.</p>
                <p>Trusted by 75+ global clients including Fortune 500 companies.</p>
                <p>All certifications are independently verified and current.</p>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Mesh */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl animate-pulse delay-1000" />
                </div>

                {/* Shield Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="shield" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#shield)" className="text-gray-400" />
                    </svg>
                </div>

                {/* Floating Elements */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                        style={{
                            left: `${5 + (i % 6) * 16}%`,
                            top: `${10 + Math.floor(i / 6) * 40}%`,
                            width: '4px',
                            height: '4px',
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            opacity: 0.2,
                            borderRadius: '50%'
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg mb-8"
                    >
                        <div className="relative">
                            <BadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-blue-600/20"
                            />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            Verified Credentials
                        </span>
                        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="block text-gray-900 dark:text-white mb-4">
                            Trust & Professional
                        </span>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                                Verification
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-teal-600/20 to-purple-600/20 blur-2xl"></span>
                        </span>
                    </h1>

                    {/* SEO Rich Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-300  mx-auto leading-relaxed"
                    >
                        Industry-recognized certifications and verifiable credentials from leading technology
                        companies, demonstrating expertise and trustworthiness in digital transformation.
                    </motion.p>
                </motion.div>

                {/* Trust Metrics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-24"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                        {trustMetrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/10 to-teal-600/10">
                                            <metric.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                                                {metric.label}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                                        {metric.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 lg:mb-32"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-teal-600/10 border border-blue-200 dark:border-blue-900/30 mb-6">
                            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Industry Certifications
                            </span>
                            <Medal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Verified Professional Credentials
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400  mx-auto">
                            Certified by leading technology companies and industry organizations
                        </p>
                    </div>

                    {/* Badges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={badge.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative group"
                            >
                                {/* Card Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                                {/* Main Card */}
                                <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                    {/* Badge Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                                                style={{ background: badge.gradient }}
                                            >
                                                <badge.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <Verified className="w-4 h-4 text-green-500" />
                                                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                                                        Verified
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                    ID: {badge.credentialId}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {badge.year}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                Valid
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge Content */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {badge.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {badge.description}
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                                            <div>
                                                <div className="text-gray-500 dark:text-gray-400">Issued by</div>
                                                <div className="font-semibold text-gray-900 dark:text-white">{badge.issuedBy}</div>
                                            </div>
                                            <button
                                                onClick={() => verifyCredential(badge.verificationUrl)}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-blue-600/5 hover:from-blue-600/20 hover:to-blue-600/10 border border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold transition-all"
                                            >
                                                <Eye className="w-4 h-4" />
                                                Verify
                                            </button>
                                        </div>
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span className="text-gray-600 dark:text-gray-400">Credential Status</span>
                                            <span className="font-semibold text-green-600 dark:text-green-400">Active & Valid</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trusted Clients Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20 lg:mb-32"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-200 dark:border-purple-900/30 mb-6">
                            <Building className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                                Trusted By Global Leaders
                            </span>
                            <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Trusted Partners & Clients
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400  mx-auto">
                            Collaborating with industry leaders and innovative companies worldwide
                        </p>
                    </div>

                    {/* Client Logos Carousel */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hidden lg:block"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hidden lg:block"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
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
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="flex-shrink-0"
                                >
                                    <div className="w-56 h-32 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-6 group">
                                        <div className="text-center">
                                            <div
                                                className="text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                                                style={{ color: client.color }}
                                            >
                                                {client.logo}
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {client.name}
                                            </h4>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {client.industry}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="flex justify-center mt-8">
                            <div className="flex items-center gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Assurance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 p-8 lg:p-12 shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '60px 60px'
                        }} />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                    Verified Professional Trust
                                </h3>
                            </div>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                All credentials are independently verified and maintained. Professional
                                liability insurance and industry compliance standards ensure maximum
                                protection for client engagements.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-white/80">Client Trust Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

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
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                @media (max-width: 640px) {
                    .grid-cols-6 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .grid-cols-3 {
                        grid-template-columns: 1fr;
                    }
                }
                
                @media (max-width: 768px) {
                    .grid-cols-6 {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .grid-cols-3 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </section>
    )
}