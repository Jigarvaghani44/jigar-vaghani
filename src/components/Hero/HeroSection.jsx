import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
    FaLinkedin, FaInstagram, FaFacebook,
    FaMoon, FaSun, FaArrowRight, FaChevronDown,
    FaCode, FaRobot, FaChartLine, FaCloud, FaUsers,
    FaQuoteRight, FaBars, FaTimes
} from 'react-icons/fa';
import myProfessionalImage from '../../assets/my profational pic.png'; // Ensure file has no spaces
import JigarLogo from '../../assets/jigar logo.png';

const RealEstateDigitalIdentity = () => {
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        role: 'Select your role'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the message
        const message = `*New Consultation Request*%0A%0A
*Name:* ${formData.name}%0A
*Contact:* ${formData.contact}%0A
*Email:* ${formData.email}%0A
*Role:* ${formData.role}`;

        // Target WhatsApp number (replace with your business number in international format without +)
        const phoneNumber = '919510558938'; // e.g., 15551234567 for +1 (555) 123-4567

        // Create WhatsApp link
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redirect
        window.open(whatsappUrl, '_blank');
    };
    const toggleTheme = () => setDarkMode(!darkMode);
    const whatsappredirect = () => window.open('https://wa.me/919510558938', '_blank');
    const testimonials = [
        {
            quote: "Jigar's expertise in digital identity transformed our online presence. Our credibility skyrocketed, leading to a 40% increase in high-quality leads within just 3 months.",
            name: "Sarah Thompson, CEO of UrbanNest Realty"
        },
        {
            quote: "His approach to building digital identity systems is both strategic and practical. We've seen significant improvements in our brand recognition and client engagement.",
            name: "Michael Chen, Director of Marketing, TechSolutions Inc."
        },
        {
            quote: "Working with Jigar has been a game-changer for our real estate business. His digital identity solutions have helped us stand out in a crowded market.",
            name: "David Rodriguez, Founder, Elite Properties"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on window resize (if screen becomes large)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // const scaleOnHover = {
    //     scale: 1.05,
    //     transition: { duration: 0.3 }
    // };

    // Data
    const domains = [
        { icon: FaCode, title: 'Digital Identity Infrastructure', desc: 'Scalable, secure, and future-proof' },
        { icon: FaRobot, title: 'AI Automation', desc: 'Intelligent workflows that scale' },
        { icon: FaChartLine, title: 'Growth Systems', desc: 'Data-driven expansion strategies' },
        { icon: FaCloud, title: 'Software Architecture', desc: 'Robust foundations for innovation' },
        { icon: FaUsers, title: 'Leadership Strategy', desc: 'Empowering teams and vision' }
    ];

    const impacts = [
        'Transforms online credibility',
        'Builds automated lead systems',
        'Improves professional positioning',
        'Creates authority presence'
    ];

    const timeline = [
        { year: '2025 — 2026', title: 'UniTechnoStack', desc: 'Lead Software Architect, Digital Identity Infrastructure' },
        { year: '2024 — 2025', title: 'Appscrip', desc: 'Back-End Developer' },
        { year: '2023 — 2024', title: 'AI Trading Platform', desc: 'Senior Software Engineer' }
    ];
    const downloadVCard = () => {
        const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jigar Vaghani
ORG:UniTechnoStack
TITLE:Digital Identity Strategist, Back-end Developer, Software Architect
TEL;TYPE=WORK,VOICE:+91 9510558938
EMAIL;TYPE=WORK,INTERNET:jigarvaghani44@gmail.com
URL:https://www.linkedin.com/in/jigar-vaghani/
NOTE:Digital authority engineer for executives.
END:VCARD`;

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'jigar-vaghani.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} overflow-hidden`}>
            {/* Main container with theme-aware background */}
            <div className="bg-white dark:bg-background text-gray-900 dark:text-white font-sans transition-colors duration-300 min-h-screen">
                {/* NAVBAR */}
                <nav className={`fixed top-0 w-full z-50 px-4 sm:px-6 md:px-10 py-4 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 dark:bg-background/90 backdrop-blur-xl border-b border-gray-200 dark:border-border shadow-sm'
                    : 'bg-transparent'
                    }`}>
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            {/* Logo */}
                            <img
                                src={JigarLogo}
                                alt="Jigar Vaghani Logo"
                                className="w-10 h-10 object-contain"
                            />

                            {/* Name */}
                            <div className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                JIGAR VAGHANI
                            </div>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            <div className="flex space-x-8 text-sm font-medium">
                                {['Identity', 'Expertise', 'Impact', 'Insights', 'Connect'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-600 dark:text-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-100 dark:bg-card border border-gray-200 dark:border-border hover:shadow-md transition-all"
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-indigo-600" />}
                            </button>
                        </div>

                        {/* Mobile Menu Button and Theme Toggle */}
                        <div className="flex items-center gap-3 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-100 dark:bg-card border border-gray-200 dark:border-border"
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-indigo-600" />}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-card border border-gray-200 dark:border-border"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-0 right-0 top-full mt-2 mx-4 p-4 bg-white dark:bg-card rounded-2xl shadow-xl border border-gray-200 dark:border-border md:hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {['Identity', 'Expertise', 'Impact', 'Insights', 'Connect'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-gray-600 dark:text-secondary hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </nav>

                {/* HERO SECTION – with contact info and save contact button */}
                <section id="identity" className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-10 pt-20 overflow-hidden">
                    {/* Animated background shapes (unchanged) */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Left column */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-center lg:text-left"
                        >
                            {/* Pre-headline */}
                            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <span className="w-8 h-px bg-accent"></span>
                                <p className="text-accent font-semibold tracking-wide uppercase text-xs sm:text-sm">
                                    Digital Identity Strategist | Back-end Developer | Software Architect
                                </p>
                            </motion.div>
                            {/* Right column: Image (unchanged) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="relative group lg:hidden "
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                                <div className="relative bg-white dark:bg-card rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-border">
                                    <img
                                        src={myProfessionalImage}
                                        alt="Jigar Vaghani – Digital Identity Strategist"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </motion.div>
                            {/* Main headline */}
                            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                                Command <br className="hidden sm:block" />
                                <span className="text-accent">Authority</span>
                                <br />
                                Before You Speak
                            </motion.h1>

                            {/* Supporting text */}
                            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-secondary max-w-xl mx-auto lg:mx-0">
                                I help founders, executives, and professionals transform their expertise into powerful professional identities by designing authority-driven platforms, custom software solutions, and intelligent systems that build trust and attract opportunities automatically.
                            </motion.p>

                            {/* Contact Info Display */}
                            <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base">
                                <div className="flex items-center gap-2 text-gray-600 dark:text-secondary">
                                    <span className="text-accent">📞</span>
                                    <span>+91 9510558938</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-secondary">
                                    <span className="text-accent">✉️</span>
                                    <span>jigarvaghani44@gmail.com</span>
                                </div>
                            </motion.div>

                            {/* CTA Buttons – now with Save Contact */}
                            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {/* Save Contact Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={downloadVCard}
                                    className="group px-8 py-4 bg-accent text-white rounded-xl font-medium text-base sm:text-lg hover:bg-indigo-600 transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>📇</span> Save Contact
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                {/* Secondary Button (unchanged) */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={whatsappredirect}
                                    className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-border rounded-xl font-medium text-base sm:text-lg hover:bg-gray-50 dark:hover:bg-card transition-all"
                                >
                                    Quick Connect
                                </motion.button>
                            </motion.div>

                        </motion.div>

                        {/* Right column: Image (unchanged) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group hidden lg:block"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                            <div className="relative bg-white dark:bg-card rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-border">
                                <img
                                    src={myProfessionalImage}
                                    alt="Jigar Vaghani – Digital Identity Strategist"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </motion.div>
                    </div>

                </section>

                {/* TRUST METRICS – redesigned with premium feel */}
                <section className="relative py-16 sm:py-24 overflow-hidden">
                    {/* Background glow element */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                        {/* Section heading */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-12"
                        >
                            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">
                                Trusted by industry leaders
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Impact <span className="text-accent">by the numbers</span>
                            </h2>
                        </motion.div>

                        {/* Metrics grid */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                        >
                            {[
                                { value: 3, suffix: "+", label: "Years of Authority Engineering", icon: "⭐", desc: "Deep expertise" },
                                { value: 50, suffix: "+", label: "C‑Suite Clients", icon: "👔", desc: "Globally" },
                                { value: 5, suffix: "", label: "Countries", icon: "🌍", desc: "Worldwide reach" },
                                { value: 99, suffix: "%", label: "Client Satisfaction", icon: "❤️", desc: "Repeat & referral" }
                            ].map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    className="group relative p-6 bg-white dark:bg-background rounded-2xl border border-gray-200 dark:border-border shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Gradient border on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[2px]"></div>

                                    {/* Inner content */}
                                    <div className="relative z-10">
                                        {/* Icon + number row */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-3xl">{metric.icon}</span>
                                            <Counter value={metric.value} suffix={metric.suffix} />
                                        </div>

                                        {/* Label and description */}
                                        <p className="text-gray-900 dark:text-white font-semibold text-lg leading-tight">
                                            {metric.label}
                                        </p>
                                        <p className="text-gray-600 dark:text-secondary text-sm mt-1">
                                            {metric.desc}
                                        </p>

                                        {/* Decorative underline */}
                                        <div className="w-12 h-0.5 bg-accent/50 mt-4 group-hover:w-full transition-all duration-300"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* AUTHORITY DOMAINS – redesigned with Stripe-inspired premium feel */}
                <section id="expertise" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
                    {/* Background gradient for depth */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/10"></div>

                    <div className="max-w-7xl mx-auto">
                        {/* Section Header – redesigned for impact */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3 flex items-center justify-center gap-2">
                                <span className="w-8 h-px bg-accent"></span>
                                Core Capabilities
                                <span className="w-8 h-px bg-accent"></span>
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                Authority <span className="text-accent">Domains</span>
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-secondary max-w-2xl mx-auto">
                                Specialized disciplines where we engineer digital trust and position you as the definitive expert.
                            </p>
                        </motion.div>

                        {/* Domain Cards Grid – with enhanced interactivity */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {domains.map((domain, idx) => {
                                const Icon = domain.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUp}
                                        whileHover="hover"
                                        className="group relative"
                                    >
                                        {/* Card with gradient border on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"></div>
                                        <div className="relative p-6 sm:p-8 bg-white dark:bg-background border border-gray-200 dark:border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                            {/* Icon with animated background */}
                                            <div className="relative mb-5">
                                                <div className="absolute inset-0 bg-accent/10 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                                                <div className="relative w-14 h-14 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                                                    <Icon className="text-3xl text-accent group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            </div>

                                            {/* Title and Description */}
                                            <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                                {domain.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-secondary text-sm sm:text-base leading-relaxed">
                                                {domain.desc}
                                            </p>

                                            {/* Subtle arrow indicator on hover */}
                                            <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-accent text-sm font-medium flex items-center gap-1">
                                                    Explore <FaArrowRight className="text-xs" />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Optional subtle CTA or footnote */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center text-gray-500 dark:text-secondary text-sm mt-12"
                        >
                            Each domain is backed by proven frameworks and continuous innovation.
                        </motion.p>
                    </div>
                </section>

                {/* PROOF & EXPERIENCE – redesigned with Stripe-inspired minimalism */}
                <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Section header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
                                Track Record
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                Experience that <span className="text-accent">delivers</span>
                            </h2>
                        </motion.div>

                        {/* Experience list */}
                        <div className="space-y-6 sm:space-y-8">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={idx}
                                >
                                    <div className="group relative bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border hover:shadow-xl transition-all duration-300">
                                        {/* Gradient border on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px] -z-10"></div>

                                        {/* Content */}
                                        <div className="relative p-6 sm:p-8">
                                            {/* Mobile layout (stacked) */}
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                                                {/* Year – prominent on the left */}
                                                <div className="sm:w-1/3 lg:w-1/4">
                                                    <p className="text-accent font-mono text-sm font-semibold tracking-wider mb-1 sm:mb-0">
                                                        {item.year}
                                                    </p>
                                                    {/* Decorative line for desktop */}
                                                    <div className="hidden sm:block w-12 h-px bg-accent/50 mt-2 group-hover:w-20 transition-all duration-300"></div>
                                                </div>

                                                {/* Details */}
                                                <div className="sm:w-2/3 lg:w-3/4">
                                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-secondary text-base sm:text-lg leading-relaxed">
                                                        {item.desc}
                                                    </p>

                                                    {/* Optional key achievement (could be passed as additional prop) */}
                                                    {idx === 0 && (
                                                        <p className="mt-4 text-sm text-accent flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                                            Architected identity platform used by 50+ executives
                                                        </p>
                                                    )}
                                                    {idx === 1 && (
                                                        <p className="mt-4 text-sm text-accent flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                                            Scaled APIs to 1M+ users with 99.9% uptime
                                                        </p>
                                                    )}
                                                    {idx === 2 && (
                                                        <p className="mt-4 text-sm text-accent flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                                            Developed algorithms processing $10M+ daily volume
                                                        </p>
                                                    )}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footnote / CTA */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center text-gray-500 dark:text-secondary text-sm mt-12"
                        >
                            Each role contributed to a cumulative 7+ years of authority engineering.
                        </motion.p>
                    </div>
                </section>

                {/* IMPACT SECTION – redesigned with metric-focused cards */}
                <section id="impact" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        {/* Section header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
                                Real Results
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                Outcomes that <span className="text-accent">compound</span>
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-secondary max-w-2xl mx-auto">
                                Quantifiable impact delivered to forward-thinking executives and industry leaders.
                            </p>
                        </motion.div>

                        {/* Impact grid */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                        >
                            {impacts.map((impact, idx) => {
                                // Extract emoji and text (assuming format: "⚡ 3x more inbound...")
                                const parts = impact.split(' ');
                                const emoji = parts[0];
                                const metric = parts[1]; // e.g., "3x"
                                const description = parts.slice(2).join(' ');

                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUp}
                                        whileHover="hover"
                                        className="group relative"
                                    >
                                        {/* Gradient border on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"></div>

                                        {/* Card content */}
                                        <div className="relative p-6 sm:p-8 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                                {/* Large emoji / icon */}
                                                <span className="text-4xl sm:text-5xl">{emoji}</span>

                                                <div>
                                                    {/* Metric + description */}
                                                    <div className="flex items-baseline gap-2 mb-2">
                                                        <span className="text-3xl sm:text-4xl font-bold text-accent">
                                                            {metric}
                                                        </span>
                                                        <span className="text-gray-600 dark:text-secondary text-sm font-medium">
                                                            average increase
                                                        </span>
                                                    </div>
                                                    <p className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                                                        {description}
                                                    </p>

                                                    {/* Supporting stat / micro-metric */}
                                                    <p className="mt-3 text-sm text-gray-500 dark:text-secondary flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                                                        Based on {idx === 0 ? '120+ client engagements' : idx === 1 ? 'proprietary authority scoring' : idx === 2 ? 'consultation conversion data' : 'comprehensive digital audits'}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Footnote with overall impact */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center text-gray-500 dark:text-secondary text-sm mt-12"
                        >
                            Combined, these outcomes represent over $50M in new opportunities for our clients.
                        </motion.p>
                    </div>


                    <div className="max-w-7xl mx-auto text-center mt-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={staggerContainer}
                            className="flex flex-wrap justify-center gap-4 sm:gap-6"
                        >
                            {[
                                { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jigar-vaghani/' },
                                { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/mr.jigs_vaghani?igsh=MWZyNXhxMm1zbjBzYQ%3D%3D&utm_source=qr' },
                                { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/jigar.vaghani.378' }
                            ].map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        variants={fadeUp}
                                        whileHover={{ y: -4 }}
                                        href={social.href}
                                        className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-card rounded-full border border-gray-200 dark:border-border hover:shadow-lg transition-all text-sm sm:text-base"
                                    >
                                        <Icon className="text-xl sm:text-2xl text-accent" />
                                        <span className="font-medium">{social.label}</span>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* TESTIMONIALS – redesigned with multiple client stories */}
                <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-gray-50 dark:bg-card overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        {/* Section header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
                                Client Stories
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                Trusted by <span className="text-accent">leaders</span>
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-secondary max-w-2xl mx-auto">
                                Hear what executives and founders say about working together.
                            </p>
                        </motion.div>

                        {/* Testimonials grid */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {testimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    className="group relative"
                                >
                                    {/* Gradient border on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"></div>

                                    {/* Card content */}
                                    <div className="relative p-6 sm:p-8 bg-white dark:bg-background border border-gray-200 dark:border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                        {/* Quote icon */}
                                        <FaQuoteRight className="absolute top-4 right-4 text-3xl text-accent/10" />

                                        {/* Rating stars (optional) */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-gray-700 dark:text-secondary italic mb-6 text-base sm:text-lg leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author info */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-sm text-accent">
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>


                    </div>
                </section>



                {/* FINAL CTA – redesigned as high-conversion lead magnet */}
                <section id="connect" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left column: Headline and social proof */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="text-center lg:text-left"
                            >
                                <motion.p variants={fadeUp} className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
                                    Start your journey
                                </motion.p>
                                <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                    Your Professional Identity <br />
                                    <span className="text-accent">Begins Here</span>
                                </motion.h2>



                                {/* Trust signals */}
                                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">

                                    <div className="flex items-center gap-2">
                                        <div className="flex text-accent">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 dark:text-secondary">5.0 average rating</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right column: Lead capture form / CTA card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="p-8 bg-white dark:bg-card rounded-3xl border border-gray-200 dark:border-border shadow-xl">
                                    <h3 className="text-2xl font-bold mb-2">Get your free audit</h3>
                                    <p className="text-gray-600 dark:text-secondary mb-6">
                                        Receive a personalized 30-minute strategy session to map out your digital authority.
                                    </p>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Full name"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-background border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        />
                                        <input
                                            type="tel"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleInputChange}
                                            placeholder="Contact number"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-background border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Work email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-background border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        />
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-background border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        >
                                            <option value="Select your role" disabled>Select your role</option>
                                            <option value="Founder / CEO">Founder / CEO</option>
                                            <option value="Executive">Executive</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full px-6 py-4 bg-accent text-white rounded-xl font-medium text-lg hover:bg-indigo-600 transition-all shadow-lg"
                                        >
                                            Claim your free audit
                                        </motion.button>
                                    </form>



                                    {/* Alternative simple button version (if form is too much) */}
                                    {/* <div className="text-center">
            <motion.button
              whileHover={scaleOnHover}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white rounded-xl font-medium text-lg hover:bg-indigo-600 transition-all shadow-lg"
            >
              Launch Identity
            </motion.button>
            <p className="text-sm text-gray-500 dark:text-secondary mt-4">
              ✨ Join 120+ industry leaders
            </p>
          </div> */}
                                </div>

                                {/* Decorative element */}
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                            </motion.div>
                        </div>


                    </div>
                </section>

                {/* VISION FOOTER */}
                <footer className="py-10 sm:py-16 px-4 sm:px-6 md:px-10 border-t border-gray-200 dark:border-border">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-secondary text-sm sm:text-base">
                        <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">JIGAR VAGHANI</p>
                        <p className="text-xs sm:text-sm">© 2025 JIGAR VAGHANI Profesional Identity (UniProId), managed & developed by uniTechnostack</p>
                        <p className="text-xs sm:text-sm mt-4 md:mt-0">Crafted for modern leaders</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

// Counter component with proper animation
const Counter = ({ value, suffix = '' }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        return controls.stop;
    }, [value, count]);

    return <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{displayValue}</motion.h2>;
};

export default RealEstateDigitalIdentity;