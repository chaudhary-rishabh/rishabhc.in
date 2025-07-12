// SkillsText.tsx
import React from "react";
import HorizontalSlider from "./autoslider/HorizontalSlider";
import {
    FaDocker, FaAws, FaGitAlt, FaNodeJs, FaReact, FaLinux, FaCloud, FaJs, FaDatabase
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
const SkillsText = () => {
    const technicalSkillsSoftware = [
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Redux", icon: <SiRedux /> },
        { label: "Zustand", icon: <FaReact /> },
        { label: "React", icon: <FaReact /> },
        { label: "Nextjs", icon: <SiNextdotjs /> },
        { label: "Linux", icon: <FaLinux /> },
        { label: "Tailwind", icon: <SiTailwindcss /> },
        { label: "JavaScript", icon: <FaJs /> },
        { label: "TypeScript", icon: <SiTypescript /> },
    ];

    const technicalSkillsDevopsCloud = [
        { label: "Docker", icon: <FaDocker /> },
        { label: "AWS", icon: <FaAws /> },
        { label: "Cloud", icon: <FaCloud /> },
        { label: "MongoDB", icon: <FaDatabase /> },
        { label: "PostgreSQL", icon: <FaDatabase /> },
        { label: "MySQL", icon: <FaDatabase /> },
        { label: "Redis", icon: <FaDatabase /> },
        { label: "CI/CD", icon: <FaCloud /> },
        { label: "Kubernetes", icon: <FaCloud /> },
        { label: "Git", icon: <FaGitAlt /> },
        { label: "Terraform", icon: <FaCloud /> },
    ];

    return (
        <>
            <div className="mx-auto w-full -mt-32 max-w-xl">
                <HorizontalSlider skills={technicalSkillsSoftware} direction="right" />
            </div>
            <div className="mx-auto w-full max-w-xl mt-4">
                <HorizontalSlider skills={technicalSkillsDevopsCloud} direction="left" />
            </div>
        </>
    );
};

export default SkillsText;
