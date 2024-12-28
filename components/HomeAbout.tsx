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
            <HomeHorizontalSlider items={Skills.map(skill => skill.icon)} />
            <p className='text-black font-bold text-base'>
                Hii, I am Rishabh, Software Developer Expert in DevOps and Cloud
            </p>
        </div>
    )
}

export default HomeAbout;
