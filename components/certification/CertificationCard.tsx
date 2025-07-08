"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, CheckCircle } from "lucide-react"

interface CertificationData {
    id: number
    title: string
    issuer: string
    date: string
    credentialId: string
    skills: string[]
    color: string
    icon: any
}

interface CertificationCardProps {
    certification: CertificationData
    index: number
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
    const Icon = certification.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative"
        >
            <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${certification.color} p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4 text-white" />
                    </motion.button>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">{certification.title}</h3>
                    <p className="text-white/90 font-medium mb-3">{certification.issuer}</p>

                    <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-sm">{certification.date}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {certification.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white/90 text-xs font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Credential ID */}
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-xs font-mono"> {certification.credentialId}</span>
                    </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                />
            </div>
        </motion.div>
    )
}
