import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiRedux,
    SiJenkins,
    SiKubernetes,
    SiTailwindcss,
    SiBootstrap,
    SiPostgresql,
    SiMysql,
} from "react-icons/si";

const TechStackIcons = () => {
    return (
        <div className="grid grid-cols-4 w-80 mx-auto mt-24 border gap-6 text-4xl border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-6">
            <div className="icon-glow react-icon group relative flex flex-col items-center text-center">
                <FaReact />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>ReactJS</strong>: A JavaScript library for building user interfaces.
                </div>
            </div>
            <div className="icon-glow nextjs-icon group relative flex flex-col items-center text-center">
                <SiNextdotjs />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Next.js</strong>: A React framework for server-side rendering and static sites.
                </div>
            </div>
            <div className="icon-glow ts-icon group relative flex flex-col items-center text-center">
                <SiTypescript />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>TypeScript</strong>: A strongly typed programming language for JavaScript.
                </div>
            </div>
            <div className="icon-glow js-icon group relative flex flex-col items-center text-center">
                <SiJavascript />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>JavaScript</strong>: The programming language of the web.
                </div>
            </div>
            <div className="icon-glow express-icon group relative flex flex-col items-center text-center">
                <SiExpress />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Express.js</strong>: A minimal and flexible Node.js web application framework.
                </div>
            </div>
            <div className="icon-glow node-icon group relative flex flex-col items-center text-center">
                <FaNodeJs />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Node.js</strong>: A JavaScript runtime for building scalable server-side applications.
                </div>
            </div>
            <div className="icon-glow mysql-icon group relative flex flex-col items-center text-center">
                <SiMysql />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>MySQL</strong>: A popular relational database management system.
                </div>
            </div>
            <div className="icon-glow mongodb-icon group relative flex flex-col items-center text-center">
                <SiMongodb />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>MongoDB</strong>: A NoSQL database for modern applications.
                </div>
            </div>
            <div className="icon-glow redux-icon group relative flex flex-col items-center text-center">
                <SiRedux />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Redux</strong>: A predictable state container for JavaScript apps.
                </div>
            </div>
            <div className="icon-glow jenkins-icon group relative flex flex-col items-center text-center">
                <SiJenkins />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Jenkins</strong>: An open-source automation server for CI/CD.
                </div>
            </div>
            <div className="icon-glow aws-icon group relative flex flex-col items-center text-center">
                <FaAws />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>AWS</strong>: Amazon Web Services, a comprehensive cloud platform.
                </div>
            </div>
            <div className="icon-glow kubernetes-icon group relative flex flex-col items-center text-center">
                <SiKubernetes />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Kubernetes</strong>: A container orchestration platform.
                </div>
            </div>
            <div className="icon-glow docker-icon group relative flex flex-col items-center text-center">
                <FaDocker />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Docker</strong>: A platform for developing, shipping, and running applications.
                </div>
            </div>
            <div className="icon-glow tailwind-icon group relative flex flex-col items-center text-center">
                <SiTailwindcss />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>TailwindCSS</strong>: A utility-first CSS framework.
                </div>
            </div>
            <div className="icon-glow bootstrap-icon group relative flex flex-col items-center text-center">
                <SiBootstrap />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>Bootstrap</strong>: A popular CSS framework for responsive designs.
                </div>
            </div>
            <div className="icon-glow postgresql-icon group relative flex flex-col items-center text-center">
                <SiPostgresql />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <strong>PostgreSQL</strong>: An advanced open-source relational database system.
                </div>
            </div>
        </div>
    );
};

export default TechStackIcons;
