import React from 'react';
import NavbarSix from '../components/_App/NavbarSix';
import HeroSlider from '../components/HomeSix/HeroSlider';
import InsuranceTab from '../components/HomeSix/InsuranceTab';
import AboutUsContent from '../components/HomeSix/AboutUsContent';
import OurFeatures from '../components/HomeSix/OurFeatures';
import FindAnAgent from '../components/HomeSix/FindAnAgent';
import FunFactsStyle5 from '../components/Common/FunFactsStyle5';
import OurTeam from '../components/Common/OurTeam';
import TestimonialStyle3 from '../components/Common/TestimonialStyle3';
import CTA from '../components/HomeSix/CTA';
import GetAFreeQuoteForm from '../components/HomeSix/GetAFreeQuoteForm';
import BlogPost from '../components/Common/BlogPost';
import FooterStyle2 from '../components/_App/FooterStyle2';

const Index6 = () => {
    return (
        <>
            <NavbarSix />

            <HeroSlider />

            <InsuranceTab />

            <AboutUsContent />

            <OurFeatures />

            <FindAnAgent />

            <FunFactsStyle5 />

            <OurTeam />

            <TestimonialStyle3 />

            <CTA />
 
            <div className="pt-100">
                <BlogPost />
            </div>

            <FooterStyle2 />
        </>
    )
}

export default Index6;