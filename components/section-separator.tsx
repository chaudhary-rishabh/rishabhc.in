"use client"

import { motion } from "framer-motion"

interface SectionSeparatorProps {
    className?: string
}

export default function SectionSeparator({ className = "" }: SectionSeparatorProps) {
    return (
        <div className={`relative w-3/4 mx-auto py-8 ${className}`}>
            {/* Main separator line */}
            <motion.div
                className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
                className="relative w-full mt-4 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </div>
    )
}
