import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"; // Font Awesome
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiRedux, SiJenkins, SiKubernetes, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql } from "react-icons/si"; // Simple Icons

const SkillsText = () => {
    return (
        <>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="w-36 mt-5 border gap-2 text-4xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <div className="text-base font-bold" title="Next.js">DSA</div>{/* make a vertical slider here with all the skills */}
                    <div className="font-bold" title="MySQL"><SiMysql /></div>
                </div>
                <div className="w-40 mt-5 border gap-4 text-3xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <div className="text-lg font-bold text-center" title="MySQL">Full-Stack</div>
                    <div className="text-lg font-bold text-center" title="MySQL">Devops</div>
                    <div className="text-lg font-bold text-center" title="Next.js">Cloud</div>
                </div>
            </div>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="grid grid-cols-5 w-80 mt-4 border gap-5 text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <div className="font-sm font-bold" title="Next.js">SEO</div>
                    <div className="font-sm font-bold" title="Next.js">ReactJs</div>
                    <div className="font-sm font-bold" title="Next.js">NextJs</div>
                    <div className="font-sm font-bold" title="Next.js">Jenkins</div>
                    <div className="font-sm font-bold" title="Next.js">AWS</div> {/* make a horizontal slider here with all the skills */}
                    <div className="font-sm font-bold" title="Next.js">NextJs</div>
                    <div className="font-sm font-bold" title="Next.js">Tailwind</div>
                </div>
            </div>

        </>
    );
};

export default SkillsText;
