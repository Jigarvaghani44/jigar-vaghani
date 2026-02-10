// src/components/About/AboutSection.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
    Target,
    TrendingUp,
    Users,
    BarChart3,
    Lightbulb,
    Clock,
    CheckCircle,
    ChevronRight,
    Star,
    Trophy,
    Briefcase,
    Sparkles,
    Globe,
    Award,
    Zap,
    Shield,
    Building,
    Layers,
    Rocket,
    Cpu,
    Workflow,
    Brain,
    LineChart,
    TargetIcon,
    Globe2,
    HeartHandshake,
    Users2,
    TrendingUp as TrendingUpIcon
} from 'lucide-react'

export default function AboutSection({ profile }) {
    const [activeExpertise, setActiveExpertise] = useState(0)
    const [animatedStats, setAnimatedStats] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    // Professional color palette
    const colors = {
        primary: '#1E40AF', // Professional Blue
        secondary: '#0F766E', // Teal
        accent: '#D97706', // Amber
        highlight: '#7C3AED', // Purple
        gradient: 'linear-gradient(135deg, #1E40AF 0%, #0F766E 50%, #7C3AED 100%)',
        lightBg: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)'
    }

    // SEO-rich expertise categories
    const expertiseData = [
        {
            id: 'strategy',
            title: 'Digital Transformation Strategy',
            description: 'Comprehensive digital roadmaps for enterprise growth and innovation across global markets',
            icon: Target,
            stats: ['$2.1B+ Value Created', '85% Success Rate', '50'],
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 'leadership',
            title: 'Executive Leadership & Advisory',
            description: 'Board-level governance and C-suite advisory for Fortune 500 companies and startups',
            icon: Trophy,
            stats: ['15+ Years Experience', '100+ Executives Mentored', '25+ Board Positions'],
            color: 'from-teal-600 to-teal-800'
        },
        {
            id: 'innovation',
            title: 'Technology Innovation & AI',
            description: 'Cutting-edge AI implementation and digital innovation strategies that drive competitive advantage',
            icon: Cpu,
            stats: ['40+ AI Projects', '300% ROI Average', 'Industry Recognition'],
            color: 'from-purple-600 to-purple-800'
        },
        {
            id: 'growth',
            title: 'Revenue Growth & Scaling',
            description: 'Scalable business models and growth strategies for sustainable enterprise expansion',
            icon: TrendingUpIcon,
            stats: ['500% Avg Growth', '$4.2B Generated', 'Global Markets'],
            color: 'from-amber-600 to-amber-800'
        }
    ]

    // Animated statistics with real values
    const performanceStats = [
        {
            value: 500,
            suffix: 'M+',
            label: 'Revenue Generated for Clients',
            description: 'Across 50+ enterprise engagements',
            icon: BarChart3
        },
        {
            value: 50,
            suffix: '+',
            label: 'Fortune 500 Companies Served',
            description: 'Global market leadership',
            icon: Building
        },
        {
            value: 15,
            suffix: '+',
            label: 'Years Executive Experience',
            description: 'Consistent track record',
            icon: Clock
        },
        {
            value: 99,
            suffix: '%',
            label: 'Client Satisfaction Rate',
            description: 'Repeat engagement rate',
            icon: Star
        }
    ]

    // Animation for counters
    useEffect(() => {
        if (isInView) {
            performanceStats.forEach((stat, index) => {
                let start = 0
                const end = stat.value
                const duration = 2000
                const increment = end / (duration / 16) // 60fps

                const timer = setInterval(() => {
                    start += increment
                    if (start >= end) {
                        start = end
                        clearInterval(timer)
                    }
                    setAnimatedStats(prev => ({
                        ...prev,
                        [stat.label]: Math.floor(start)
                    }))
                }, 16)

                return () => clearInterval(timer)
            })
        }
    }, [isInView])

    // Handle visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])
    const ActiveIcon = expertiseData[activeExpertise].icon;

    return (
        <section
            ref={containerRef}
            className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10"
            id="about"
            aria-label="About Section - Executive Profile"
        >
            {/* SEO Meta Content (hidden but accessible) */}
            <div className="sr-only">
                <h1>About {profile.name} - {profile.title}</h1>
                <p>{profile.bio}</p>
                <p>Executive experience: 15+ years</p>
                <p>Fortune 500 companies served: 50+</p>
                <p>Revenue generated: $500M+</p>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Mesh */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                {/* Geometric Pattern */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%231E40AF' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Floating Icons */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-200/20 dark:text-blue-500/10"
                        animate={{
                            y: [0, -40, 0],
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                        style={{
                            left: `${10 + (i % 4) * 25}%`,
                            top: `${20 + Math.floor(i / 4) * 30}%`
                        }}
                    >
                        {i % 4 === 0 && <Target className="w-8 h-8" />}
                        {i % 4 === 1 && <Trophy className="w-8 h-8" />}
                        {i % 4 === 2 && <BarChart3 className="w-8 h-8" />}
                        {i % 4 === 3 && <Globe className="w-8 h-8" />}
                    </motion.div>
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with SEO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg mb-8"
                    >
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full bg-blue-600/20"
                                />
                            </div>
                            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Executive Profile
                            </span>
                        </div>
                        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="block text-gray-900 dark:text-white mb-4">
                            Strategic Visionary &
                        </span>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                                Executive Leader
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-teal-600/20 to-purple-600/20 blur-2xl"></span>
                        </span>
                    </h1>

                    {/* SEO-rich Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-300  mx-auto leading-relaxed mb-12"
                    >
                        Transforming organizations through innovative digital strategies, executive leadership,
                        and sustainable growth initiatives across global markets.
                    </motion.p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-32">

                    {/* Left Column - Biography & Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-12"
                    >
                        {/* Biography Card */}
                        <div className="relative group">
                            {/* Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-teal-600/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                                        <Briefcase className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            Professional Journey
                                        </h2>
                                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Biography */}
                                <div className="space-y-6">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                        {profile.bio || "Seasoned executive with over 15 years of experience driving digital transformation and business growth for Fortune 500 companies. Specializing in strategic planning, innovation implementation, and revenue optimization across global markets."}
                                    </p>

                                    {/* Key Focus Areas */}
                                    <div className="pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-blue-600" />
                                            Key Focus Areas
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Digital Strategy', 'Executive Leadership', 'Revenue Growth', 'Market Expansion'].map((area, index) => (
                                                <motion.div
                                                    key={area}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                                                >
                                                    <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                                                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    </div>
                                                    <span className="font-medium text-gray-800 dark:text-gray-300 text-sm">
                                                        {area}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Trophy,
                                    title: "Industry Recognition",
                                    description: "Multiple awards for innovation and leadership excellence",
                                    color: "from-amber-500 to-amber-700"
                                },
                                {
                                    icon: Globe2,
                                    title: "Global Impact",
                                    description: "Transformations across 25+ countries worldwide",
                                    color: "from-teal-500 to-teal-700"
                                },
                                {
                                    icon: Users2,
                                    title: "Team Leadership",
                                    description: "Built and mentored high-performing executive teams",
                                    color: "from-blue-500 to-blue-700"
                                },
                                {
                                    icon: HeartHandshake,
                                    title: "Client Partnerships",
                                    description: "Long-term strategic partnerships with industry leaders",
                                    color: "from-purple-500 to-purple-700"
                                }
                            ].map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg border border-gray-200 dark:border-gray-800 group"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    <div className="relative">
                                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-10 mb-4`}>
                                            <achievement.icon className="w-6 h-6" style={{ background: `linear-gradient(135deg, ${achievement.color.split('from-')[1].split('to-')[0]}, ${achievement.color.split('to-')[1]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-12"
                    >
                        {/* Performance Stats Grid */}
                        <div className="relative">
                            {/* Stats Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Impact Metrics
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Quantifiable executive achievements
                                    </p>
                                </div>
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {performanceStats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg border border-gray-200 dark:border-gray-800"
                                    >
                                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-teal-500/10" />

                                        <div className="relative">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-800/10">
                                                    <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                                                    Metric
                                                </span>
                                            </div>

                                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                                {animatedStats[stat.label] || '0'}
                                                <span className="text-blue-600 dark:text-blue-400">{stat.suffix}</span>
                                            </div>

                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                {stat.label}
                                            </h3>

                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {stat.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Expertise Navigation */}
                        <div className="relative">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                                Core Expertise
                                <span className="block text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
                                    Interactive overview of key competencies
                                </span>
                            </h2>

                            {/* Expertise Tabs */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {expertiseData.map((expertise, index) => (
                                    <motion.button
                                        key={expertise.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveExpertise(index)}
                                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 overflow-hidden ${activeExpertise === index
                                            ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 shadow-lg'
                                            : 'border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${activeExpertise === index
                                                ? 'bg-gradient-to-br from-blue-600 to-blue-800'
                                                : 'bg-gray-100 dark:bg-gray-800'
                                                }`}
                                            >
                                                <expertise.icon className={`w-5 h-5 ${activeExpertise === index
                                                    ? 'text-white'
                                                    : 'text-gray-600 dark:text-gray-400'
                                                    }`}
                                                />
                                            </div>
                                            <span className={`text-sm font-semibold text-left ${activeExpertise === index
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {expertise.title.split(' ')[0]}
                                            </span>
                                        </div>

                                        {activeExpertise === index && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute top-2 right-2"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-teal-600"></div>
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Active Expertise Details */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeExpertise}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${expertiseData[activeExpertise].color}`}>
                                            <ActiveIcon className="w-6 h-6 text-white" />

                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {expertiseData[activeExpertise].title}
                                            </h3>
                                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        {expertiseData[activeExpertise].description}
                                    </p>


                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Global Reach Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 p-8 lg:p-12 shadow-2xl"
                >
                    {/* Background Pattern */}
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
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                    Global Executive Reach
                                </h3>
                            </div>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Transformative leadership across 25+ countries with proven success in diverse
                                markets including North America, Europe, Australia, Asia-Pacific, and emerging economies.
                            </p>
                        </div>
                        <div className="lg:w-1/3 text-center">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <Sparkles className="w-5 h-5 text-white" />
                                <span className="text-white font-semibold">
                                    Available for Global Engagements
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

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
                
                @media (max-width: 640px) {
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    .grid-cols-2 {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}