import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioCard = () => {
    return (
        <>
            <div className="w-80 mt-24 m-auto  bg-white shadow rounded-3xl">
                <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-3xl"
                    style={{ backgroundImage: "url('https://i.imgur.com/t0WW0h2.png')" }}>
                    <div>
                        <span
                            className="uppercase backdrop-blur text-xs bg-white/50 p-0.5 rounded font-bold text-blue-400 select-none">
                            Project Name
                        </span>
                    </div>
                </div>
                <div className="p-4 flex flex-col items-center">
                    <p className="text-gray-400 font-light text-xs text-center">Github&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></p>
                    <h1 className="text-gray-800 text-center mt-1">Full Stack Web application</h1>

                    <button
                        className="py-2 px-4 bg-blue-400 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                        Visit Live&nbsp;
                        <FontAwesomeIcon icon={faLink} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard