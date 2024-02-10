import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import AchievementContent from '../components/About/AchievementContent';
import Footer from '../components/_App/Footer';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import OurFeatures from '../components/HomeTwo/OurFeatures';
import AboutUs from '../components/HomeTwo/AboutUs';

const About = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
            /> 
        <AboutUs />
        <OurFeatures />
        <WhyChooseUs />

            <Footer />
        </>
    )
}

export default About;