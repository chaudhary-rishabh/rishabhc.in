"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Building2, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

interface ExperienceData {
    id: number
    company: string
    position: string
    duration: string
    location: string
    description: string
    logo: string
    color: string
    achievements: string[]
    link?: string
}

const experienceData: ExperienceData[] = [
    {
        id: 1,
        company: "Alois Solution",
        position: "Full Stack Developer",
        duration: "2024 - Present",
        location: "Vadodara, IND",
        description:
            "Developed and Deployed Full Stack Web Applications using Nextjs, Node.js, and MySql.  Created Nextjs ERP, CRM, HRM application with Redux and Zustand and handling 1000+ tables in MySql Deployed using jenkins and github action.",
        logo: "/aloisImg.png",
        link: "https://aloissolution.com/",
        color: "from-orange-300 to-orange-600",
        achievements: ["20+ client projects", "98% satisfaction rate", "First e-commerce platform"],
    },
    {
        id: 2,
        company: "Appances Technologies",
        position: "MERN Stack Developer",
        duration: "2023 - 2024",
        location: "Vadodara, IND",
        description:
            "Developed responsive web applications and mobile-first designs in Reactjs with Redux/Recoil Stage Management. Deployed to AWS and Vercel. Collaborated with UX/UI teams to create intuitive user experiences.",
        logo: "/appanceImg.png",
        link: "https://appance.in/",
        color: "from-orange-300 to-orange-600",
        achievements: ["Built 15+ applications", "35% user engagement boost", "50% faster load times"],
    },
    {
        id: 3,
        company: "N10 TechnoSoft",
        position: "Full Stack Developer",
        duration: "2022 - 2023",
        location: "Ahmedabad, IND",
        description:
            "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
        logo: "/vercel.svg",
        link: "https://n10tech.com",
        color: "from-orange-300 to-orange-600",
        achievements: ["Led team of 5 developers", "40% performance improvement", "1M+ daily requests"],
    },
]

export default function BubbleExperience() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Spring animations for elastic effect
    const springConfig = { damping: 20, stiffness: 300, mass: 1 }
    const x = useSpring(0, springConfig)
    const scale = useSpring(1, springConfig)

    // Transform values for bubble effect
    const cardScale = useTransform(scale, [0.8, 1, 1.2], [0.9, 1, 1.1])
    const cardRotate = useTransform(x, [-100, 0, 100], [-2, 0, 2])

    const handleNavClick = (index: number) => {
        if (index === activeIndex) return

        setIsDragging(true)

        // Elastic animation effect
        const direction = index > activeIndex ? -1 : 1
        x.set(direction * 50)
        scale.set(0.95)

        setTimeout(() => {
            setActiveIndex(index)
            x.set(direction * -30)
            scale.set(1.05)

            setTimeout(() => {
                x.set(0)
                scale.set(1)
                setIsDragging(false)
            }, 200)
        }, 150)
    }

    const currentExperience = experienceData[activeIndex]

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return (
        <div className="w-full mx-auto p-4">
            {/* Main Experience Card */}
            <motion.div ref={containerRef} style={{ x, scale: cardScale, rotateY: cardRotate }} className="relative mb-8">
                <div
                    className={`relative overflow-hidden w-full rounded-3xl bg-gradient-to-br ${currentExperience.color} p-6 shadow-2xl`}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_70%)]" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative z-10"
                        >
                            {/* Main Content Card */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-5 mb-4 shadow-lg">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{currentExperience.company}</h3>
                                        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mt-1">
                                            <Calendar className="w-3 h-3" />
                                            {currentExperience.duration}
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed mb-3">{currentExperience.description}</p>

                                <div className="flex items-center gap-2 text-gray-500 text-xs">
                                    <MapPin className="w-3 h-3" />
                                    {currentExperience.location}
                                </div>
                            </div>

                            {/* Position Card */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                                <div className="flex items-center gap-3">
                                    <a href={currentExperience.link} target="_blank" className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                        <Image
                                            width={24}
                                            height={24}
                                            src={currentExperience.logo || "/placeholder.svg"}
                                            alt={`${currentExperience.company} logo`}
                                            className="w-6 h-6 rounded"
                                        />
                                    </a>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">{currentExperience.position}</h4>
                                        <p className="text-gray-600 text-xs">{currentExperience.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Bubble Navigation with Rope-like Connections */}
            <div className="relative">
                <div className={`bg-gradient-to-r from-orange-50 to-orange-200 rounded-3xl p-4 shadow-xl`}>
                    <div className="relative flex items-center justify-between">
                        {/* SVG for Rope-like Connections */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 20"
                            preserveAspectRatio="none"
                        >
                            {/* First rope connection */}
                            <motion.path
                                d="M 20 10 Q 35 5 50 10"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1"
                                fill="none"
                                strokeLinecap="round"
                                animate={{
                                    d: isDragging
                                        ? activeIndex === 0
                                            ? "M 20 10 Q 35 15 50 10"
                                            : activeIndex === 1
                                                ? "M 20 10 Q 35 5 50 10"
                                                : "M 20 10 Q 35 8 50 10"
                                        : "M 20 10 Q 35 8 50 10",
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                            {/* Second rope connection */}
                            <motion.path
                                d="M 50 10 Q 65 5 80 10"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1"
                                fill="none"
                                strokeLinecap="round"
                                animate={{
                                    d: isDragging
                                        ? activeIndex === 1
                                            ? "M 50 10 Q 65 15 80 10"
                                            : activeIndex === 2
                                                ? "M 50 10 Q 65 5 80 10"
                                                : "M 50 10 Q 65 8 80 10"
                                        : "M 50 10 Q 65 8 80 10",
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Connection nodes */}
                            <motion.circle
                                cx="35"
                                cy="8"
                                r="1"
                                fill="rgba(255,255,255,0.6)"
                                animate={{
                                    cy: isDragging ? (activeIndex === 0 ? 12 : 6) : 8,
                                    r: isDragging ? 1.5 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.circle
                                cx="65"
                                cy="8"
                                r="1"
                                fill="rgba(255,255,255,0.6)"
                                animate={{
                                    cy: isDragging ? (activeIndex === 2 ? 12 : 6) : 8,
                                    r: isDragging ? 1.5 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>

                        {experienceData.map((_, index) => {
                            const isActive = index === activeIndex
                            const isAdjacent = Math.abs(index - activeIndex) === 1

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => handleNavClick(index)}
                                    className={`relative z-10 rounded-2xl transition-all duration-300 flex items-center justify-center ${isActive
                                        ? "bg-white shadow-lg w-16 h-12"
                                        : isAdjacent
                                            ? "bg-white/80 w-12 h-10"
                                            : "bg-white/60 w-10 h-8"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: isActive ? 1 : isAdjacent ? 0.9 : 0.8,
                                        y: isDragging && isActive ? -3 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    {/* Company Logo/Icon */}
                                    <div className="flex items-center justify-center h-full">
                                        {isActive ? (
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                                                <div className="w-6 h-0.5 bg-gray-300 rounded-full" />
                                            </div>
                                        ) : (
                                            <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                        )}
                                    </div>

                                    {/* Elastic Bubble Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/20 rounded-2xl"
                                        animate={{
                                            scale: isDragging && isActive ? [1, 1.1, 1] : 1,
                                            opacity: isDragging && isActive ? [0.5, 0.8, 0.5] : 0,
                                        }}
                                        transition={{ duration: 0.6, repeat: isDragging ? 1 : 0 }}
                                    />
                                </motion.button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
