// src/components/About/SwipeableCard.jsx
import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export function SwipeableCard({ services }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const constraintsRef = useRef(null)
    const x = useMotionValue(0)
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 })

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length)
    }

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    }

    return (
        <div className="relative">
            {/* Card Container */}
            <div ref={constraintsRef} className="overflow-hidden rounded-3xl">
                <motion.div
                    drag="x"
                    dragConstraints={constraintsRef}
                    style={{ x: xSpring }}
                    className="flex cursor-grab active:cursor-grabbing"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-full px-4"
                        >
                            <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-black/20">
                                {/* Service Icon */}
                                <div className="text-4xl mb-6">{service.icon}</div>

                                {/* Service Title */}
                                <h4 className="text-2xl font-display font-semibold mb-4">
                                    {service.title}
                                </h4>

                                {/* Service Description */}
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Progress Indicator */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                                        {index + 1} of {services.length}
                                    </span>
                                    <div className="flex gap-2">
                                        {services.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === index
                                                    ? 'bg-navy dark:bg-gold w-6'
                                                    : 'bg-gray-300 dark:bg-gray-700'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevCard}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect shadow-lg hover:scale-110 transition-transform"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextCard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect shadow-lg hover:scale-110 transition-transform"
            >
                <ChevronRight size={20} />
            </button>

            {/* Swipe Hint */}
            <div className="text-center mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                    <span>Swipe or use arrows to explore services</span>
                </p>
            </div>
        </div>
    )
}