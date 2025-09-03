"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProfileCard, { type ProfileData } from "./profile-card"

const profilesData: ProfileData[] = [
    {
        id: 1,
        company: "FlexAI",
        image: "/rishabh-project-flexai.png",
        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
        Link: "https://www.flexai.chat/",
    },
    {
        id: 2,
        company: "MLM",
        image: "/rishabh_project_mlm.png",
        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
        Link: "https://mlm-spices.vercel.app/",
    },
    {
        id: 3,
        company: "Sakmap",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
        Link: "https://sakmap.com",
    },
    {
        id: 4,
        company: "E-Commerce",
        image: "/rishabh_project_yogice.png",
        bgColor: "bg-gradient-to-br from-green-500 to-green-600",
        Link: "https://yogice.in",
    },
    {
        id: 5,
        company: "Maidnow",
        image: "/rishabh_project_maidorder.png",
        bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
        Link: "https://maido-frontend.vercel.app",
    },
    {
        id: 6,
        company: "Glace",
        image: "/rishabh_project_glace.png",
        bgColor: "bg-gradient-to-br from-red-500 to-red-600",
        Link: "#",
    },
    {
        id: 7,
        company: "AI Task Manager",
        image: "/rishabh_project_dailytodo.png",
        bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
        Link: "#",
    },
    {
        id: 8,
        company: "CRM",
        image: "/rishabh_project_crm.png",
        bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
        Link: "#",
    },
    {
        id: 9,
        company: "MileDash",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
        Link: "#",
    },
]

export default function HorizontalCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        const el = scrollRef.current
        if (!el) return
        const { scrollLeft, scrollWidth, clientWidth } = el
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }

    const getCardWidth = () => {
        const el = scrollRef.current?.querySelector('[data-card]') as HTMLElement | null
        if (!el) return 140
        // include gap (Tailwind gap-4 = 1rem = 16px)
        return el.offsetWidth + 16
    }

    const scrollLeftHandler = () => {
        const scroller = scrollRef.current
        if (!scroller) return
        scroller.scrollBy({ left: -getCardWidth(), behavior: "smooth" })
    }

    const scrollRightHandler = () => {
        const scroller = scrollRef.current
        if (!scroller) return
        scroller.scrollBy({ left: getCardWidth(), behavior: "smooth" })
    }

    useEffect(() => {
        checkScrollButtons()
        const scroller = scrollRef.current
        if (!scroller) return
        scroller.addEventListener("scroll", checkScrollButtons, { passive: true })
        return () => scroller.removeEventListener("scroll", checkScrollButtons)
    }, [])

    return (
        <div className="relative w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto -mt-48 sm:-mt-72 mb-24">
            {/* Left Navigation */}
            <button
                onClick={scrollLeftHandler}
                disabled={!canScrollLeft}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${canScrollLeft
                        ? "bg-gradient-to-r from-white via-orange-100 to-white border-white hover:via-orange-200 cursor-pointer"
                        : "bg-gray-300/50 border-gray-400/20 cursor-not-allowed opacity-50"
                    }`}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <ChevronLeft className={`w-6 h-6 ${canScrollLeft ? "text-white" : "text-gray-400"}`} />
                </div>
                {canScrollLeft && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-md opacity-60 -z-10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}
            </button>

            {/* Right Navigation */}
            <button
                onClick={scrollRightHandler}
                disabled={!canScrollRight}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${canScrollRight
                        ? "bg-gradient-to-r from-white via-orange-100 to-white border-white hover:via-orange-200 cursor-pointer"
                        : "bg-gray-300/50 border-gray-400/20 cursor-not-allowed opacity-50"
                    }`}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <ChevronRight className={`w-6 h-6 ${canScrollRight ? "text-white" : "text-gray-400"}`} />
                </div>
                {canScrollRight && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-md opacity-60 -z-10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                )}
            </button>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex flex-nowrap overflow-x-auto scrollbar-hide rounded-3xl gap-4 px-16"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {profilesData.map((profile) => (
                    <div key={profile.id} data-card className="shrink-0 flex-none w-[140px] sm:w-[180px]">
                        <ProfileCard profile={profile} />
                    </div>
                ))}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center mt-6 gap-2">
                {profilesData.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-orange-300"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                ))}
            </div>
        </div>
    )
  }
