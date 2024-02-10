import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useTranslation } from "next-i18next";

const PrivacyPolicy = () => {
    const {t} = useTranslation("common")
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Privacy Policy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Privacy Policy" 
            /> 

            <div className="terms-conditions ptb-100">
                <div className="container">
                    <div className="single-privacy">
                        <h3 className="mt-0">{t("Welcome to our Privacy Policy!")}</h3>
                        <p>{t("PrivacyPolicyText")}</p>

                    </div>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default PrivacyPolicy;