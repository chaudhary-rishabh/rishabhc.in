"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, BookOpen, User, Mail, Menu } from "lucide-react"

const navigationItems = [
    {
        id: "blog",
        label: "Blog",
        icon: BookOpen,
        href: "/blog",
    },
    {
        id: "about",
        label: "About",
        icon: User,
        href: "/about",
    },
    {
        id: "contact",
        label: "Contact",
        icon: Mail,
        href: "/contact",
    },
]

export default function StickyNavigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed top-4 right-96 transform -translate-x-1/2 z-50">
            <motion.div
                className="relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Main trigger button */}
                <motion.button
                    onClick={toggleMenu}
                    className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg border-2 border-white/20 backdrop-blur-sm"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 30px rgba(251, 146, 60, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        boxShadow: [
                            "0 4px 20px rgba(251, 146, 60, 0.3)",
                            "0 8px 30px rgba(251, 146, 60, 0.5)",
                            "0 4px 20px rgba(251, 146, 60, 0.3)",
                        ],
                    }}
                    transition={{
                        boxShadow: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        },
                    }}
                >
                    {/* Glowing background effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-md opacity-60"
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

                    {/* Menu icon when closed, arrow when open */}
                    <motion.div
                        className="relative z-10"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isOpen ? <ChevronDown className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                    </motion.div>

                    {/* Ripple effect on click */}
                    <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.button>

                {/* Navigation items */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute top-16 right-0 transform -translate-x-1/2"
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Background container */}
                            <motion.div
                                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-200/50"
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col gap-2">
                                    {navigationItems.map((item, index) => (
                                        <motion.a
                                            key={item.id}
                                            href={item.href}
                                            className="group flex items-center gap-2 px-2 py-1 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/30 hover:from-orange-100 hover:to-red-100 transition-all duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0 4px 20px rgba(251, 146, 60, 0.2)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Icon container */}
                                            <motion.div
                                                className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md"
                                                whileHover={{
                                                    rotate: [0, -10, 10, 0],
                                                    transition: { duration: 0.5 },
                                                }}
                                                animate={{
                                                    boxShadow: [
                                                        "0 2px 10px rgba(251, 146, 60, 0.3)",
                                                        "0 4px 15px rgba(251, 146, 60, 0.5)",
                                                        "0 2px 10px rgba(251, 146, 60, 0.3)",
                                                    ],
                                                }}
                                                transition={{
                                                    boxShadow: {
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: "easeInOut",
                                                        delay: index * 0.3,
                                                    },
                                                }}
                                            >
                                                <item.icon className="w-5 h-5 text-white" />
                                            </motion.div>

                                            {/* Label */}
                                            <motion.span
                                                className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
                                                animate={{
                                                    color: ["#1f2937", "#ea580c", "#1f2937"],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: index * 0.5,
                                                }}
                                            >
                                                {item.label}
                                            </motion.span>

                                            {/* Hover arrow */}
                                            <motion.div
                                                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                initial={{ x: -10 }}
                                                whileHover={{ x: 0 }}
                                            >
                                                <ChevronDown className="w-4 h-4 text-orange-500 rotate-[-90deg]" />
                                            </motion.div>
                                        </motion.a>
                                    ))}
                                </div>

                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Background blur overlay when open */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleMenu}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
