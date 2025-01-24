import React from 'react'
import HorizontalSlider from './autoslider/HorizontalSlider';
import { FaComments, FaUsers, FaTools, FaLaptopCode, FaClock, FaClipboardList, FaShieldAlt, FaBrain, FaHandsHelping } from 'react-icons/fa';
import HomeHorizontalSlider from '@/modules/HomeModule/HomeHorizontalSlider';

const HomeAbout = () => {
    const Skills = [
        { name: "Communication", icon: <FaComments /> },
        { name: "Team Collaboration", icon: <FaUsers /> },
        { name: "Adaptability", icon: <FaTools /> },
        { name: "Problem-Solving", icon: <FaLaptopCode /> },
        { name: "Time Management", icon: <FaClock /> },
        { name: "Work Ethic", icon: <FaClipboardList /> },
        { name: "Resilience", icon: <FaShieldAlt /> },
        { name: "Critical Thinking", icon: <FaBrain /> },
        { name: "Empathy", icon: <FaHandsHelping /> },
    ];

    return (
        <div className='w-80 mx-auto max-w-sm'>
            <HomeHorizontalSlider />
            <p className='text-black font-medium text-base'>
                Hii, I am Rishabh, Full Stack Developer Expert in <b>MERN Stack, Typescript, Nextjs, Tailwindcss, and DevOps</b>
            </p><br></br>
            <p className='text-black font-medium text-base'>
                I have a passion for learning and sharing my knowledge with others as publicly as possible.I am constantly seeking to enhance my skills and knowledge.
            </p>
        </div>
    )
}

export default HomeAbout;
