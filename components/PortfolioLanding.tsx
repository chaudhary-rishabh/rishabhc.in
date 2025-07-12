"use client"

import LandingImage from "./LandingImage"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    User,
    Code,
    Award,
    GitForkIcon as Github,
    Linkedin,
    ExternalLink,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    ShoppingCart,
    Database,
    Smartphone,
    Zap,
    Users,
    Briefcase,
} from "lucide-react"
import HorizontalCarousel from "./carousel/horizontal-carousel"
import ContactForm from "./contact/ContactForm"
import CertificationSection from "./certification/CertificationSection"
import ModernCarousel from "./carousel/modern-carousel"
import BubbleExperience from "./experience/BubbleExperience"
import Profile from "./profile/profile"
import Image from "next/image"
import EnhancedSkillsSection from "./profile/enhanced-skills-section"

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
                tech: "Supabase, Next.js, Tailwind CSS",
                description:
                    "A comprehensive e-learning platform with user authentication, course management, and payment integration",
                image: "/rishabh-project-two.png",
                github:"github.com/chaudhary-rishabh/sakmap",
                preview:"https://sakmap.com/",
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
                description: "Modern  e-commerce management with real-time analytics and inventory control",
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
                name: "Task Management App",
                tech: "React Native, Firebase, Redux",
                description:
                    "Cross-platform mobile app for team collaboration and project management with offline capabilities",
                image: "/rishabh-project-one.png",
                features: ["Cross-platform Mobile App", "Offline Synchronization", "Team Collaboration", "Project Templates"],
                testimonial: {
                    text: "The app has transformed how our team manages projects. Clean interface, robust functionality, and excellent performance across all devices.",
                    author: "Lisa Rodriguez",
                    role: "Team Lead at StartupHub",
                },
                icon: Smartphone,
            },
        ],
    },
    {
        id: "skills",
        label: "About",
        icon: Code,
        title: "Problem-Solving Specialist",
        subtitle: "Mastering cutting-edge technologies and frameworks",
        projects: [
            {
                id: 1,
                name: "Full-Stack Development",
                tech: "React, Node.js, PostgreSQL",
                description: "Comprehensive web application development using modern JavaScript frameworks and databases",
                image: "/api/placeholder/600/400",
                features: ["React & Next.js Development", "RESTful API Design", "Database Optimization", "Cloud Deployment"],
                testimonial: {
                    text: "Impressive depth of knowledge across the full stack. The ability to adapt to new technologies quickly and implement best practices consistently is remarkable.",
                    author: "Michael Chen",
                    role: "Tech Lead at InnovateLab",
                },
                icon: Code,
            },
            {
                id: 2,
                name: "Cloud Architecture",
                tech: "AWS, Docker, Kubernetes",
                description: "Scalable cloud solutions with containerization and microservices architecture",
                image: "/api/placeholder/600/400",
                features: ["AWS Services Integration", "Container Orchestration", "Microservices Design", "CI/CD Pipeline"],
                testimonial: {
                    text: "Expert-level cloud architecture skills. The solutions are always scalable, secure, and perfectly suited for our growing business needs.",
                    author: "Jennifer Park",
                    role: "CTO at CloudVenture",
                },
                icon: Database,
            },
            {
                id: 3,
                name: "Performance Optimization",
                tech: "Webpack, Lighthouse, CDN",
                description: "Web performance optimization and speed enhancement techniques for better user experience",
                image: "/api/placeholder/600/400",
                features: ["Bundle Optimization", "Performance Monitoring", "CDN Implementation", "Core Web Vitals"],
                testimonial: {
                    text: "Exceptional performance optimization skills. Our website speed improved by 300% and user engagement increased significantly.",
                    author: "David Kim",
                    role: "Marketing Director at SpeedTech",
                },
                icon: Zap,
            },
        ],
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

    // Refs for smooth scrolling
    const carouselRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const portfolioRef = useRef<HTMLDivElement>(null)
    const skillsRef = useRef<HTMLDivElement>(null)
    const certificationRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)


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
    }, [activeSection])

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);

        const refs = {
            portfolio: portfolioRef,
            skills: skillsRef,
            certification: certificationRef,
            experience: experienceRef,
        }

        const targetRef = refs[sectionId as keyof typeof refs];

        // Delay scrolling to ensure section content is rendered
        setTimeout(() => {
            if (targetRef?.current) {
                targetRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: window.innerWidth <= 640 ? "start" : "center",
                });
            }
        }, 100); // delay by 100ms to allow DOM updates
    };
    
    
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);
    if (!hasMounted) return null;

    const renderSectionContent = (sectionId: string, projectIndex?: number) => {
        switch (sectionId) {
            case "skills":
                return <Profile />;
            case "certification":
                return <CertificationSection />;
            case "experience":
                return <BubbleExperience />;
            default:
                const currentSection = sections.find((section) => section.id === sectionId);
                // const currentProject = currentSection?.projects?.[0];
                const currentProject = currentSection?.projects?.[projectIndex ?? 0];
                return currentProject ? (
                    <motion.div
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* White Container - Only this part changes */}
                        <div className="bg-white p-5 shadow-lg shadow-orange-200 rounded-3xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentProject.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="mb-6 sm:mb-4">
                                        <div
                                            className="w-full h-64 rounded-3xl bg-gradient-to-br from-white to-white shadow-2xl shadow-orange-200/60 mb-6 flex items-center justify-center"
                                        >
                                            {/* image here */}
                                            <div className="w-full h-full border border-orange-500 rounded-3xl bg-white/10 backdrop-blur-xs">
                                                <Image
                                                    src={currentProject.image}
                                                    height={600}
                                                    width={600}
                                                    alt="Rishabh Profile"
                                                    className="w-full h-full mx-auto rounded-3xl object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-gray-600 gap-5 flex flex-row text-sm sm:text-base font-medium">
                                            <div className="flex flex-col text-sm sm:text-base font-medium">
                                                <div className="text-gray-700 flex flex-row text-sm sm:text-base font-medium mb-4">
                                                    {currentProject.name}
                                                </div>
                                                <div className="text-orange-600 flex flex-row text-sm sm:text-base font-medium mb-4">
                                                    {currentProject.tech}
                                                </div>
                                            </div>
                                            <span className="">
                                                <motion.a
                                                    key={1}
                                                    href={"#"}
                                                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group relative p-4 bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-100/50"
                                                    whileHover={{ scale: 1.1, y: -4 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors" />
                                                    <a href={currentProject.preview} target="_blank" className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></a>
                                                </motion.a>
                                            </span>
                                            <span className="">
                                                <motion.a
                                                    key={1}
                                                    href={"#"}
                                                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group relative p-4 bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-100/50"
                                                    whileHover={{ scale: 1.1, y: -4 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Github className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors" />
                                                    <a href={currentProject.github} target="_blank" className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></a>
                                                </motion.a>
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{currentProject.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons for Portfolio */}
                        {currentSection.projects.length > 1 && (
                            <>
                                {/* Previous Project Button */}
                                <motion.div
                                    className="absolute bottom-3 -right-2  w-14 h-14 bg-white rounded-full shadow-lg shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/80 flex items-center justify-center group cursor-pointer animate-pulse outline-double outline-orange-700 hover:animate-pulse"
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handlePrevProject}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                                >
                                    <ChevronUp className="w-12 h-12 text-orange-500 transition-colors" />
                                </motion.div>

                                {/* Next Project Button */}
                                <motion.div
                                    className="absolute -bottom-12 -right-2 w-14 h-14 bg-white rounded-full shadow-lg shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/80 flex items-center justify-center group cursor-pointer animate-pulse outline-double outline-orange-700 hover:animate-pulse"
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleNextProject}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                                >
                                    <ChevronDown className="w-12 h-12 text-orange-500 transition-colors" />
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                ) : null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400/50 via-white to-orange-200/90 font-sans">
            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* landing main page */}
                <LandingImage />

                {/* Horizontal Carousel Auto */}
                <HorizontalCarousel />

                {/* Navigation Tabs */}
                <motion.div
                    className="fixed -bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[60%] max-w-5xl flex shadow-2xl shadow-orange-500/60 bg-white/20 backdrop-blur-sm py-3 rounded-3xl justify-around sm:gap-4 mb-12 sm:mb-16 z-50"
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
                                onClick={() => scrollToSection(section.id)}
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

                {/* Content Sections */}
                <div ref={contentRef} className="space-y-32 py-16">
                    {/* Portfolio Section */}
                    <div ref={portfolioRef} className="min-h-screen flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="portfolio"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="flex justify-center w-full sm:w-2/5 mx-auto items-center"
                                >
                                {renderSectionContent("portfolio", currentProjectIndex)}
                                </motion.div>
                            </AnimatePresence>
                    </div>

                    {/* Skills Section */}
                    <div ref={skillsRef} className="min-h-screen flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="flex justify-center w-full sm:w-2/5 mx-auto items-center"
                                >
                                    {renderSectionContent("skills")}
                                </motion.div>
                            </AnimatePresence>
                    </div>

                    {/* Certification Section */}
                    <div ref={certificationRef} className="min-h-screen flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="certification"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="w-full"
                                >
                                {renderSectionContent("certification")}
                                </motion.div>
                            </AnimatePresence>
                    </div>

                    {/* Experience Section */}
                    <div ref={experienceRef} className="min-h-screen flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="w-full"
                                >
                                    {renderSectionContent("experience")}
                                </motion.div>
                            </AnimatePresence>
                    </div>
                </div>
                <EnhancedSkillsSection />

                <ContactForm />

                {/* socials */}
                <motion.div className="pt-6 mx-auto flex justify-center" variants={itemVariants}>
                    <div className="flex space-x-4">
                        {[
                            { icon: Github, href: "https://github.com/chaudhary-rishabh", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/rishabh029/", label: "LinkedIn" },
                            { icon: ExternalLink, href: "#", label: "Portfolio" },
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
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Start a Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
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
