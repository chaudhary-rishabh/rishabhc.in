import React from "react";
import VerticalSlider from "./autoslider/VerticalSlider";
import HorizontalSlider from "./autoslider/HorizontalSlider";

const SkillsText = () => {
    const softSkills = [
        "Communication",
        "Team Collaboration",
        "Leadership",
        "Problem-Solving",
        "Time Management",
        "Critical Thinking",
        "Agile Project Management",
    ];

    const technicalSkills = [
        "DSA",
        "Full-Stack",
        "Responsive Design",
        "DevOps",
        "Cloud Computing",
        "System Design",
        "SEO Optimization",
        "React.js",
        "Next.js",
        "Tailwind CSS",
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
                <div className="grid grid-cols-5 w-80 mt-4 border gap-5 text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <HorizontalSlider items={technicalSkills} />
                </div>
            </div>

        </>
    );
};

export default SkillsText;