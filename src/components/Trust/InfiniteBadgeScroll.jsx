// src/components/Trust/InfiniteBadgeScroll.jsx
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
    Shield,
    BadgeCheck,
    Trophy,
    Star,
    Award,
    Verified,
    CheckCircle,
    Target
} from 'lucide-react'

const badges = [
    { icon: Shield, label: "Verified Professional", color: "text-blue-500" },
    { icon: BadgeCheck, label: "Certified Expert", color: "text-green-500" },
    { icon: Trophy, label: "Industry Leader", color: "text-amber-500" },
    { icon: Star, label: "Top Rated", color: "text-yellow-500" },
    { icon: Award, label: "Award Winning", color: "text-purple-500" },
    { icon: Verified, label: "Background Verified", color: "text-emerald-500" },
    { icon: CheckCircle, label: "Quality Assured", color: "text-teal-500" },
    { icon: Target, label: "Results Driven", color: "text-red-500" },
]

export default function InfiniteBadgeScroll() {
    const [scrolling, setScrolling] = useState(true)
    const containerRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (!scrolling || !scrollRef.current) return

        const scrollContainer = scrollRef.current
        let animationId
        let scrollPosition = 0
        const speed = 0.5

        const animate = () => {
            scrollPosition += speed
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0
            }
            scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [scrolling])

    const duplicatedBadges = [...badges, ...badges]

    return (
        <div className="mt-12">
            <div className="text-center mb-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                    Professional Badges
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Swipe to view credentials
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative overflow-hidden"
                onMouseEnter={() => setScrolling(false)}
                onMouseLeave={() => setScrolling(true)}
                onTouchStart={() => setScrolling(false)}
                onTouchEnd={() => setScrolling(true)}
            >
                <motion.div
                    ref={scrollRef}
                    className="flex gap-4 py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {duplicatedBadges.map((badge, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex-shrink-0"
                        >
                            <div className="glass-effect rounded-xl p-4 min-w-[180px] border border-white/10 dark:border-black/10 group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${badge.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                                        <badge.icon className={badge.color} size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {badge.label}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="animate-pulse">←</span>
                    <span>Scroll horizontally to view badges</span>
                    <span className="animate-pulse">→</span>
                </div>
            </div>
        </div>
    )
}