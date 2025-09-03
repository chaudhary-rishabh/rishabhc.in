"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Server, Cloud, Globe, Layers } from "lucide-react"
import Image from "next/image"
import {
    Sparkles,
} from "lucide-react"
import SkillsText from "./SkillsText"
import StickyNavigation from "./sticky-navigation"

const sparkles = [
    { id: 1, size: "w-2 h-2 md:w-3 md:h-3", delay: 0 },
    { id: 2, size: "w-1 h-1 md:w-2 md:h-2", delay: 0.5 },
    { id: 3, size: "w-3 h-3 md:w-4 md:h-4", delay: 1 },
    { id: 4, size: "w-1 h-1 md:w-2 md:h-2", delay: 1.5 },
]

export default function LandingImage() {
    const [animationKey, setAnimationKey] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Only runs on client
        const checkWidth = () => setIsMobile(window.innerWidth < 768)
        checkWidth() // check on mount
        window.addEventListener("resize", checkWidth)

        const interval = setInterval(() => {
            setAnimationKey((prev) => prev + 1)
        }, 500000)

        return () => {
            clearInterval(interval)
            window.removeEventListener("resize", checkWidth)
        }
    }, [])

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
    return (
        <div className="h-4/5 sm:h-screen sm:w-4/5 mx-auto mb-5 flex items-center rounded-3xl justify-center p-2 md:p-4 overflow-hidden">
            <div className="mt-5 sm:-mt-32 relative w-full h-full flex items-center justify-center">
                <motion.div variants={itemVariants} className="mb-[580px] z-50">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2 rounded-2xl border border-orange-200/50 mb-8">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span className="text-orange-600 font-medium text-sm sm:text-md">Hi, I&#39;m Rishabh | Full Stack Engineer</span>
                        {/* <StickyNavigation></StickyNavigation> */}
                    </div>
                </motion.div>
                {/* Sparkle decorations */}
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={`sparkle-${animationKey}-${sparkle.id}`}
                        className={`absolute ${sparkle.size} bg-gradient-to-r from-orange-400 to-red-400 rounded-full`}
                        style={{
                            top: `${Math.random() * 15 + 10}%`,
                            left: `${Math.random() * 15 + 10}%`,
                        }}
                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            rotate: 360,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            delay: sparkle.delay,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                        }}
                    />
                ))}

                {/* Additional sparkles on the right */}
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={`sparkle-right-${animationKey}-${sparkle.id}`}
                        className={`absolute ${sparkle.size} bg-gradient-to-r from-red-400 to-orange-400 rounded-full`}
                        style={{
                            top: `${Math.random() * 15 + 70}%`,
                            right: `${Math.random() * 15 + 10}%`,
                        }}
                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            rotate: -360,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            delay: sparkle.delay + 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                        }}
                    />
                ))}

                {/* Central profile image */}
                <motion.div
                    key={`center-${animationKey}`}
                    style={{ borderRadius: "40px" }}
                    className="absolute shadow-2xl mb-40 shadow-orange-500/0 rounded-3xl top-6/12 left-6/12 lg:top-8/12 lg:left-8/12 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xs"
                    initial={{
                        opacity: 0,
                        filter: "blur(4px)",
                        scale: 0.8,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: "easeOut",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-[40px] opacity-30 pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch' seed='7'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            mixBlendMode: "color-burn",
                        }}
                    />

                    {/* Shimmer Layer */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-60 animate-shimmer pointer-events-none" />

                    <div className="relative">
                        <motion.div
                            className="w-72 h-96 md:w-48 md:h-52 lg:w-96 lg:h-96 rounded-3xl bg-white/10 backdrop-blur-xs p-1"
                            style={{borderRadius: "40px"}}
                        >
                            <div className="w-full h-full rounded-3xl bg-white/10 backdrop-blur-xs p-1 md:p-2" style={{ borderRadius: "40px" }}>
                                <Image
                                    height={300}
                                    width={400}
                                    src="/rishabh profile casual2.png"
                                    alt="Rishabh Profile"
                                    className="w-48 h-2/4 mx-auto rounded-3xl object-cover"
                                    style={{ borderRadius: "40px" }}
                                />
                            </div>
                            <SkillsText />
                            <ul className="text-gray-800 p-2 mx-auto font-medium shadow-none text-xs md:text-sm leading-relaxed list-disc list-inside">
                                <li>Expertise in Full-Stack Development</li>
                                <li>Proficient in DevOps practices and CI/CD</li>
                                <li>AI-powered web applications using LLM</li>
                            </ul>

                        </motion.div>
                    </div>
                </motion.div>


                {/* Large intro boxes */}
                {/* Left bottom box */}
                <motion.div
                    key={`intro-left-${animationKey}`}
                    className="absolute hidden sm:hidden bottom-4 left-2 md:bottom-8 md:left-4 z-20"
                    initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        scale: 0.8,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="bg-white/95 mb-[530px] sm:mb-96 sm:ml-36 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-orange-200 max-w-[200px] md:max-w-xs"
                        animate={{
                            y: [0, -8, 0],
                            boxShadow: [
                                "0 15px 30px rgba(0,0,0,0.1)",
                                "0 20px 40px rgba(251,146,60,0.2)",
                                "0 15px 30px rgba(0,0,0,0.1)",
                            ],
                        }}
                        transition={{
                            y: {
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            },
                            boxShadow: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            },
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                            <div className="p-1 md:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md md:rounded-lg">
                                <Server className="w-3 h-3 md:w-5 md:h-5 text-white" />
                            </div>
                            <div className="w-1 h-1 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-gray-800 font-medium text-xs md:text-sm leading-relaxed">
                            Building Scalable Web Apps
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right top box */}
                <motion.div
                    key={`intro-right-${animationKey}`}
                    className="absolute top-4 md:top-4 md:right-32 z-20"
                    initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        scale: 0.8,
                        y: -30,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="bg-white/95 mt-[370px] sm:mt-[410px] mx-auto backdrop-blur-sm rounded-2xl md:rounded-3xl px-3 py-2 md:px-4 md:py-3 shadow-md shadow-gray-500 border border-orange-200 w-[340px] md:max-w-md"
                        animate={{
                            y: [0, -6, 0],
                            boxShadow: [
                                "0 15px 30px rgba(0,0,0,0.1)",
                                "0 20px 40px rgba(251,146,60,0.2)",
                                "0 15px 30px rgba(0,0,0,0.1)",
                            ],
                        }}
                        transition={{
                            y: {
                                duration: 3.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                            },
                            boxShadow: {
                                duration:3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                            },
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                            <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-md md:rounded-lg">
                                <Layers className="w-3 h-3 md:w-3 md:h-3 text-white" />
                            </div>
                            <div className="w-1 h-1 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <a href="https://pairskill.in" className="text-gray-800 cursor-pointer font-medium text-xs md:text-sm leading-relaxed">
                            Turning ideas into products.Building pairskill.in
                            
                        </a>
                    </motion.div>
                </motion.div>


            </div>
        </div>
    )
}