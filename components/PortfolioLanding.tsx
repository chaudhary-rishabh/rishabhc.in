"use client"

import LandingImage from "./LandingImage"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    User,
    Code,
    Award,
    Github,
    Linkedin,
    XIcon,
    ExternalLink,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    ShoppingCart,
    Database,
    Smartphone,
    Users,
    Briefcase,
} from "lucide-react"
import HorizontalCarousel from "./carousel/horizontal-carousel"
import ContactForm from "./contact/ContactForm"
import CertificationSection from "./certification/CertificationSection"
import BubbleExperience from "./experience/BubbleExperience"
import Profile from "./profile/profile"
import Image from "next/image"
import EnhancedSkillsSection from "./profile/enhanced-skills-section"
import SectionSeparator from "./section-separator"

// Enhanced sections with multiple projects
const sections = [
    {
        id: "portfolio",
        label: "Portfolio",
        icon: User,
        title: "Featured Projects",
        subtitle: "Crafting digital experiences that make a difference",
        projects: [
            {
                id: 1,
                name: "Course Selling Platform",
                tech: "Supabase, Next.js, Tailwind",
                description:
                    "A comprehensive e-learning platform with user authentication, course management, and payment integration",
                image: "/rishabh-project-two.png",
                github: "github.com/chaudhary-rishabh/sakmap",
                preview: "https://sakmap.com/",
                features: [
                    "User Authentication & Profiles",
                    "Course Management System",
                    "Payment Integration",
                    "Progress Tracking",
                ],
                testimonial: {
                    text: "The platform demonstrates exceptional technical skills and creative problem-solving. Each feature showcases attention to detail and user-centered design principles.",
                    author: "Sarah Johnson",
                    role: "Product Manager at EduTech",
                },
                icon: Users,
            },
            {
                id: 2,
                name: "E-Commerce Dashboard",
                tech: "React, Tailwind, Node.js",
                description: "Modern e-commerce management with real-time analytics and inventory control",
                image: "/rishabh-project-one.png",
                github: "github.com/chaudhary-rishabh/yogice",
                preview: "https://yogice.in/",
                features: ["Real-time Analytics", "Inventory Management", "Order Processing", "Customer Insights"],
                testimonial: {
                    text: "Outstanding work on the dashboard! The intuitive design and powerful features have significantly improved our operational efficiency.",
                    author: "Mike Chen",
                    role: "CEO at RetailFlow",
                },
                icon: ShoppingCart,
            },
            {
                id: 3,
                name: "Task Management App",
                tech: "React Native, Firebase, Redux",
                description:
                    "Cross-platform mobile app for team collaboration and project management with offline capabilities",
                image: "/rishabh-project-one.png",
                github: "github.com/chaudhary-rishabh/sakmap",
                preview: "https://sakmap.com/",
                features: ["Cross-platform Mobile App", "Offline Synchronization", "Team Collaboration", "Project Templates"],
                testimonial: {
                    text: "The app has transformed how our team manages projects. Clean interface, robust functionality, and excellent performance across all devices.",
                    author: "Lisa Rodriguez",
                    role: "Team Lead at StartupHub",
                },
                icon: Smartphone,
            },
            {
                id: 4,
                name: "Analytics Dashboard",
                tech: "React Native, Firebase, Redux",
                description: "Real-time analytics dashboard with data visualization and reporting capabilities",
                image: "/rishabh-project-one.png",
                github: "github.com/chaudhary-rishabh/sakmap",
                preview: "https://sakmap.com/",
                features: ["Real-time Data Visualization", "Custom Reports", "Export Functionality", "Multi-tenant Support"],
                testimonial: {
                    text: "The analytics dashboard provides incredible insights into our business metrics. The visualizations are clear and actionable.",
                    author: "Alex Thompson",
                    role: "Data Analyst at TechCorp",
                },
                icon: Database,
            },
        ],
    },
    {
        id: "skills",
        label: "About",
        icon: Code,
        title: "Problem-Solving Specialist",
        subtitle: "Mastering cutting-edge technologies and frameworks",
        projects: [],
    },
    {
        id: "certification",
        label: "Certification",
        icon: Award,
        title: "Professional Credentials",
        subtitle: "Validated expertise through industry certifications",
        projects: [],
    },
    {
        id: "experience",
        label: "Experience",
        icon: Briefcase,
        title: "Professional Journey",
        subtitle: "Years of experience building impactful solutions",
        projects: [],
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

export default function PortfolioLanding() {
    const [activeSection, setActiveSection] = useState("portfolio")
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    // Refs for the main container
    const mainContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const currentSection = sections.find((section) => section.id === activeSection) || sections[0]
    const currentProject = currentSection.projects[currentProjectIndex] || null

    const handleNextProject = () => {
        setCurrentProjectIndex((prev) => (prev === currentSection.projects.length - 1 ? 0 : prev + 1))
    }

    const handlePrevProject = () => {
        setCurrentProjectIndex((prev) => (prev === 0 ? currentSection.projects.length - 1 : prev - 1))
    }

    // Reset project index when switching sections
    useEffect(() => {
        setCurrentProjectIndex(0)
        // Reset scroll position of main container when switching sections
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollTop = 0
        }
    }, [activeSection])

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)

        // Scroll the main content into view smoothly
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])
    if (!hasMounted) return null

    const renderPortfolioContent = () => {
        if (!currentProject) return null

        return (
            <div className="space-y-6">
                {/* Project Image */}
                <motion.div
                    className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-white to-white shadow-2xl shadow-orange-200/60 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full h-full border border-orange-500 rounded-3xl bg-white/10 backdrop-blur-xs overflow-hidden">
                        <Image
                            src={currentProject.image || "/placeholder.svg"}
                            height={600}
                            width={600}
                            alt={currentProject.name}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </motion.div>

                {/* Project Info */}
                <div className="space-y-4">
                    <div className="flex sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                            <h3 className="text-sm sm:text-2xl font-bold text-gray-800">{currentProject.name}</h3>
                            <p className="text-orange-600 text-xs sm:text-xl font-medium">{currentProject.tech}</p>
                        </div>

                        <div className="flex gap-3">
                            <motion.a
                                href={currentProject.preview}
                                target="_blank"
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group relative bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-100/50"
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                rel="noreferrer"
                            >
                                <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors" />
                            </motion.a>

                            <motion.a
                                href={`https://${currentProject.github}`}
                                target="_blank"
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group relative bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-100/50"
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                rel="noreferrer"
                            >
                                <Github className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors" />
                            </motion.a>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{currentProject.description}</p>

                    {/* Features */}
                    {currentProject.features && (
                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-800">Key Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {currentProject.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 text-sm text-gray-600"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )
    }

    const renderSectionContent = () => {
        switch (activeSection) {
            case "portfolio":
                return renderPortfolioContent()
            case "skills":
                return <Profile />
            case "certification":
                return <CertificationSection />
            case "experience":
                return <BubbleExperience />
            default:
                return renderPortfolioContent()
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-300/50 via-orange-50 to-orange-200/90 font-sans">
            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Landing main page */}
                <LandingImage />

                {/* Horizontal Carousel Auto */}
                <HorizontalCarousel />
                <SectionSeparator />

                {/* Main Content Container */}
                <div className="flex justify-center items-start min-h-screen py-16">
                    <div className="w-full max-w-4xl mx-auto relative">
                        {/* Main White Container */}
                        <motion.div
                            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:w-3/4 w-full mx-auto shadow-2xl shadow-orange-500/20 border border-orange-200/50 overflow-hidden py-4"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Scrollable Content Area */}
                            <div
                                ref={mainContainerRef}
                                className="h-[600px] sm:h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100 p-6"
                                style={{
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#fb923c #fed7aa",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSection}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        className="h-full"
                                    >
                                        {renderSectionContent()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Project Navigation for Portfolio */}
                            {activeSection === "portfolio" && currentSection.projects.length > 1 && (
                                <div className="absolute top-2/3 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                                    <motion.button
                                        onClick={handlePrevProject}
                                        className="w-12 h-12 bg-white/60 backdrop-blur-none rounded-full shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center group cursor-pointer pointer-events-auto border border-orange-200/50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-orange-500 rotate-90" />
                                    </motion.button>

                                    <motion.button
                                        onClick={handleNextProject}
                                        className="w-12 h-12 bg-white/50 backdrop-blur-none rounded-full shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center group cursor-pointer pointer-events-auto border border-orange-200/50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <ChevronUp className="w-6 h-6 text-orange-500 rotate-90" />
                                    </motion.button>
                                </div>
                            )}

                            {/* Project Indicators for Portfolio */}
                            {activeSection === "portfolio" && currentSection.projects.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {currentSection.projects.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setCurrentProjectIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProjectIndex ? "bg-orange-500 w-6" : "bg-orange-300 hover:bg-orange-400"
                                                }`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <motion.div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[50%] max-w-5xl flex shadow-2xl shadow-orange-500/60 bg-white/20 backdrop-blur-sm py-3 rounded-3xl justify-around sm:gap-4 z-50"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ borderRadius: "30px" }}
                >
                    {sections.map((section) => {
                        const Icon = section.icon
                        const isActive = activeSection === section.id
                        return (
                            <motion.button
                                key={section.id}
                                variants={itemVariants}
                                onClick={() => handleSectionChange(section.id)}
                                className={`
                                    group relative outline-none flex flex-col sm:flex-row items-center justify-center sm:space-x-3 px-4 sm:px-8 py-3 sm:py-2
                                     rounded-3xl transition-all duration-300 font-semibold text-sm sm:text-base overflow-hidden
                                    ${isActive
                                        ? "bg-orange-200 text-gray-900 shadow-2xl shadow-gray-500/60 scale-105"
                                        : "bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 shadow-orange-500/10 hover:scale-105"
                                    }
                                `}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className={`
                                        shadow-lg p-2 rounded-xl transition-all duration-300
                                        ${isActive
                                            ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg"
                                            : "bg-orange-50 text-orange-500 group-hover:bg-orange-100"
                                        }
                                    `}
                                >
                                    <Icon className="w-3 h-3 sm:w-5 sm:h-5" />
                                </div>
                                <span className="hidden text-gray-700 sm:block">{section.label}</span>
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-3xl"
                                        layoutId="activeTab"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        )
                    })}
                </motion.div>

                <SectionSeparator />

                {/* Enhanced Skills Section */}
                <EnhancedSkillsSection />
                <SectionSeparator />

                {/* Contact Section */}
                <ContactForm />

                {/* Socials */}
                <motion.div className="pt-6 mx-auto flex justify-center" variants={itemVariants}>
                    <div className="flex space-x-4">
                        {[
                            { icon: Github, href: "https://github.com/chaudhary-rishabh", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/rishabh029/", label: "LinkedIn" },
                            { icon: XIcon, href: "https://www.x.com/rishabhcdotdev", label: "Portfolio" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="group relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-100/50"
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors" />
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-20 sm:mt-32"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Ready to create something
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            extraordinary together?
                        </span>
                    </h3>
                    <div className="flex flex-col mb-32 sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto">
                        <motion.button
                            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 relative overflow-hidden group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://cal.com/rishabhc/secret" className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Start a Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.button>
                        <motion.button
                            className="w-full sm:w-auto border-2 border-orange-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-orange-300 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://flowcv.com/resume/f1usckjdmt" className="flex items-center justify-center space-x-2">
                                View Resume
                            </a>
                        </motion.button>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}
