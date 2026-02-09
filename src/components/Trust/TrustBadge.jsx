// src/components/Trust/TrustBadge.jsx
import { motion } from 'framer-motion'

export default function TrustBadge({ icon: Icon, label, description, color }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
        >
            <div className="glass-effect rounded-2xl p-6 border border-white/20 dark:border-black/20 hover:border-white/40 dark:hover:border-black/40 transition-all">
                {/* Icon Container */}
                <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                        <Icon className="text-white" size={28} />
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-display font-semibold mb-2 text-gray-800 dark:text-white">
                    {label}
                </h4>

                {description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mt-4 group-hover:w-full transition-all duration-300" />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity" />
        </motion.div>
    )
}