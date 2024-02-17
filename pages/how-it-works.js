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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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



export async function getStaticProps(context) {
    // extract the locale identifier from the URL
    const { locale } = context
  
    return {
      props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale)),
      },
    }
  }