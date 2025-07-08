"use client"

import { motion } from "framer-motion"

interface CarouselSlideProps {
    image: string
    title: string
    isActive: boolean
    onClick: () => void
}

export default function CarouselSlide({ image, title, isActive, onClick }: CarouselSlideProps) {
    return (
        <motion.div
            className={`relative cursor-pointer transition-all duration-500 ease-out ${isActive ? "w-80 h-96 md:w-96 md:h-[28rem] z-20" : "w-48 h-72 md:w-64 md:h-80 z-10 opacity-70 hover:opacity-90"
                }`}
            onClick={onClick}
            whileHover={{ scale: isActive ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            layout
        >
            <div
                className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${isActive ? "shadow-purple-500/20" : "shadow-black/20"
                    }`}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                        backgroundImage: `url(${image})`,
                        transform: isActive ? "scale(1)" : "scale(1.1)",
                    }}
                />

                {/* Gradient Overlay */}
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ${isActive
                            ? "bg-gradient-to-br from-orange-500/30 via-white-500/20 to-orange-500/30"
                            : "bg-gradient-to-br from-orange-500/40 via-blue-500/30 to-orange-500/40"
                        }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h2
                        className={`font-light tracking-wider transition-all duration-500 ${isActive ? "text-4xl md:text-6xl text-white" : "text-2xl md:text-3xl text-white/90"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* Shine Effect */}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    />
                )}
            </div>
        </motion.div>
    )
}
