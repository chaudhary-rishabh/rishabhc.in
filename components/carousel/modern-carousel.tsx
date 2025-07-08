"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CarouselSlide from "./carousel-slide"

const slides = [
    {
        id: 1,
        image: "/placeholder.svg?height=600&width=400",
        title: "bloom",
    },
    {
        id: 2,
        image: "/placeholder.svg?height=600&width=400",
        title: "vivid",
    },
    {
        id: 3,
        image: "/placeholder.svg?height=600&width=400",
        title: "petaled",
    },
    {
        id: 4,
        image: "/placeholder.svg?height=600&width=400",
        title: "serene",
    },
    {
        id: 5,
        image: "/placeholder.svg?height=600&width=400",
        title: "radiant",
    },
]

export default function ModernCarousel() {
    const [currentIndex, setCurrentIndex] = useState(2) // Start with middle slide active
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const getVisibleSlides = () => {
        const visibleSlides = []
        const totalSlides = slides.length

        // Show 3 slides: previous, current, next
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + totalSlides) % totalSlides
            visibleSlides.push({
                ...slides[index],
                position: i,
                isActive: i === 0,
            })
        }

        return visibleSlides
    }

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            </div> */}

            <div className="relative w-full max-w-7xl mx-auto px-4">
                {/* Navigation Arrows */}
                <motion.button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white/30 transition-all duration-300 shadow-lg"
                    onClick={goToPrevious}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </motion.button>

                <motion.button
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white/30 transition-all duration-300 shadow-lg"
                    onClick={goToNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </motion.button>

                {/* Carousel Container */}
                <div className="flex items-center justify-center gap-4 md:gap-8 py-6">
                    <AnimatePresence mode="wait">
                        {getVisibleSlides().map((slide) => (
                            <motion.div
                                key={`${slide.id}-${slide.position}`}
                                initial={{ opacity: 0, x: slide.position * 100 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: slide.isActive ? 1 : 0.8,
                                }}
                                exit={{ opacity: 0, x: slide.position * -100 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className={slide.position === 0 ? "order-2" : slide.position === -1 ? "order-1" : "order-3"}
                            >
                                <CarouselSlide
                                    image={slide.image}
                                    title={slide.title}
                                    isActive={slide.isActive}
                                    onClick={() => goToSlide(slides.findIndex((s) => s.id === slide.id))}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-orange-500 shadow-lg scale-125" : "bg-gray-400/40 hover:bg-white/60"
                                }`}
                            onClick={() => goToSlide(index)}
                            whileHover={{ scale: index === currentIndex ? 1.25 : 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
