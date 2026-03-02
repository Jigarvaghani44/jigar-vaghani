// src/components/Financial/FinancialSection.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Landmark,
    Shield,
    Sparkles,
    CheckCircle,
    AlertCircle,
    Clock,
    BadgeCheck,
    ExternalLink,
    ChevronRight,
    Briefcase,
    TrendingUp,
    Lock,
    Eye
} from 'lucide-react'

export default function FinancialSection({ profile, theme }) {
    const [isVisible, setIsVisible] = useState(false)
    const [expandedCard, setExpandedCard] = useState(null)
    const containerRef = useRef(null)

    // Financial credentials data
    const financialItems = [
        {
            id: 'trustAccount',
            icon: <Landmark className="w-6 h-6" />,
            title: 'Trust Account Certification',
            issuer: 'NSW Fair Trading',
            number: 'TA-98765',
            status: 'authorised',
            authorisedSignatories: ['Sarah Chen', 'Michael Wong'],
            color: 'from-emerald-500 to-teal-600',
            bgLight: 'bg-emerald-50 dark:bg-emerald-900/20',
            textLight: 'text-emerald-700 dark:text-emerald-300',
            details: 'Authorised signatory for real estate trust accounts. All transactions are audited and compliant with NSW Property and Stock Agents Act.',
            verificationLink: 'https://www.fairtrading.nsw.gov.au/'
        },
        {
            id: 'policeCheck',
            icon: <Shield className="w-6 h-6" />,
            title: 'National Police Check',
            issuer: 'AFP / National Police Checking Service',
            date: '2025-03-10',
            reference: 'NPC-2025-038472',
            status: 'clear',
            color: 'from-blue-500 to-indigo-600',
            bgLight: 'bg-blue-50 dark:bg-blue-900/20',
            textLight: 'text-blue-700 dark:text-blue-300',
            details: 'Nationally coordinated criminal history check – no disclosable outcomes. Updated annually.',
            verificationLink: 'https://www.afp.gov.au/'
        },
        {
            id: 'cdrConnector',
            icon: <Sparkles className="w-6 h-6" />,
            title: 'CDR Connector (Consumer Data Right)',
            issuer: 'Accredited Data Recipient',
            status: 'active',
            capabilities: ['Pre‑approval verification', 'Income assessment', 'Deposit confirmation'],
            color: 'from-purple-500 to-pink-600',
            bgLight: 'bg-purple-50 dark:bg-purple-900/20',
            textLight: 'text-purple-700 dark:text-purple-300',
            details: 'Securely and with your consent, verify a buyer’s financial capacity in real time through open banking. No paper statements needed.',
            consentRequired: true
        },
        {
            id: 'professionalIndemnity',
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Professional Indemnity Insurance',
            issuer: 'Insurance Australia Group',
            policyNumber: 'PI-IND-987654',
            coverage: '$2 million',
            expiry: '2026-06-30',
            status: 'active',
            color: 'from-amber-500 to-orange-600',
            bgLight: 'bg-amber-50 dark:bg-amber-900/20',
            textLight: 'text-amber-700 dark:text-amber-300',
            details: 'Comprehensive professional indemnity insurance covering all real estate activities.',
            verificationLink: '#'
        },
        {
            id: 'financialCapacity',
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Client Financial Capacity (Demo)',
            issuer: 'Verified Pre‑approvals',
            stats: { preApproved: 12, avgLoan: '$850k', totalAvailable: '$10.2M' },
            status: 'available',
            color: 'from-rose-500 to-red-600',
            bgLight: 'bg-rose-50 dark:bg-rose-900/20',
            textLight: 'text-rose-700 dark:text-rose-300',
            details: 'Current pool of verified, pre‑approved buyers ready to transact. Updated weekly.',
            privacyNote: 'Aggregated anonymised data – individual consent required for sharing.'
        }
    ]

    const colors = {
        primary: '#0A1A3A',
        secondary: '#E2725B',
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-AU', options)
    }

    const StatusBadge = ({ status }) => {
        const config = {
            authorised: { icon: CheckCircle, text: 'Authorised', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/40' },
            clear: { icon: CheckCircle, text: 'Clear', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/40' },
            active: { icon: CheckCircle, text: 'Active', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
            available: { icon: CheckCircle, text: 'Available', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/40' },
            pending: { icon: AlertCircle, text: 'Pending', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/40' },
            expired: { icon: AlertCircle, text: 'Expired', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/40' }
        }
        const { icon: Icon, text, color, bg } = config[status] || config.active
        return (
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${bg} ${color}`}>
                <Icon className="w-3.5 h-3.5" />
                {text}
            </div>
        )
    }

    return (
        <section
            ref={containerRef}
            id="financial"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-navy-900/30 py-24"
            aria-label="Financial Integrity & Capacity"
        >
            {/* Hidden SEO */}
            <div className="sr-only" aria-hidden="true">
                <h2>Financial Integrity & Capacity – {profile.name}</h2>
                <p>Trust account certification, national police check, CDR connector for open banking, professional indemnity insurance, and verified buyer capacity.</p>
            </div>

            {/* Background Effects (same as previous) */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            `radial-gradient(circle at 20% 50%, ${colors.secondary}15 0%, transparent 50%)`,
                            `radial-gradient(circle at 80% 20%, #4299E115 0%, transparent 50%)`,
                            `radial-gradient(circle at 20% 50%, ${colors.secondary}15 0%, transparent 50%)`
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230A1A3A' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}
                />
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: 12 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8
                        }}
                        style={{
                            left: `${15 + (i % 3) * 25}%`,
                            top: `${20 + Math.floor(i / 3) * 40}%`,
                            width: `${2 + i % 3}px`,
                            height: `${2 + i % 3}px`,
                            background: colors.secondary,
                            opacity: 0.1,
                            borderRadius: '50%'
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Premium Header Badge */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 shadow-lg">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Landmark className="w-5 h-5 text-terracotta-500" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full bg-terracotta-500/20"
                                />
                            </div>
                            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-terracotta-600 bg-clip-text text-transparent">
                                Financial Integrity & Capacity
                            </span>
                        </div>
                        <Lock className="w-5 h-5 text-emerald-500" />
                    </div>
                </motion.div>

                {/* Title & Subtitle */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white mb-4">
                        Financial Trust & Buyer Capacity
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Verified financial credentials and innovative tools that give you confidence 
                        in every transaction.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {financialItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ y: 30, opacity: 0 }}
                            animate={isVisible ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`group relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 ${
                                expandedCard === item.id ? 'ring-2 ring-terracotta-500' : ''
                            }`}
                            onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                        >
                            {/* Gradient top bar */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />

                            <div className="p-6">
                                {/* Header: Icon + Status */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${item.bgLight} ${item.textLight} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <StatusBadge status={item.status} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-1">
                                    {item.title}
                                </h3>

                                {/* Issuer */}
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {item.issuer}
                                </p>

                                {/* Key details */}
                                <div className="space-y-2 text-sm">
                                    {item.number && (
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <span className="font-medium">Ref:</span>
                                            <span className="font-mono">{item.number}</span>
                                        </div>
                                    )}
                                    {item.authorisedSignatories && (
                                        <div className="text-gray-700 dark:text-gray-300">
                                            <span className="font-medium">Signatories:</span>
                                            <ul className="list-disc list-inside mt-1">
                                                {item.authorisedSignatories.map((name, i) => (
                                                    <li key={i}>{name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {item.date && (
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                            <span>Checked {formatDate(item.date)}</span>
                                        </div>
                                    )}
                                    {item.expiry && (
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span>Expires {formatDate(item.expiry)}</span>
                                        </div>
                                    )}
                                    {item.coverage && (
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <Briefcase className="w-4 h-4 text-amber-500" />
                                            <span>Coverage: {item.coverage}</span>
                                        </div>
                                    )}
                                    {item.capabilities && (
                                        <div className="text-gray-700 dark:text-gray-300">
                                            <span className="font-medium">Capabilities:</span>
                                            <ul className="list-disc list-inside mt-1">
                                                {item.capabilities.map((cap, i) => (
                                                    <li key={i}>{cap}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {item.stats && (
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg text-center">
                                                <div className="text-xs text-gray-500">Pre‑approved</div>
                                                <div className="font-bold text-lg">{item.stats.preApproved}</div>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg text-center">
                                                <div className="text-xs text-gray-500">Avg Loan</div>
                                                <div className="font-bold text-lg">{item.stats.avgLoan}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Expandable details */}
                                <AnimatePresence>
                                    {expandedCard === item.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                                    {item.details}
                                                </p>
                                                {item.privacyNote && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 flex items-center gap-1">
                                                        <Eye className="w-3 h-3" /> {item.privacyNote}
                                                    </p>
                                                )}
                                                {item.consentRequired && (
                                                    <p className="text-xs text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1">
                                                        <Lock className="w-3 h-3" /> Requires client consent
                                                    </p>
                                                )}
                                                {item.verificationLink && (
                                                    <a
                                                        href={item.verificationLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-terracotta-600 dark:text-terracotta-400 text-sm hover:underline"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Verify <ExternalLink className="w-3.5 h-3.5" />
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Expand/collapse indicator */}
                                <div className="mt-4 flex items-center justify-end text-terracotta-500">
                                    <ChevronRight
                                        className={`w-5 h-5 transition-transform ${
                                            expandedCard === item.id ? 'rotate-90' : ''
                                        }`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer note about privacy & consent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 dark:bg-navy-900/50 text-navy-600 dark:text-navy-300 text-sm">
                        <Lock className="w-4 h-4" />
                        <span>All financial data is handled in accordance with Australian Privacy Principles</span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terracotta-500 to-transparent opacity-50"></div>
        </section>
    )
}