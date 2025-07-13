"use client"

import { motion } from "framer-motion"
import { Award, Code, Database, Globe, Zap, Shield } from "lucide-react"
import CertificationCard from "./CertificationCard"

const certifications = [
    {
        id: 1,
        title: "AWS Certified Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        credentialId: "",
        skills: ["Cloud Architecture", "AWS Services", "Security"],
        color: "from-orange-500 to-orange-600",
        icon: Globe, 
    },
    {
        id: 2,
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2024",
        credentialId: "",
        skills: ["React", "JavaScript", "Frontend"],
        color: "from-blue-500 to-blue-600",
        icon: Code,
    },
    {
        id: 3,
        title: "Full-StacK DevOps AWS",
        issuer: "0-100 ",
        date: "2025",
        credentialId: "",
        skills: ["Nextjs", "Postgresql", "Docker", "Kubernetes", "DevOps"],
        color: "from-green-500 to-green-600",
        icon: Database,
    },
    {
        id: 4,
        title: "Certified Scrum Master",
        issuer: "Scrum Alliance",
        date: "2023",
        credentialId: "",
        skills: ["Agile", "Scrum", "Project Management"],
        color: "from-purple-500 to-purple-600",
        icon: Zap,
    },
    {
        id: 5,
        title: "System Design Course",
        issuer: "Gaurav Sen",
        date: "2025",
        credentialId: "",
        skills: ["LLD", "HLD", "Scaling", "Distributed Systems", "Design Patterns"],
        color: "from-red-500 to-red-600",
        icon: Shield,
    },
    {
        id: 6,
        title: "Full Stack Developer",
        issuer: "Udemy",
        date: "2024",
        credentialId: "",
        skills: ["Full Stack","Reactjs", "Expressjs", "Mongodb", "Node.js", "Tailwind CSS"],
        color: "from-indigo-500 to-indigo-600",
        icon: Award,
    },
]

export default function CertificationSection() {
    return (
        <div className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto relative max-w-7xl px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-md md:text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Professional Certifications
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {certifications.map((cert, index) => (
                    <CertificationCard key={cert.id} certification={cert} index={index} />
                ))}
            </div>
        </div>
    )
}