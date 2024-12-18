import MainLayout from '@/layouts/MainLayout'
import SkillModule from '@/modules/SkillModule/SkillModule'
import Head from 'next/head'
import React from 'react'

const Skills = () => {
    return (
        <>
            <Head>
                <title>Skills | Rishabh</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Discover the skills of Rishabh, including Database Design, System Design Full Stack Development, Devops, Next.js, React.js, Node.js, MongoDB, MySQL, AWS Cloud, Docker, Kubernetes, and Jenkins." />
                <meta name="keywords" content="Certified Skills, Frontend, Backend, Database Management, System Design" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/skills" />
            </Head>
            <MainLayout>
                <SkillModule />
            </MainLayout>
        </>
    )
}

export default Skills