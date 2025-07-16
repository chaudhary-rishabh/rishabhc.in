"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

const skillCategories = [
    {
        title: "Design",
        skills: ["Figma", "Eraser", "Swagger"],
        delay: 0,
    },
    {
        title: "Develop",
        skills: ["MERN", "PERN", "Redux", "Zustand", "Next.js"],
        delay: 2,
    },
    {
        title: "Deploy",
        skills: ["K8S", "AWS", "Vercel", "Docker", "CI|CD"],
        delay: 4,
    },
]

export default function EnhancedSkillsSection() {
    const [animationKey, setAnimationKey] = useState(0)
    const [visibleItems, setVisibleItems] = useState<string[]>([])

    useEffect(() => {
        const sequence = async () => {
            setVisibleItems([])

            for (let i = 0; i < skillCategories.length; i++) {
                // Show category title first
                setTimeout(() => {
                    setVisibleItems((prev) => [...prev, `title-${i}`])
                }, i * 2000)

                // Show dotted line after title
                setTimeout(
                    () => {
                        setVisibleItems((prev) => [...prev, `line-${i}`])
                    },
                    i * 2000 + 400,
                )

                // Show skills after line
                setTimeout(
                    () => {
                        setVisibleItems((prev) => [...prev, `skills-${i}`])
                    },
                    i * 2000 + 1000,
                )
            }
        }

        sequence()
    }, [])

    return (
        <div className="px-2 py-1 z-30 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto relative">
            <motion.div
                key={`skills-${animationKey}`}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Glowing background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl blur-xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-orange-200/50 shadow-xl min-h-[280px]">
                    <AnimatePresence mode="sync">
                        {skillCategories.map((category, categoryIndex) => (
                            <div key={`category-${animationKey}-${categoryIndex}`} className="mb-8 last:mb-0 relative">
                                {/* Category title */}
                                {visibleItems.includes(`title-${categoryIndex}`) && (
                                    <motion.div
                                        className="flex items-center gap-2 mb-4"
                                        initial={{ opacity: 0, x: -30, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 30, scale: 0.8 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <motion.h3
                                            className="text-gray-800 font-bold text-base md:text-lg capitalize"
                                            animate={{
                                                color: ["#1f2937", "#ea580c", "#dc2626", "#ea580c", "#1f2937"],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                            }}
                                        >
                                            {category.title}
                                        </motion.h3>
                                    </motion.div>
                                )}

                                {/* Custom curved dotted line with arrow */}
                                {visibleItems.includes(`line-${categoryIndex}`) && (
                                    <motion.div
                                        className="absolute left-0 top-8 w-32 h-16"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
                                            {/* Glowing effect */}
                                            <motion.path
                                                d="M 0 0 Q 0 20 20 20 Q 40 20 60 20"
                                                stroke="url(#glowGradient)"
                                                strokeWidth="3"
                                                fill="none"
                                                strokeDasharray="4 4"
                                                filter="blur(2px)"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />

                                            {/* Main dotted line */}
                                            <motion.path
                                                d="M 0 0 Q 0 20 20 20 Q 40 20 60 20"
                                                stroke="url(#orangeGradient)"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="3 3"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />

                                            {/* Arrow at the end */}
                                            <motion.g
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1, duration: 0.5 }}
                                            >
                                                <motion.circle
                                                    cx="60"
                                                    cy="20"
                                                    r="8"
                                                    fill="url(#arrowGradient)"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        filter: [
                                                            "drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))",
                                                            "drop-shadow(0 0 15px rgba(251, 146, 60, 0.8))",
                                                            "drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))",
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                <ChevronRight
                                                    className="w-4 h-4 text-white"
                                                    style={{
                                                        position: "absolute",
                                                        left: "52px",
                                                        top: "12px",
                                                        pointerEvents: "none",
                                                    }}
                                                />
                                            </motion.g>

                                            {/* Gradient definitions */}
                                            <defs>
                                                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#ea580c" />
                                                    <stop offset="50%" stopColor="#f97316" />
                                                    <stop offset="100%" stopColor="#dc2626" />
                                                </linearGradient>
                                                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                                                </linearGradient>
                                                <radialGradient id="arrowGradient">
                                                    <stop offset="0%" stopColor="#f97316" />
                                                    <stop offset="100%" stopColor="#ea580c" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </motion.div>
                                )}

                                {/* Skills container */}
                                {visibleItems.includes(`skills-${categoryIndex}`) && (
                                    <motion.div
                                        className="ml-16 mt-2"
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <motion.div
                                            className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/60 rounded-xl p-3 shadow-lg"
                                            animate={{
                                                boxShadow: [
                                                    "0 4px 15px rgba(251, 146, 60, 0.1)",
                                                    "0 8px 25px rgba(251, 146, 60, 0.2)",
                                                    "0 4px 15px rgba(251, 146, 60, 0.1)",
                                                ],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <motion.span
                                                        key={`skill-${animationKey}-${categoryIndex}-${skillIndex}`}
                                                        className="inline-block px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg text-xs md:text-sm font-medium border border-orange-300/50 shadow-sm"
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.6,
                                                            y: 15,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: skillIndex * 0.1,
                                                            ease: "easeOut",
                                                            type: "spring",
                                                            stiffness: 200,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            boxShadow: "0 4px 20px rgba(251, 146, 60, 0.3)",
                                                            y: -2,
                                                            transition: { duration: 0.2 },
                                                        }}
                                                    >
                                                        <motion.span
                                                            animate={{
                                                                backgroundImage: [
                                                                    "linear-gradient(45deg, #ea580c, #dc2626)",
                                                                    "linear-gradient(45deg, #f97316, #ea580c)",
                                                                    "linear-gradient(45deg, #dc2626, #f97316)",
                                                                    "linear-gradient(45deg, #ea580c, #dc2626)",
                                                                ],
                                                            }}
                                                            transition={{
                                                                duration: 3,
                                                                repeat: Number.POSITIVE_INFINITY,
                                                                delay: skillIndex * 0.2,
                                                            }}
                                                            className="bg-clip-text text-transparent text-xs bg-gradient-to-r from-orange-600 to-red-600"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </AnimatePresence>

                    {/* Enhanced decorative elements */}
                    <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 1, 0.5],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </div>
            </motion.div>
        </div>
    )
}