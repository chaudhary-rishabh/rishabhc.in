import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioCard = () => {
    const projects = [
        {
            name: 'Sakmap Full-Stack Web Application',
            live: 'https://sakmap.com/',
            img: '/rishabh-project-two.png',
            github: 'https://github.com/chaudhary-rishabh',
            type: 'Course Selling'
        },
        {
            name: 'Yogice Frontend Web Application',
            live: 'https://yogice.in/',
            img: '/rishabh-project-one.png',
            github: 'https://github.com/chaudhary-rishabh',
            type: 'Ecommerce Application'
        }
    ];

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="w-80 mt-24 m-auto bg-white shadow rounded-3xl">
                    <div
                        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-3xl"
                        style={{ backgroundImage: `url(${project.img})` }}
                    >
                        <div>
                            <span className="uppercase backdrop-blur text-xs bg-white/80 p-0.5 rounded font-bold text-blue-400 select-none">
                                {project.name}
                            </span>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <p className="text-gray-400 font-light text-xs text-center pointer" onClick={() => window.open(project.github, '_blank')}>
                            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </p>
                        <h1 className="text-gray-800 text-center mt-1">{project.type}</h1>

                        <button
                            className="py-2 px-4 bg-blue-400 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                            onClick={() => window.open(project.live, '_blank')}
                        >
                            Visit Live <FontAwesomeIcon icon={faLink} />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PortfolioCard;
