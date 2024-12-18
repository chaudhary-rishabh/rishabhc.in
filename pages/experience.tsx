import MainLayout from '@/layouts/MainLayout'
import ExperienceModule from '@/modules/ExperienceModule/ExperienceModule'
import Head from 'next/head'
import React from 'react'

const Experience = () => {
    return (
        <>
            <Head>
                <title>Experience | Rishabh</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Learn about the professional experience of Rishabh, including roles in full-stack development, DevOps, and projects utilizing TypeScript, Next.js, Node.js, AWS, and more." />
                <meta name="keywords" content="Professional Experience, Exposure To Development" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/experience" />
            </Head>
            <MainLayout>
                <ExperienceModule />
            </MainLayout>
        </>
    )
}

export default Experience