"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AestheticLayoutProps {
    children: ReactNode
    className?: string
}

export default function AestheticLayout({ children, className = "" }: AestheticLayoutProps) {
    return (
        <div className={`w-full min-h-screen relative overflow-hidden ${className}`}>
            {/* Left side lines */}
            <div className="fixed left-80 hidden sm:block top-0 h-full w-8 z-10 pointer-events-none">
                {/* Main vertical line */}
                <motion.div
                    className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Horizontal connecting lines */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`left-line-${i}`}
                        className="absolute left-3 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"
                        style={{ top: `${25 + i * 25}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 + i * 0.3 }}
                    />
                ))}
            </div>

            {/* Right side lines */}
            <div className="fixed right-80 hidden sm:block top-0 h-full w-8 z-10 pointer-events-none">
                {/* Main vertical line */}
                <motion.div
                    className="absolute right-4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Horizontal connecting lines */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`right-line-${i}`}
                        className="absolute right-3 w-6 h-0.5 bg-gradient-to-l from-orange-400 to-transparent"
                        style={{ top: `${30 + i * 25}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.5 + i * 0.3 }}
                    />
                ))}
            </div>

            {/* Main content area with proper spacing */}
            <div className="relative">
                <div className="w-full">{children}</div>
            </div>

            {/* Bottom section separator line */}
            <div className="fixed bottom-0 left-0 right-0 h-16 z-10 pointer-events-none">
                {/* Main horizontal line */}
                <motion.div
                    className="absolute bottom-8 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                />
            </div>
        </div>
    )
}
