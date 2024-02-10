import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useTranslation } from "next-i18next";

const TermsConditions = () => {
    const {t} = useTranslation("common")
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Terms Conditions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms Conditions" 
            /> 

            <div className="terms-conditions ptb-100">
                <div className="container">
                    <div claclassNames="single-privacy">
                        <h3 className="mt-0">{t("Terms and Conditions")}</h3>
                        <p>{t("TermsAndConditionsText")}</p>

                    </div>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default TermsConditions;