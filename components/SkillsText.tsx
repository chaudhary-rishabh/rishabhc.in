import React from "react";
import VerticalSlider from "./autoslider/VerticalSlider";
import HorizontalSlider from "./autoslider/HorizontalSlider";

const SkillsText = () => {
    const softSkills = [
        "Communication",
        "Team Collaboration",
        "Adaptability",
        "Problem-Solving",
        "Time Management",
        "Work Ethic",
        "Resilience",
        "Critical Thinking",
        "Empathy",
    ];

    const technicalSkills = [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "Jenkins",
        "Azure",
        "Git",
        "Full-Stack",
        "Responsive Design",
        "DevOps",
        "Cloud Computing",
        "DSA",
        "System Design",
        "SEO Optimization",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "AWS",
        "Node.js",
        "Express.js",
        "Microservices",
        "Linux",
        "Nginx",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "GraphQL",
        "TypeScript",
        "JavaScript",
        "APIs",
        "Agile",
        "Scrum",
        "Terraform",
        "Web Security",
        "Version Control",
        "Prometheus",
        // "Logging (ELK Stack)",
        "CloudFormation",
        "IAC",
    ];

    return (
        <>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="w-36 mt-5 gap-2 text-4xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <VerticalSlider items={softSkills} />
                </div>
                <div className="w-40 mt-5 gap-4 text-3xl text-blue-500/80 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <ol>
                        <li className="text-sm font-bold py-2 text-shadow">Full-Stack Dev</li>
                        <li className="text-sm font-bold pb-2 text-shadow">Cloud Computing</li>
                        <li className="text-sm font-bold pb-2 text-shadow">DevOps</li>
                        <li className="text-sm font-bold pb-2 text-shadow">System Design</li>
                    </ol>
                </div>
            </div>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="w-80 text-base my-5 gap-2 text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <HorizontalSlider items={technicalSkills} />
                </div>
            </div>

        </>
    );
};

export default SkillsText;