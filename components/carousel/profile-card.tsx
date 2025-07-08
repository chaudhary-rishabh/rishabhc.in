"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export interface ProfileData {
    id: number
    name: string
    role: string
    company: string
    image: string
    bgColor: string
}

interface ProfileCardProps {
    profile: ProfileData
}

export default function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <motion.div className="flex-shrink-0 rounded-2xl sm:w-56 w-44 h-44 md:w-80 mx-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <div className="bg-white rounded-2xl overflow-hidden h-full">
                {/* Profile Image Section */}
                <div
                    className={`relative h-48 flex items-center justify-center`}
                    style={{
                        backgroundImage: `url(${profile.image})`,
                        backgroundSize: '80% 80%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Decorative Lines */}
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="absolute w-full h-0.5 bg-white/30" style={{ top: `${20 + i * 15}%` }} />
                        ))}
                    </div>

                    {/* Company Badge */}
                    <div className="absolute w-full bottom-4 flex flex-row gap-2 bg-black/40 rounded-b-2xl backdrop-blur-sm text-white px-3 py-1 text-sm font-medium">
                        {profile.company}
                        <ExternalLink className="w-4 h-4 mt-1 cursor-pointer text-white group-hover:text-orange-500 transition-colors" />
                    </div>
                </div>  

                {/* Profile Info Section */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{profile.role}</p>
                </div>
            </div>
        </motion.div>
    )
}
