import MainLayout from '@/layouts/MainLayout'
import EducationModule from '@/modules/EducationModule/EducationModule'
import Head from 'next/head'
import React from 'react'

const Education = () => {
    return (
        <>
            <Head>
                <title>Education | Rishabh Chaudhary</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Explore the educational background of Rishabh, including degrees, certifications, and courses in computer science" />
                <meta name="keywords" content="Educational Background, Computer Science, Certifications, Courses, Highly Qualified" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/education" />
            </Head>
            <MainLayout>
                <EducationModule />
            </MainLayout>
        </>
    )
}

export default Education