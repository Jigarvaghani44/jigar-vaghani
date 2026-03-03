// src/components/QR/QRCodeSection.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    QrCode,
    Download,
    Share2,
    Smartphone,
    Copy,
    CheckCircle2,
    Sparkles,
    Shield,
    ScanLine,
    Phone,
    Clock,
    Globe,
    Maximize2,
    X,
    Facebook,
    Twitter,
    Linkedin,
    Mail,
    MessageCircle,
    Send,
    Link2
} from 'lucide-react'
import QRCode from 'react-qr-code'

export default function QRCodeSection({ profile }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const [isDownloadingModal, setIsDownloadingModal] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [qrTheme, setQrTheme] = useState('gold')
    const [scanAnimation, setScanAnimation] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [showShareMenu, setShowShareMenu] = useState(false)
    const qrRef = useRef(null)
    const modalQrRef = useRef(null)

    const qrValue = window.location.href
    // Use fallback values in case profile is undefined
    const profileName = profile?.name || 'User'
    const profileTitle = profile?.title || ''
    const profileEmail = profile?.email || ''
    const profilePhone = profile?.phone || ''
    const shareText = `Check out ${profileName}'s digital business card!`

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Premium color themes
    const themes = {
        gold: {
            primary: '#D4AF37',
            secondary: '#0A2540',
            gradient: 'linear-gradient(135deg, #D4AF37 0%, #C19A6B 50%, #B8860B 100%)',
            fgColor: '#0A2540',
            bgColor: '#FFFFFF'
        },
        navy: {
            primary: '#0A2540',
            secondary: '#D4AF37',
            gradient: 'linear-gradient(135deg, #0A2540 0%, #1a365d 50%, #0A2540 100%)',
            fgColor: '#0A2540',
            bgColor: '#FFFFFF'
        },
        dark: {
            primary: '#1A1A1A',
            secondary: '#D4AF37',
            gradient: 'linear-gradient(135deg, #1A1A1A 0%, #333333 50%, #1A1A1A 100%)',
            fgColor: '#FFFFFF',
            bgColor: '#1A1A1A'
        }
    }

    const currentTheme = themes[qrTheme]

    // Helper to convert SVG to canvas download
    const downloadQRFromRef = async (ref, fileNameSuffix = '') => {
        if (!ref.current) {
            console.error('QR ref not found')
            return
        }

        const svg = ref.current.querySelector('svg')
        if (!svg) {
            console.error('SVG not found in ref')
            return
        }

        const svgRect = svg.getBoundingClientRect()
        const width = svgRect.width || 200
        const height = svgRect.height || 200

        const svgData = new XMLSerializer().serializeToString(svg)

        const scale = isMobile ? 1.5 : 2
        const canvas = document.createElement('canvas')
        canvas.width = width * scale
        canvas.height = height * scale
        const ctx = canvas.getContext('2d')

        const img = new Image()
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(svgBlob)

        return new Promise((resolve, reject) => {
            img.onload = () => {
                ctx.drawImage(img, 0, 0, width * scale, height * scale)

                // Add watermark with fallback if profile is undefined
                ctx.fillStyle = currentTheme.primary + '20'
                ctx.font = `bold ${isMobile ? '16px' : '24px'} sans-serif`
                ctx.fillText(profileName, 20, canvas.height / 2 - 30)
                ctx.font = `${isMobile ? '12px' : '16px'} sans-serif`
                ctx.fillText('Digital Business Card', 20, canvas.height / 2)
                ctx.fillText(new Date().getFullYear(), 20, canvas.height / 2 + 20)

                const pngFile = canvas.toDataURL('image/png')
                const downloadLink = document.createElement('a')
                downloadLink.download = `${profileName.replace(/\s+/g, '_')}_Digital_Card${fileNameSuffix}.png`
                downloadLink.href = pngFile
                downloadLink.click()

                URL.revokeObjectURL(url)
                resolve()
            }
            img.onerror = (err) => {
                console.error('Failed to load SVG image:', err)
                URL.revokeObjectURL(url)
                reject(err)
            }
            img.src = url
        })
    }

    const downloadQR = async () => {
        setIsDownloading(true)
        try {
            await downloadQRFromRef(qrRef)
        } catch (error) {
            console.error('Download failed:', error)
            alert('Failed to download QR code. Please try again.')
        } finally {
            setIsDownloading(false)
        }
    }

    const downloadModalQR = async () => {
        setIsDownloadingModal(true)
        try {
            await downloadQRFromRef(modalQrRef, '_modal')
        } catch (error) {
            console.error('Modal download failed:', error)
            alert('Failed to download QR code. Please try again.')
        } finally {
            setIsDownloadingModal(false)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(qrValue)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    // Share menu items
    const shareItems = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            color: 'bg-green-500',
            url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + qrValue)}`
        },
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'bg-blue-600',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrValue)}`
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'bg-sky-500',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(qrValue)}`
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            color: 'bg-blue-700',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(qrValue)}`
        },
        {
            name: 'Telegram',
            icon: Send,
            color: 'bg-sky-600',
            url: `https://t.me/share/url?url=${encodeURIComponent(qrValue)}&text=${encodeURIComponent(shareText)}`
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'bg-gray-600',
            url: `mailto:?subject=${encodeURIComponent(profileName + "'s Digital Business Card")}&body=${encodeURIComponent(shareText + '\n\n' + qrValue)}`
        }
    ]

    const handleShare = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
        setShowShareMenu(false)
    }

    const scanAnimationEffect = () => {
        setScanAnimation(true)
        setTimeout(() => setScanAnimation(false), 1000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            scanAnimationEffect()
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Background Elements (unchanged) */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 -left-10 sm:left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-2xl sm:blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 -right-10 sm:right-1/4 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-bl from-[#0A2540]/10 to-transparent dark:from-[#D4AF37]/10 blur-2xl sm:blur-3xl"
                />
                {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 90, 0]
                        }}
                        transition={{
                            duration: 10 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                        style={{
                            left: `${10 + (i * 15)}%`,
                            top: `${10 + (i % 3) * 30}%`,
                            width: isMobile ? '15px' : '20px',
                            height: isMobile ? '15px' : '20px',
                            background: `conic-gradient(from 90deg at 50% 50%, ${currentTheme.primary}20 0deg, transparent 180deg)`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-4 sm:mb-6">
                        <QrCode className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                        <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0A2540] dark:text-[#D4AF37]">
                            Digital Connection
                        </span>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="text-[#0A2540] dark:text-white">Instant</span>{' '}
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#D4AF37] bg-clip-text text-transparent bg-size-200 animate-gradient">
                            Connection
                        </span>
                    </h2>

                    <div className="max-w-2xl mx-auto px-2">
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Scan the QR code to instantly save my complete digital identity to your device
                        </p>
                    </div>

                    {/* Theme Selector */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <button
                            onClick={() => setQrTheme('gold')}
                            className={`px-4 py-2 rounded-lg transition-all ${qrTheme === 'gold' ? 'bg-[#D4AF37] text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                        >
                            Gold
                        </button>
                        <button
                            onClick={() => setQrTheme('navy')}
                            className={`px-4 py-2 rounded-lg transition-all ${qrTheme === 'navy' ? 'bg-[#0A2540] text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                        >
                            Navy
                        </button>
                        <button
                            onClick={() => setQrTheme('dark')}
                            className={`px-4 py-2 rounded-lg transition-all ${qrTheme === 'dark' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                        >
                            Dark
                        </button>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center">
                    {/* Left Column - QR Code Display */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl lg:shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C19A6B] shadow-md sm:shadow-lg">
                                        <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A2540] dark:text-white">
                                            Digital Card QR
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            Scan with any smartphone
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex justify-center items-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl">
                                <AnimatePresence>
                                    {scanAnimation && (
                                        <motion.div
                                            initial={{ y: -80 }}
                                            animate={{ y: 80 }}
                                            exit={{ y: 80 }}
                                            className="absolute left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10"
                                        />
                                    )}
                                </AnimatePresence>

                                <div className="relative p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-inner">
                                    <div ref={qrRef} className="relative">
                                        <QRCode
                                            value={qrValue}
                                            size={isMobile ? 180 : 220}
                                            fgColor={currentTheme.fgColor}
                                            bgColor={currentTheme.bgColor}
                                            level="H"
                                        />

                                        <div className="absolute -inset-3 sm:-inset-4 rounded-lg border-2 border-dashed border-[#D4AF37]/30" />
                                        <div className="absolute -inset-4 sm:-inset-6 rounded-lg sm:rounded-xl border border-[#0A2540]/10 dark:border-[#D4AF37]/10" />

                                        <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl" />
                                        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr" />
                                        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl" />
                                        <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br" />
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
                                    aria-label="Expand QR code"
                                >
                                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>

                            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                        Always Updated
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
                                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                        Secure Connection
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Instructions & Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="space-y-6 sm:space-y-8">
                            {/* Instructions */}
                            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A2540] dark:text-white mb-4 sm:mb-6">
                                    How to Connect
                                </h3>

                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        { step: 1, icon: Smartphone, title: "Open Camera", description: "Use your smartphone's camera app" },
                                        { step: 2, icon: ScanLine, title: "Scan QR Code", description: "Point camera at the QR code" },
                                        { step: 3, icon: Phone, title: "Save Contact", description: "Automatically save contact info" },
                                        { step: 4, icon: Globe, title: "Access Profile", description: "Get complete digital identity" }
                                    ].map((instruction) => (
                                        <div key={instruction.step} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C19A6B] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                                    {instruction.step}
                                                </div>
                                                <div className="absolute -inset-2 rounded-lg sm:rounded-xl border-2 border-[#D4AF37]/20" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <instruction.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] flex-shrink-0" />
                                                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
                                                        {instruction.title}
                                                    </h4>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {instruction.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={downloadQR}
                                    disabled={isDownloading}
                                    className="group relative px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] to-[#1a365d]" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                                        {isDownloading ? (
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:animate-bounce" />
                                        )}
                                        <span className="text-white font-semibold text-sm sm:text-base">
                                            {isDownloading ? 'Downloading...' : 'Download QR'}
                                        </span>
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowShareMenu(true)}
                                    className="group relative px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 transition-all"
                                >
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A2540] dark:text-white group-hover:text-[#0A2540] dark:group-hover:text-white" />
                                        <span className="font-semibold text-[#0A2540] dark:text-white group-hover:text-[#0A2540] dark:group-hover:text-white text-sm sm:text-base">
                                            Share Profile
                                        </span>
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={copyToClipboard}
                                    className="group relative px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-gray-300 dark:border-gray-700 bg-transparent hover:border-[#D4AF37] transition-colors sm:col-span-2"
                                >
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                                        {isCopied ? (
                                            <>
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                                <span className="font-semibold text-green-500 text-sm sm:text-base">
                                                    Link Copied!
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#D4AF37]" />
                                                <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0A2540] dark:group-hover:text-white text-sm sm:text-base">
                                                    Copy Profile Link
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Share Menu Modal */}
            <AnimatePresence>
                {showShareMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowShareMenu(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowShareMenu(false)}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>

                            <h3 className="text-xl font-bold text-[#0A2540] dark:text-white mb-2">
                                Share Profile
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Choose a platform to share {profileName}'s digital business card
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {shareItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleShare(item.url)}
                                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className={`p-3 rounded-full ${item.color} text-white`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                            {item.name}
                                        </span>
                                    </motion.button>
                                ))}

                                {/* Copy link button inside share menu */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        copyToClipboard()
                                        setShowShareMenu(false)
                                    }}
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div className="p-3 rounded-full bg-gray-600 text-white">
                                        <Link2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                        Copy Link
                                    </span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expanded QR Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-lg"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-2 sm:mx-4"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 p-2 sm:p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-xl hover:scale-110 transition-transform"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                            </button>

                            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="text-center mb-6 sm:mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#C19A6B]/20 backdrop-blur-sm border border-[#D4AF37]/30 mb-3 sm:mb-4">
                                        <QrCode className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                                        <span className="text-xs sm:text-sm font-medium text-[#0A2540] dark:text-[#D4AF37]">
                                            Full Screen QR Code
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A2540] dark:text-white">
                                        Scan to Connect
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1 sm:mt-2">
                                        Perfect for presentations and digital displays
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <div className="relative p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-inner">
                                        <div ref={modalQrRef} className="relative">
                                            <QRCode
                                                value={qrValue}
                                                size={isMobile ? 200 : 280}
                                                fgColor={currentTheme.fgColor}
                                                bgColor={currentTheme.bgColor}
                                                level="H"
                                            />

                                            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 sm:border-4 border-[#D4AF37]/20" />
                                            <div className="absolute -inset-6 sm:-inset-8 lg:-inset-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#0A2540]/10 dark:border-[#D4AF37]/10" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 text-center">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#0A2540] dark:text-white">
                                        {profileName}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                        {profileTitle}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-2">
                                        {profileEmail} • {profilePhone}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-6 sm:mt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={downloadModalQR}
                                        disabled={isDownloadingModal}
                                        className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0A2540] to-[#1a365d] text-white font-semibold text-sm sm:text-base"
                                    >
                                        {isDownloadingModal ? 'Downloading...' : 'Download HD'}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsExpanded(false)}
                                        className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
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