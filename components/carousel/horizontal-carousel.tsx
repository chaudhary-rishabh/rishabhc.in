"use client"

import { useEffect, useRef } from "react"
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
        company: "E-Commerce",
        image: "/rishabh-project-one.png",
        bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
        id: 3,
        name: "Vineet Joglekar",
        role: "Engineering Manager",
        company: "Google",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
        id: 4,
        name: "Vatsal Nahata",
        role: "Career Guidance",
        company: "Ridgewood",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
    },
    {
        id: 5,
        name: "Vanesa Fernanda",
        role: "Product Marketing",
        company: "Microsoft",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
        id: 6,
        name: "Mitchell Clements",
        role: "Design Leader",
        company: "nCino",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
        id: 7,
        name: "Vani Gupta",
        role: "Marketing Consultant",
        company: "Ashoka University",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
        id: 8,
        name: "Sarah Johnson",
        role: "UX Designer",
        company: "Adobe",
        image: "/rishabh-project-two.png",
        bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
]

export default function HorizontalCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let animationId: number
        let scrollPosition = 0
        const scrollSpeed = 0.6

        const animate = () => {
            scrollPosition += scrollSpeed

            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0
            }

            scrollContainer.scrollLeft = scrollPosition
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId)
        }

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(animate)
        }

        scrollContainer.addEventListener("mouseenter", handleMouseEnter)
        scrollContainer.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            cancelAnimationFrame(animationId)
            scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
            scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    const duplicatedProfiles = [...profilesData, ...profilesData]

    return (
        <div
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide mb-24 rounded-3xl w-full sm:w-3/5 mx-auto -mt-44 sm:-mt-80"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
            {duplicatedProfiles.map((profile, index) => (
                <ProfileCard key={`${profile.id}-${index}`} profile={profile} />
            ))}
        </div>
    )
}
