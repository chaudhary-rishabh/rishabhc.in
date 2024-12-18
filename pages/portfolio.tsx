import MainLayout from '@/layouts/MainLayout'
import PortfolioModule from '@/modules/PortfolioModule/PortfolioModule'
import Head from 'next/head'
import React from 'react'

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Rishabh</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Explore the portfolio of Rishabh, showcasing expertise in full-stack development, DevOps, and modern technologies." />
                <meta name="keywords" content="Portfolio, All Gauge, Github, Frontend Projects, Backend Projects" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/portfolio" />
            </Head>
            <MainLayout>
                <PortfolioModule />
            </MainLayout>
        </>
    )
}

export default Portfolio