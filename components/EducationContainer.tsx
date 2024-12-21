import Image from 'next/image'
import React from 'react'

const EducationContainer = () => {
    return (
        <div className='w-80 mx-auto mt-24 gap-6 text-base border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-6'>
            <section className="text-center mx-auto py-4">
                <h1 className="text-2xl font-bold text-gray-800">My Education Journey</h1>
                <p className="text-gray-700 max-w-xl mx-auto p-5 text-left">
                    I hold a <b>Bachelor’s degree</b> in <b>Computer Applications (BCA)</b>, from The Maharaja Sayajirao University of Baroda.
                </p>
                <p className="text-gray-700 max-w-xl p-5 text-left">
                    Complemented by certifications in <b>specialized courses</b>.
                    Learning has always been my passion, and I constantly seek to enhance my skills and knowledge.
                </p>
                <button type="button" className="text-gray-900 bg-white shadow-lg my-2 shadow-blue-200 border-t border-r border-blue-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    <Image src="/rishabh_udemy_course.png" alt="rishabh course udemy" width={100} height={100} />
                    Full Stack Developer
                </button>
                <button type="button" className="text-gray-900 bg-white shadow-lg my-4 shadow-blue-200 hover:bg-gray-200 focus:ring-4 border-b border-l border-blue-400 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    <Image src="/rishabh_edx_course.png" alt="rishabh course udemy" width={70} height={70} />
                    CS50 Computer Science
                </button>
            </section>
        </div>
    )
}

export default EducationContainer