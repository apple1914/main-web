import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import AchievementContent from '../components/About/AchievementContent';
import Footer from '../components/_App/Footer';
import OurFeatures from '../components/HomeTwo/OurFeatures';
import HowItWorks from '../components/HomeTwo/HowItWorks';

const HowItWorksPage = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="How It Works" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="HowItWorks" 
            /> 
        <HowItWorks />
        <OurFeatures />

            <Footer />
        </>
    )
}

export default HowItWorksPage;