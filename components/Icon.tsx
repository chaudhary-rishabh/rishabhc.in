import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"; // Font Awesome
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiRedux, SiJenkins, SiKubernetes, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql } from "react-icons/si"; // Simple Icons

const TechStackIcons = () => {
    return (
        <div className="grid grid-cols-4 w-80 mx-auto mt-24 border gap-4 text-4xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-8 animate-border-gradient">
            <div className="icon-glow" title="ReactJS"><FaReact /></div>
            <div className="icon-glow" title="Next.js"><SiNextdotjs /></div>
            <div className="icon-glow" title="TypeScript"><SiTypescript /></div>
            <div className="icon-glow" title="JavaScript"><SiJavascript /></div>
            <div className="icon-glow" title="Express.js"><SiExpress /></div>
            <div className="icon-glow" title="Node.js"><FaNodeJs /></div>
            <div className="icon-glow" title="MySQL"><SiMysql /></div>
            <div className="icon-glow" title="MongoDB"><SiMongodb /></div>
            <div className="icon-glow" title="Redux"><SiRedux /></div>
            <div className="icon-glow" title="Jenkins"><SiJenkins /></div>
            <div className="icon-glow" title="AWS"><FaAws /></div>
            <div className="icon-glow" title="Kubernetes"><SiKubernetes /></div>
            <div className="icon-glow" title="Docker"><FaDocker /></div>
            <div className="icon-glow" title="TailwindCSS"><SiTailwindcss /></div>
            <div className="icon-glow" title="Bootstrap"><SiBootstrap /></div>
            <div className="icon-glow" title="PostgreSQL"><SiPostgresql /></div>
        </div>
    );
};

export default TechStackIcons;
