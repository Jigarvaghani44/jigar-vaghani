// src/components/UI/Footer.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Heart,
    MapPin,
    Building2,
    Globe,
    Shield,
    Award,
    Sparkles,
    Leaf,
    Coffee,
    Crown,
    Star,
    ChevronUp,
    Copyright,
    Phone,
    Mail,
    Clock,
    Building
} from 'lucide-react'

export default function Footer() {
    const [year] = useState(new Date().getFullYear())
    const [email] = useState('contact@prestigedigital.com.au')
    const [phone] = useState('+61 2 8888 8888')

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800  dark:from-blue-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden">
            {/* Australian Building Skyline Background */}
            <div className="absolute bottom-0 left-0 right-0 h-20">




                {/* Stars in the sky */}
                <div className="absolute top-4 left-0 right-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-white"
                            style={{
                                left: `${5 + (i * 5)}%`,
                                top: `${Math.random() * 40}%`,
                            }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-12 pb-32 md:pb-40 lg:pb-48">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                    >
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C19A6B]">
                                    <Crown className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Prestige Digital Group</h3>
                                    <p className="text-sm text-gray-400">Australia's Premium Digital Partner</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Crafting exceptional digital experiences from the heart of Australia.
                                Transforming businesses with innovative digital solutions.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                <span>Sydney, Melbourne, Brisbane, Perth</span>
                            </div>
                        </div>



                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold flex items-center gap-2">
                                <Phone className="w-5 h-5 text-[#D4AF37]" />
                                Contact Us
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gray-800">
                                        <Phone className="w-4 h-4 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <a href={`tel:${phone}`} className="text-white hover:text-[#D4AF37] transition-colors">
                                            {phone}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gray-800">
                                        <Mail className="w-4 h-4 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a href={`mailto:${email}`} className="text-white hover:text-[#D4AF37] transition-colors">
                                            {email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gray-800">
                                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Hours</p>
                                        <p className="text-white">Mon-Fri: 9AM-6PM AEST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Badge */}
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1a365d] border border-[#D4AF37]/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <Award className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="font-bold">Premium Certified</span>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    ISO 27001 Certified • Australian Digital Excellence Award 2024
                                </p>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span className="text-xs text-gray-400">100% Secure & Compliant</span>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300">Subscribe for updates</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                                    />
                                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] text-white font-medium text-sm hover:opacity-90 transition-opacity">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pt-8 border-t border-gray-800"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                    <Copyright className="w-4 h-4" />
                                    <span className="text-sm">
                                        {year} Prestige Digital Group. All rights reserved.
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span>ABN: 12 345 678 901</span>
                                    <span>•</span>
                                    <span>ACN: 123 456 789</span>
                                    <span>•</span>
                                    <span>ISO 27001:2022 Certified</span>
                                </div>
                            </div>

                            {/* Made With Love */}
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Heart className="w-4 h-4 text-red-400" />
                                </motion.div>
                                <span>Made with passion in</span>
                                <div className="flex items-center gap-1">
                                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                                    <span className="font-medium">Australia</span>
                                </div>
                                <Coffee className="w-4 h-4 text-amber-500 ml-2" />
                            </div>

                            {/* Back to Top */}
                            <motion.button
                                whileHover={{ y: -5 }}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-[#D4AF37] transition-colors"
                            >
                                <ChevronUp className="w-4 h-4" />
                                <span className="text-sm">Back to Top</span>
                            </motion.button>
                        </div>


                    </motion.div>
                </div>
            </div>

            {/* Animated Elements */}

            <div className="absolute top-8 left-8 hidden lg:block">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="p-3 rounded-xl bg-gradient-to-br from-[#0A2540]/80 to-[#1a365d]/80 backdrop-blur-sm border border-[#D4AF37]/20"
                >
                    <Leaf className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
            </div>

            <div className="absolute top-8 right-8 hidden lg:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-[#0A2540]/80 to-[#1a365d]/80 backdrop-blur-sm border border-[#D4AF37]/20"
                >
                    <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                .clip-path-sail-left {
                    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
                }
                .clip-path-sail-center {
                    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
                }
                .clip-path-sail-right {
                    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
                }
                @keyframes waterShimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </footer>
    )
}