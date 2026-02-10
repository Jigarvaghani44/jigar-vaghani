// src/components/Social/SocialLinks.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Linkedin,
    Twitter,
    Globe,
    Calendar,
    Mail,
    MessageSquare,
    Phone,
    MapPin,
    Share2,
    ExternalLink,
    Copy,
    Check,
    Sparkles,
    Zap,
    Users,
    MessageCircle,
    Download,
    Link as LinkIcon,
    QrCode,
    Smartphone,
    BookOpen,
    Video,
    Clock,
    Bell,
    Send
} from 'lucide-react'

// Platform data with professional colors and SEO descriptions
const platformData = {
    linkedin: {
        icon: Linkedin,
        color: '#0077B5',
        gradient: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)',
        name: 'LinkedIn',
        description: 'Professional network and industry insights',
        cta: 'Connect Professionally',
        seoText: 'Executive LinkedIn profile for professional networking and industry leadership'
    },
    twitter: {
        icon: Twitter,
        color: '#1DA1F2',
        gradient: 'linear-gradient(135deg, #1DA1F2 0%, #1E96C8 100%)',
        name: 'Twitter',
        description: 'Thought leadership and industry updates',
        cta: 'Follow for Insights',
        seoText: 'Twitter profile for executive thought leadership and digital strategy insights'
    },
    website: {
        icon: Globe,
        color: '#0F172A',
        gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        name: 'Website',
        description: 'Official portfolio and resources',
        cta: 'Visit Website',
        seoText: 'Executive website showcasing digital transformation portfolio and resources'
    },
    calendly: {
        icon: Calendar,
        color: '#006BFF',
        gradient: 'linear-gradient(135deg, #006BFF 0%, #0052CC 100%)',
        name: 'Calendly',
        description: 'Schedule a professional consultation',
        cta: 'Book Meeting',
        seoText: 'Schedule executive consultation for digital strategy and business transformation'
    },
    email: {
        icon: Mail,
        color: '#EA4335',
        gradient: 'linear-gradient(135deg, #EA4335 0%, #D44638 100%)',
        name: 'Email',
        description: 'Direct executive communication',
        cta: 'Send Email',
        seoText: 'Professional email contact for executive business inquiries'
    },
    whatsapp: {
        icon: MessageSquare,
        color: '#25D366',
        gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        name: 'WhatsApp',
        description: 'Instant messaging for quick communication',
        cta: 'Message Directly',
        seoText: 'WhatsApp business communication channel for executives'
    },
    phone: {
        icon: Phone,
        color: '#34B7F1',
        gradient: 'linear-gradient(135deg, #34B7F1 0%, #009688 100%)',
        name: 'Phone',
        description: 'Direct voice consultation',
        cta: 'Call Now',
        seoText: 'Direct phone line for executive business consultation'
    },
    location: {
        icon: MapPin,
        color: '#FF6B6B',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        name: 'Location',
        description: 'Professional base and headquarters',
        cta: 'View Location',
        seoText: 'Executive office location and professional headquarters'
    },
    zoom: {
        icon: Video,
        color: '#2D8CFF',
        gradient: 'linear-gradient(135deg, #2D8CFF 0%, #1A73E8 100%)',
        name: 'Zoom',
        description: 'Virtual meeting platform',
        cta: 'Join Meeting',
        seoText: 'Zoom virtual meeting link for executive consultations'
    }
}

