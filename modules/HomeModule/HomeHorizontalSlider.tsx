import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { icon } from "@fortawesome/fontawesome-svg-core";

const icons = [
    { icon: <FaReact />, className: "react-icon", label: "ReactJS", description: "A JavaScript library for building user interfaces." },
    { icon: <SiNextdotjs />, className: "nextjs-icon", label: "Next.js", description: "A React framework for server-side rendering and static sites." },
    { icon: <SiTypescript />, className: "ts-icon", label: "TypeScript", description: "A strongly typed programming language for JavaScript." },
    { icon: <SiJavascript />, className: "js-icon", label: "JavaScript", description: "The programming language of the web." },
    { icon: <SiExpress />, className: "express-icon", label: "Express.js", description: "A minimal and flexible Node.js web application framework." },
    { icon: <FaNodeJs />, className: "node-icon", label: "Node.js", description: "A JavaScript runtime for building scalable server-side applications." },
    { icon: <SiMysql />, className: "mysql-icon", label: "MySQL", description: "A popular relational database management system." },
    { icon: <SiMongodb />, className: "mongodb-icon", label: "MongoDB", description: "A NoSQL database for modern applications." },
    { icon: <SiRedux />, className: "redux-icon", label: "Redux", description: "A predictable state container for JavaScript apps." },
    { icon: <SiJenkins />, className: "jenkins-icon", label: "Jenkins", description: "An open-source automation server for CI/CD." },
    { icon: <FaAws />, className: "aws-icon", label: "AWS", description: "Amazon Web Services, a comprehensive cloud platform." },
    { icon: <SiKubernetes />, className: "kubernetes-icon", label: "Kubernetes", description: "A container orchestration platform." },
    { icon: <FaDocker />, className: "docker-icon", label: "Docker", description: "A platform for developing, shipping, and running applications." },
    { icon: <SiTailwindcss />, className: "tailwind-icon", label: "TailwindCSS", description: "A utility-first CSS framework." },
    { icon: <SiBootstrap />, className: "bootstrap-icon", label: "Bootstrap", description: "A popular CSS framework for responsive designs." },
    { icon: <SiPostgresql />, className: "postgresql-icon", label: "PostgreSQL", description: "An advanced open-source relational database system." },
];

const HomeHorizontalSlider: React.FC = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="w-full mx-auto p-6">
            <Slider {...settings}>
                {icons.map((item, index) => (
                    <div key={index} className="text-center text-sm font-semibold text-black">
                        <div className={`icon-glow ${item.className} group relative flex flex-col items-center text-center text-4xl`}>
                            {item.icon}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-black text-white text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <strong>{item.label}</strong>: {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeHorizontalSlider;
