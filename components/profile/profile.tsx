import React from 'react'

const Profile = () => {
    return (
        <div className='bg-white rounded-3xl shadow-2xl shadow-orange-200 p-6 mx-auto mt-10'>
            {/* Profile Section Header */}
            <h1 className="text-2xl font-bold text-center text-black my-3">Profile Section</h1>

            <p className="text-gray-600 py-2 sm:text-md text-sm">
                I&rsquo;m a <strong>Full Stack Developer</strong> passionate about building impactful web applications. I&rsquo;ve <strong>developed and deployed</strong> products like{' '}
                <a href="https://pairskill.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">pairskill.com</a>,{' '}
                <a href="https://maido.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">maido.in</a>,{' '}
                <a href="https://yogice.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">yogice.in</a>, {' '}
                <a href="https://sakmap.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">sakmap.com</a>,{' '}and{' '}
                <a href="https://other.." target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">sakmap.com</a>.{' '}
            </p>

            <p className="text-gray-600 py-2 sm:text-md text-sm">
                I specialize in building <strong>scalable</strong>, <strong>end-to-end solutions</strong> using <strong>Next.js</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>, along with <strong>cloud-native</strong> tools and <strong>DevOps best practices</strong>.
            </p>

            <p className="text-gray-600 py-2 sm:text-md text-sm">
                With <strong>3+ years of professional experience</strong>, I enjoy solving <strong>complex problems</strong> with <strong>clean code</strong> and <strong>thoughtful architecture</strong>.
            </p>
            <p className="text-gray-600 py-2 sm:text-md text-sm">
                With strong knowledge of <strong>AWS</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>CI/CD pipelines</strong>, I bring both <strong>frontend finesse</strong> and <strong>backend resilience</strong> to every project I work on.
            </p>
        </div>
    )
}

export default Profile
