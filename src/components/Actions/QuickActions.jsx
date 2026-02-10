import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronUp, Clock, Shield, CheckCircle2 } from 'lucide-react';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const phoneNumber = '61450290914'; // Replace with your actual phone number
    const message = 'Hello, I have a question about your services';

    const handleClick = () => {
        const cleanedNumber = phoneNumber.replace(/\D/g, '');
        window.open(`https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const quickMessages = [
        "I'd like a consultation",
        "Schedule a meeting",
        "Ask about services"
    ];

    return (
        <>
            {/* Main WhatsApp Button */}
            <div className="fixed bottom-10 right-6 z-50">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="absolute bottom-24 right-0 w-80 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 mb-4"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Chat with Us</h3>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-600 dark:text-green-400">Online now</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Premium Features */}
                            <div className="space-y-4 mb-6">

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-800/30">
                                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Secure & private conversation</span>
                                </div>
                            </div>

                            {/* Quick Messages */}
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Quick messages:</p>
                                <div className="space-y-2">
                                    {quickMessages.map((msg, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
                                            }}
                                            className="w-full text-left p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{msg}</span>
                                                <ChevronUp className="w-4 h-4 transform rotate-90 text-gray-400 group-hover:text-green-500 transition-colors" />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Direct Message Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleClick}
                                className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start Conversation
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Button */}
                <div className="relative">
                    {/* Pulsing Ring Effect */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 opacity-20"
                    />

                    {/* Button with Premium Design */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        whileTap={{ scale: 0.9 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="relative cursor-pointer"
                    >
                        {/* Main Button Container */}
                        <div className="relative w-16 h-16 sm:w-16 sm:h-16">
                            {/* Outer Glow Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-20 blur-sm"
                            />

                            {/* Inner Gold Ring */}
                            <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-border">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
                            </div>

                            {/* WhatsApp Icon Container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Icon Background */}
                                    <div className="absolute inset-0 bg-white rounded-full scale-110" />

                                    {/* WhatsApp Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="relative text-green-600"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Hover Tooltip */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute -top-11 -left-1 transform -translate-x-1/2 whitespace-nowrap"
                            >
                                <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Chat</span>
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Responsive positioning for mobile */}
            <style jsx>{`
                @media (max-width: 640px) {
                    .whatsapp-container {
                        bottom: 4rem;
                        right: 1rem;
                    }
                    .whatsapp-expanded {
                        width: calc(100vw - 2rem);
                        right: 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default WhatsAppButton;