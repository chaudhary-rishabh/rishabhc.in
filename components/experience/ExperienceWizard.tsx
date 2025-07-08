"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Trophy } from "lucide-react"

const experiences = [
    {
        id: 1,
        company: "TechCorp Solutions",
        position: "Senior Full Stack Developer",
        duration: "2022 - Present",
        location: "San Francisco, CA",
        description:
            "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
        achievements: [
            "Increased application performance by 40%",
            "Led team of 5 developers",
            "Implemented CI/CD pipeline reducing deployment time by 60%",
            "Architected microservices handling 1M+ requests daily",
        ],
        technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
        color: "from-blue-500 to-blue-600",
    },
    {
        id: 2,
        company: "StartupHub Inc",
        position: "Frontend Developer",
        duration: "2020 - 2022",
        location: "Austin, TX",
        description:
            "Developed responsive web applications and mobile-first designs. Collaborated with UX/UI teams to create intuitive user experiences.",
        achievements: [
            "Built 15+ responsive web applications",
            "Improved user engagement by 35%",
            "Reduced page load times by 50%",
            "Mentored 3 junior developers",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Redux"],
        color: "from-green-500 to-green-600",
    },
    {
        id: 3,
        company: "Digital Agency Pro",
        position: "Junior Web Developer",
        duration: "2019 - 2020",
        location: "Remote",
        description:
            "Started my professional journey building websites for small businesses and learning modern web development practices.",
        achievements: [
            "Delivered 20+ client projects",
            "Achieved 98% client satisfaction rate",
            "Learned 5+ new technologies",
            "Built first e-commerce platform",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        color: "from-purple-500 to-purple-600",
    },
]

export default function ExperienceWizard() {
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % experiences.length)
    }

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + experiences.length) % experiences.length)
    }

    const currentExperience = experiences[currentStep]

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Professional Journey
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    A timeline of growth, learning, and impactful contributions across different organizations
                </p>
            </motion.div>

            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                    {experiences.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? "bg-orange-500 scale-125" : "bg-gray-300"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentStep(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Experience Card */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentExperience.color} p-8 shadow-2xl`}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)]" />
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentExperience.position}</h3>
                                    <h4 className="text-xl text-white/90 font-semibold mb-4">{currentExperience.company}</h4>

                                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-white/80">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{currentExperience.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{currentExperience.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/90 leading-relaxed mb-6">{currentExperience.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {currentExperience.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Trophy className="w-5 h-5 text-white/80" />
                                    <h5 className="text-white font-semibold">Key Achievements</h5>
                                </div>

                                <div className="space-y-3">
                                    {currentExperience.achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl"
                                        >
                                            <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-white/90 text-sm leading-relaxed">{achievement}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                    onClick={prevStep}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                    onClick={nextStep}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Step Counter */}
            <div className="text-center mt-6">
                <span className="text-gray-500 text-sm">
                    {currentStep + 1} of {experiences.length}
                </span>
            </div>
        </div>
    )
}
