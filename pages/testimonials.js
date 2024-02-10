import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';

const Testimonials = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
            /> 
            <TestimonialStyleTwo />
     
            <Footer />
        </>
    )
}

export default Testimonials;