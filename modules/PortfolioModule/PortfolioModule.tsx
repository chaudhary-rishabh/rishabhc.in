import BottomNav from '@/components/BottomNav'
import SwiperOne from '@/components/swiper/SwiperOne'
import React from 'react'
import PortfolioCard from './PortfolioCard'
import Link from 'next/link'

const PortfolioModule = () => {
    return (
        <>
            <div className='mainPortfolio'>
                <PortfolioCard />
                <PortfolioCard />
                <SwiperOne />
                <BottomNav />
            </div>
        </>
    )
}

export default PortfolioModule