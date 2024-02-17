import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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