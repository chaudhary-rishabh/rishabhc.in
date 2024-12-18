import MainLayout from '@/layouts/MainLayout'
import Head from 'next/head'
import React from 'react'

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog | Rishabh Chaudhary</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Blog of Rishabh Chaudhary, showcasing all the recent and latest tech news and AI Summaries" />
                <meta name="keywords" content="Blog, Writing, News, AI" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/portfolio" />
            </Head>
            <MainLayout>
                <p></p>
            </MainLayout>
        </>
    )
}

export default Blog