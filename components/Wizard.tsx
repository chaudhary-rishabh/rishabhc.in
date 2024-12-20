// components/Wizard.tsx
import { FaBriefcase, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Wizard = () => {
    const steps = [
        {
            title: 'MERN Stack',
            duration: '6 months',
            company: 'N10Technosoft',
            description: 'Worked as an intern to gain initial experience in the industry.',
            icon: <FaLaptopCode className="text-blue-500 w-8 h-8" />,
        },
        {
            title: 'Full Stack Developer',
            duration: '1 years',
            company: 'Appance',
            description: 'Full-Stack in MERN Stack Development',
            icon: <FaBriefcase className="text-blue-500 w-8 h-8" />,
        },
        {
            title: 'Software Developer',
            duration: '9 months',
            company: 'Alois',
            description: 'Worked on Frontend Nextjs and Backend Spring Boot',
            icon: <FaBriefcase className="text-blue-500 w-8 h-8" />,
        },
    ];

    return (
        <div className="flex w-96 flex-col items-center py-24">
            <div className="relative w-full max-w-xl">

                {/* Vertical Line connecting all icons */}
                <div className="absolute left-[10%] transform-translate-x-1/2 h-full w-1 bg-white opacity-50 z-0"></div>

                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 flex items-center mb-16 md:mb-20">

                        {/* Icon aligned to the left */}
                        <div className="flex justify-end w-[20%]">
                            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-2xl shadow-blue-300">
                                {step.icon}
                            </div>
                        </div>

                        {/* Experience Details aligned to the right */}
                        <div className="ml-6 w-[70%] text-blue-500 text-shadow bg-white border border-blue-400 p-6 shadow-2xl shadow-blue-300/70 rounded-3xl text-left animate-resize-opacity">
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="mb-2 italic">{step.company}, {step.duration}</p>
                            <p>{step.description}</p>
                        </div>

                        {/* Line connecting icons (only for non-last elements) */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-full left-[10%] transform -translate-x-1/2 w-1 h-16 bg-white opacity-50"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wizard;