export default function SocialLinks({ profile }) {
    const [copiedUrl, setCopiedUrl] = useState('')
    const [activeHover, setActiveHover] = useState(null)
    const [showQR, setShowQR] = useState(false)

    // Filtered social links based on available profile data
    const socialLinks = [
        { platform: 'linkedin', url: profile.socialLinks?.linkedin, value: profile.socialLinks?.linkedin },
        { platform: 'twitter', url: profile.socialLinks?.twitter, value: profile.socialLinks?.twitter },
        { platform: 'website', url: profile.socialLinks?.website, value: profile.socialLinks?.website },
        { platform: 'calendly', url: profile.socialLinks?.calendly, value: profile.socialLinks?.calendly },
        { platform: 'email', url: `mailto:${profile.email}`, value: profile.email },
        { platform: 'whatsapp', url: `https://wa.me/${profile.phone?.replace(/\D/g, '')}`, value: profile.phone },
        { platform: 'phone', url: `tel:${profile.phone}`, value: profile.phone },
        { platform: 'location', url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`, value: profile.location },
        { platform: 'zoom', url: profile.socialLinks?.zoom, value: profile.socialLinks?.zoom }
    ].filter(item => item.value && item.value.trim() !== '')

    // Copy to clipboard function
    const copyToClipboard = (text, platform) => {
        navigator.clipboard.writeText(text)
        setCopiedUrl(platform)
        setTimeout(() => setCopiedUrl(''), 2000)
    }

    // Share profile function
    const shareProfile = async () => {
        const shareData = {
            title: `${profile.name} - Executive Digital Card`,
            text: `Connect with ${profile.name}, ${profile.title}. Available for executive consultations and partnerships.`,
            url: window.location.href,
        }

        if (navigator.share && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                console.log('Share cancelled:', err)
            }
        } else {
            copyToClipboard(window.location.href, 'profile')
        }
    }

    // Generate QR Code
    const generateQRCode = () => {
        // In production, you might want to use a QR code generation library
        setShowQR(true)
    }

    return (
        <section
            className="relative  w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10"
            id="connect"
            aria-label="Connect Section - Professional Social Links"
        >
            {/* SEO Content (hidden) */}
            <div className="sr-only">
                <h1>Connect with {profile.name}</h1>
                <p>Professional social media links and contact information for {profile.name}, {profile.title}</p>
                <p>Available platforms: LinkedIn, Twitter, Email, Phone, and more</p>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl animate-pulse delay-1000" />

                {/* Network Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="network" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <circle cx="25" cy="25" r="1" fill="currentColor" />
                                <path d="M25,25 L50,25 M25,25 L25,50 M25,25 L0,25 M25,25 L25,0" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#network)" className="text-gray-400" />
                    </svg>
                </div>

                {/* Floating Connection Lines */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                        style={{
                            top: `${10 + (i % 6) * 15}%`,
                            opacity: 0.1
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
                            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-blue-600/20"
                            />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Professional Network
                        </span>
                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="block text-gray-900 dark:text-white mb-4">
                            Connect & Collaborate
                        </span>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                                Professional Network
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 blur-2xl"></span>
                        </span>
                    </h1>

                    {/* SEO Rich Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-300  mx-auto leading-relaxed"
                    >
                        Access executive communication channels for professional collaboration,
                        strategic partnerships, and digital transformation consultations.
                    </motion.p>
                </motion.div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {socialLinks.map((item, index) => {
                        const platform = platformData[item.platform]
                        const Icon = platform.icon

                        return (
                            <motion.div
                                key={item.platform}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                onMouseEnter={() => setActiveHover(item.platform)}
                                onMouseLeave={() => setActiveHover(null)}
                                className="relative group"
                            >
                                {/* Card Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                                {/* Main Card */}
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                                    aria-label={`Connect via ${platform.name}`}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute inset-0" style={{
                                            background: `linear-gradient(45deg, transparent 48%, ${platform.color} 50%, transparent 52%)`,
                                            backgroundSize: '10px 10px'
                                        }} />
                                    </div>

                                    {/* Platform Icon */}
                                    <div className="relative mb-6">
                                        <div className="relative w-20 h-20 mx-auto">
                                            {/* Outer Ring */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700"
                                            />

                                            {/* Icon Background */}
                                            <div
                                                className="absolute inset-2 rounded-2xl flex items-center justify-center shadow-lg"
                                                style={{ background: platform.gradient }}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>

                                            {/* Hover Effect */}
                                            <motion.div
                                                initial={false}
                                                animate={{ scale: activeHover === item.platform ? 1.2 : 1 }}
                                                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Platform Info */}
                                    <div className="relative text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {platform.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {platform.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="relative">
                                        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    {platform.cta}
                                                </span>
                                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Value Preview (on hover) */}
                                    <AnimatePresence>
                                        {activeHover === item.platform && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute inset-x-4 bottom-4"
                                            >
                                                <div className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                                                    <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                                        {item.value}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </a>

                                {/* Copy Button */}
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        copyToClipboard(item.value, item.platform)
                                    }}
                                    className="absolute top-4 right-4 p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-10"
                                    aria-label={`Copy ${platform.name} link`}
                                >
                                    {copiedUrl === item.platform ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-500" />
                                    )}
                                </motion.button>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quick Actions Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            Quick Connect Actions
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Instant access to essential contact methods and sharing options
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            icon: Mail,
                                            label: 'Copy Email',
                                            action: () => copyToClipboard(profile.email, 'email'),
                                            color: 'from-blue-500 to-blue-700'
                                        },
                                        {
                                            icon: Phone,
                                            label: 'Copy Phone',
                                            action: () => copyToClipboard(profile.phone, 'phone'),
                                            color: 'from-green-500 to-green-700'
                                        },
                                        {
                                            icon: Share2,
                                            label: 'Share Profile',
                                            action: shareProfile,
                                            color: 'from-purple-500 to-purple-700'
                                        },
                                        {
                                            icon: QrCode,
                                            label: 'QR Code',
                                            action: generateQRCode,
                                            color: 'from-amber-500 to-amber-700'
                                        }
                                    ].map((action, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={action.action}
                                            className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-all`}
                                        >
                                            <action.icon className="w-5 h-5" />
                                            <span className="font-semibold">{action.label}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-blue-900/30">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <h3 className="font-bold text-gray-900 dark:text-white">
                                            Response Time
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Email:</span>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">24 hours</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Phone:</span>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Business hours</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn:</span>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">48 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Professional Guidelines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                Professional Guidelines
                            </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Please allow 24-48 hours for responses to executive inquiries
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Available for strategic partnerships
                            </span>
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
                
                @media (max-width: 640px) {
                    .grid-cols-4 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                }
                
                @media (max-width: 480px) {
                    .grid-cols-4,
                    .grid-cols-3,
                    .grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    )
}