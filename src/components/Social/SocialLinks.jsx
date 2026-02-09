// src/components/Social/SocialLinks.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Linkedin,
    Twitter,
    Globe,
    Calendar,
    Github,
    Instagram,
    Mail,
    MessageSquare,
    FileText,
    Phone,
    MapPin,
    Sparkles,
    Zap,
    Share2,
    ExternalLink,
    Copy,
    Check
} from 'lucide-react'

const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    website: Globe,
    calendly: Calendar,
    github: Github,
    instagram: Instagram,
    email: Mail,
    whatsapp: MessageSquare,
    resume: FileText,
    phone: Phone,
    location: MapPin
}

const socialData = {
    linkedin: {
        color: '#0077B5',
        gradient: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 50%, #0077B5 100%)',
        label: 'LinkedIn',
        description: 'Professional Network'
    },
    twitter: {
        color: '#1DA1F2',
        gradient: 'linear-gradient(135deg, #1DA1F2 0%, #1E96C8 50%, #1DA1F2 100%)',
        label: 'Twitter',
        description: 'Industry Insights'
    },
    website: {
        color: '#0A2540',
        gradient: 'linear-gradient(135deg, #0A2540 0%, #1a365d 50%, #0A2540 100%)',
        label: 'Website',
        description: 'Portfolio'
    },
    calendly: {
        color: '#006BFF',
        gradient: 'linear-gradient(135deg, #006BFF 0%, #0052CC 50%, #006BFF 100%)',
        label: 'Calendly',
        description: 'Schedule Meeting'
    },
    github: {
        color: '#333333',
        gradient: 'linear-gradient(135deg, #333333 0%, #666666 50%, #333333 100%)',
        label: 'GitHub',
        description: 'Code Portfolio'
    },
    instagram: {
        color: '#E4405F',
        gradient: 'linear-gradient(135deg, #E4405F 0%, #833AB4 50%, #E4405F 100%)',
        label: 'Instagram',
        description: 'Behind the Scenes'
    },
    email: {
        color: '#D44638',
        gradient: 'linear-gradient(135deg, #D44638 0%, #EA4335 50%, #D44638 100%)',
        label: 'Email',
        description: 'Direct Contact'
    },
    whatsapp: {
        color: '#25D366',
        gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #25D366 100%)',
        label: 'WhatsApp',
        description: 'Quick Chat'
    },
    resume: {
        color: '#6A5ACD',
        gradient: 'linear-gradient(135deg, #6A5ACD 0%, #483D8B 50%, #6A5ACD 100%)',
        label: 'Resume',
        description: 'Download CV'
    },
    phone: {
        color: '#34B7F1',
        gradient: 'linear-gradient(135deg, #34B7F1 0%, #009688 50%, #34B7F1 100%)',
        label: 'Phone',
        description: 'Call Directly'
    },
    location: {
        color: '#FF6B6B',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FF6B6B 100%)',
        label: 'Location',
        description: 'Based In'
    }
}

