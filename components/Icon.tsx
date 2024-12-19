import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiRedux, SiJenkins, SiKubernetes, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql } from "react-icons/si";

const TechStackIcons = () => {
    return (
        <div className="grid grid-cols-4 w-80 mx-auto mt-24 border gap-4 text-4xl border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-6">
            <div className="icon-glow react-icon" title="ReactJS"><FaReact /></div>
            <div className="icon-glow nextjs-icon" title="Next.js"><SiNextdotjs /></div>
            <div className="icon-glow ts-icon" title="TypeScript"><SiTypescript /></div>
            <div className="icon-glow js-icon" title="JavaScript"><SiJavascript /></div>
            <div className="icon-glow express-icon" title="Express.js"><SiExpress /></div>
            <div className="icon-glow node-icon" title="Node.js"><FaNodeJs /></div>
            <div className="icon-glow mysql-icon" title="MySQL"><SiMysql /></div>
            <div className="icon-glow mongodb-icon" title="MongoDB"><SiMongodb /></div>
            <div className="icon-glow redux-icon" title="Redux"><SiRedux /></div>
            <div className="icon-glow jenkins-icon" title="Jenkins"><SiJenkins /></div>
            <div className="icon-glow aws-icon" title="AWS"><FaAws /></div>
            <div className="icon-glow kubernetes-icon" title="Kubernetes"><SiKubernetes /></div>
            <div className="icon-glow docker-icon" title="Docker"><FaDocker /></div>
            <div className="icon-glow tailwind-icon" title="TailwindCSS"><SiTailwindcss /></div>
            <div className="icon-glow bootstrap-icon" title="Bootstrap"><SiBootstrap /></div>
            <div className="icon-glow postgresql-icon" title="PostgreSQL"><SiPostgresql /></div>
        </div>
    );
};

export default TechStackIcons;
