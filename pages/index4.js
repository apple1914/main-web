import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import MainBanner from '../components/HomeFour/MainBanner';
import OurFeatures from '../components/HomeFour/OurFeatures';
import AboutUsContent from '../components/HomeFour/AboutUsContent';
import OurServices from '../components/HomeFour/OurServices';
import FunFactsStyle3 from '../components/Common/FunFactsStyle3';
import OffersArea from '../components/Common/OffersArea';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import TeamSlider from '../components/Common/TeamSlider';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/_App/Footer';

const Index4 = () => {
    return (
        <>
            <NavbarFour />

            <MainBanner />

            <OurFeatures />

            <AboutUsContent />

            <OurServices />

            <FunFactsStyle3 />

            <div className="ptb-100">
                <OffersArea />
            </div>

            <GetAFreeQuoteFormStyleTwo />

            <TeamSlider />

            <div className="bg-f9fbfe">
                <TestimonialStyleTwo />
            </div>

            <div className="pt-100">
                <BlogPost />
            </div>
            
            <Footer />
        </>
    )
}

export default Index4;