export default function SocialLinks({ profile }) {
    const [copiedUrl, setCopiedUrl] = useState('')
    const [activeCard, setActiveCard] = useState(null)

    const socialLinks = [
        { platform: 'linkedin', url: profile.socialLinks.linkedin },
        { platform: 'twitter', url: profile.socialLinks.twitter },
        { platform: 'website', url: profile.socialLinks.website },
        { platform: 'calendly', url: profile.socialLinks.calendly },
        { platform: 'github', url: profile.socialLinks.github },
        { platform: 'instagram', url: profile.socialLinks.instagram },
        { platform: 'email', url: `mailto:${profile.email}` },
        { platform: 'whatsapp', url: `https://wa.me/${profile.phone.replace(/\D/g, '')}` },

        { platform: 'phone', url: `tel:${profile.phone}` },
        { platform: 'location', url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}` }


    ].filter(item => item.url)

    const copyToClipboard = (text, platform) => {
        navigator.clipboard.writeText(text)
        setCopiedUrl(platform)
        setTimeout(() => setCopiedUrl(''), 2000)
    }

    const shareProfile = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${profile.name} - Digital Business Card`,
                    text: `Connect with ${profile.name}, ${profile.title}`,
                    url: window.location.href,
                })
            } catch (error) {
                console.log('Error sharing:', error)
            }
        } else {
            copyToClipboard(window.location.href, 'share')
        }
    }

    return (
        <div className="relative py-10 w-full  overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-[#0A2540]/10 to-transparent dark:from-[#D4AF37]/10 blur-3xl" />

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%230A2540'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }} />
                </div>

            </div>

            <div className=" z-10  mx-auto px-4 ">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 "
                >
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
                        <Share2 className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-medium tracking-wider uppercase text-[#0A2540] dark:text-[#D4AF37]">
                            Digital Presence
                        </span>
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-[#0A2540] dark:text-white">Connect</span>{' '}
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] bg-clip-text text-transparent bg-size-200 animate-gradient">
                            Seamlessly
                        </span>
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Reach out through multiple channels for collaboration, consultation, or conversation
                        </p>
                    </div>
                </motion.div>

                {/* Main Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {socialLinks.map((item, index) => {
                        const data = socialData[item.platform]
                        const Icon = socialIcons[item.platform]

                        return (
                            <motion.div
                                key={item.platform}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                onHoverStart={() => setActiveCard(item.platform)}
                                onHoverEnd={() => setActiveCard(null)}
                                className="relative group"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl group-hover:shadow-2xl transition-all duration-500" />

                                {/* Animated Border */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${data.color}30, transparent)`,
                                        backgroundSize: '200% 200%',
                                        animation: 'shimmer 2s infinite linear'
                                    }}
                                />

                                {/* Card Content */}
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block p-8 rounded-3xl overflow-hidden"
                                >
                                    {/* Icon Container */}
                                    <div className="relative mb-6">
                                        {/* Outer Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute -ins-4 rounded-full border border-gray-300 dark:border-gray-600"
                                        />

                                        {/* Main Icon */}
                                        <div
                                            className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mx-auto"
                                            style={{ background: data.gradient }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Floating Particle */}
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                            className="absolute top-0 right-0 w-3 h-3 rounded-full"
                                            style={{ background: data.color }}
                                        />
                                    </div>

                                    {/* Platform Name */}
                                    <h3 className="text-xl font-bold text-center text-[#0A2540] dark:text-white mb-2">
                                        {data.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                                        {data.description}
                                    </p>

                                    {/* Action Button */}
                                    <div className="flex items-center justify-center">
                                        <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Connect
                                                </span>
                                                <ExternalLink className="w-4 h-4 text-gray-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </a>

                                {/* Copy Button (on hover) */}
                                <AnimatePresence>
                                    {activeCard === item.platform && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                copyToClipboard(item.url, item.platform)
                                            }}
                                            className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg z-10"
                                        >
                                            {copiedUrl === item.platform ? (
                                                <Check className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-500" />
                                            )}
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quick Actions Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#0A2540] dark:text-white mb-2">
                                    Quick Actions
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    One-click access to essential contact methods
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => copyToClipboard(profile.email, 'email')}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] text-white shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="font-medium">Copy Email</span>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0A2540] to-[#1a365d] dark:from-[#D4AF37] dark:to-[#C19A6B] text-white shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="font-medium">Copy Phone</span>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={shareProfile}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-[#D4AF37] bg-transparent text-[#0A2540] dark:text-white hover:bg-[#D4AF37]/10 transition-all"
                                >
                                    <Share2 className="w-4 h-4" />
                                    <span className="font-medium">Share Profile</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Gradient Bar */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>

            </div>

            {/* Shimmer Animation */}
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
            `}</style>
        </div>
    )
}