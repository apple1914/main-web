import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/FAQ/FaqContent';
import FaqForm from '../components/FAQ/FaqForm';
import Footer from '../components/_App/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FAQ = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
            /> 

            <FaqContent />

            <FaqForm />
            
            <Footer />
        </>
    )
}

export default FAQ;



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