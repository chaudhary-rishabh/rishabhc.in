"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProfileCard, { type ProfileData } from "./profile-card"

const profilesData: ProfileData[] = [
    {
        id: 1,
        name: "Josh Burns Tech",
        role: "SQL Server DBA",
        company: "Sakmap",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
        id: 2,
        name: "Chiradeep Patra",
        role: "Life Coach (ICF - CCE)",
        company: "E-Com MLM",
        image: "/rishabh-project-one.png",
        bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
        id: 3,
        name: "Vineet Joglekar",
        role: "Engineering Manager",
        company: "PairSkill",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
        id: 4,
        name: "Vatsal Nahata",
        role: "Career Guidance",
        company: "Maidnow",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
    },
    {
        id: 5,
        name: "Vanesa Fernanda",
        role: "Product Marketing",
        company: "Glace",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
        id: 6,
        name: "Mitchell Clements",
        role: "Design Leader",
        company: "DevRace",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
        id: 7,
        name: "Vani Gupta",
        role: "Marketing Consultant",
        company: "useSpace",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
        id: 8,
        name: "Sarah Johnson",
        role: "UX Designer",
        company: "MileDash",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
]

export default function HorizontalCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (!scrollRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }

    useEffect(() => {
        checkScrollButtons()
        const scrollContainer = scrollRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScrollButtons)
            return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
        }
    }, [])

    const scrollLeft = () => {
        if (!scrollRef.current) return
        const cardWidth = 140 // Reduced width for smaller cards
        scrollRef.current.scrollBy({
            left: -cardWidth,
            behavior: "smooth",
        })
    }

    const scrollRight = () => {
        if (!scrollRef.current) return
        const cardWidth = 140 // Reduced width for smaller cards
        scrollRef.current.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto -mt-48 sm:-mt-72 mb-24">
            {/* Left Navigation Button */}
            <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${canScrollLeft
                    ? "bg-gradient-to-r from-white via-orange-100 to-white border-white hover:from-white hover:via-orange-200 hover:to-white cursor-pointer"
                        : "bg-gray-300/50 border-gray-400/20 cursor-not-allowed opacity-50"
                    }`}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <ChevronLeft className={`w-6 h-6 ${canScrollLeft ? "text-white" : "text-gray-400"}`} />
                </div>

                {/* Glowing background effect */}
                {canScrollLeft && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-md opacity-60 -z-10"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                )}
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${canScrollRight
                    ? "bg-gradient-to-r from-white via-orange-100 to-white border-white hover:from-white hover:via-orange-200 hover:to-white cursor-pointer"
                        : "bg-gray-300/50 border-gray-400/20 cursor-not-allowed opacity-50"
                    }`}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <ChevronRight className={`w-6 h-6 ${canScrollRight ? "text-white" : "text-gray-400"}`} />
                </div>

                {/* Glowing background effect */}
                {canScrollRight && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-md opacity-60 -z-10"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                )}
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide rounded-3xl gap-4 px-16 justify-center items-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {profilesData.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 gap-2">
                {profilesData.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-orange-300"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
