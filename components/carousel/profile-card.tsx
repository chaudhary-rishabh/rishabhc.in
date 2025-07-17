"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export interface ProfileData {
    id: number
    company: string
    image: string
    bgColor: string
    Link: string
}

interface ProfileCardProps {
    profile: ProfileData
}

export default function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <div className="flex-shrink-0 rounded-2xl w-28 h-32 mx-2 flex items-center justify-center">
            <div className="bg-white rounded-2xl overflow-hidden h-full w-full shadow-lg border border-orange-100/50">
                {/* Profile Image Section - Only this remains */}
                <div
                    className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50"
                    style={{
                        backgroundImage: `url(${profile.image})`,
                        backgroundSize: "80% 80%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Decorative Lines */}
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-full h-0.5 bg-orange-400"
                                style={{ top: `${25 + i * 20}%` }}
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Company Badge with Link - Positioned at top */}
                    <a href={profile.Link} target="_blank">
                        <motion.div
                            className="absolute top-2 left-2 right-2 flex items-center justify-between bg-black/60 rounded-lg backdrop-blur-sm text-white px-2 py-1 text-xs font-medium"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="truncate">{profile.company}</span>
                            <motion.div whileHover={{ scale: 1.1, rotate: 15 }} transition={{ duration: 0.2 }}>
                                <ExternalLink className="w-3 h-3 cursor-pointer hover:text-orange-400 transition-colors flex-shrink-0 ml-1" />
                            </motion.div>
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    )
}
