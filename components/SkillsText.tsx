import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"; // Font Awesome
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiRedux, SiJenkins, SiKubernetes, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql } from "react-icons/si"; // Simple Icons

const SkillsText = () => {
    return (
        <>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="grid grid-cols-4 w-36 mt-5 border gap-2 text-4xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-8 animate-border-gradient">
                    <div className="icon-glow" title="Next.js"><FaDocker /></div>
                    <div className="icon-glow" title="MySQL"><SiMysql /></div>
                </div>
                <div className="grid grid-cols-4 w-40 mt-5 border gap-4 text-3xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-8 animate-border-gradient">
                    <div className="icon-glow" title="Next.js"><FaDocker /></div>
                    <div className="icon-glow" title="MySQL"><SiMysql /></div>
                </div>
            </div>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="grid grid-cols-4 w-80 mt-5 border gap-4 text-3xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-8 animate-border-gradient">
                    <div className="icon-glow" title="Next.js"><FaDocker /></div>
                    <div className="icon-glow" title="MySQL"><SiMysql /></div>
                </div>
            </div>

        </>
    );
};

export default SkillsText;
