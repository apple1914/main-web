import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import { PROMOTED_BASE_URL } from "../utils/importantUrls"

const Pricing = () => {
    const {t} = useTranslation("common")
    const utm_campaign = "default"
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
            /> 

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>{t("First transfer")}</h3>
                                </div>
                                <div className="price">
                                    <h2><sup>$</sup> 0 <sub></sub></h2>
                                </div>
                                <p>{t("Your first withdrawal is always free and there is no hidden comission")}</p>

                                <Link href="/withdrawal">
                                {t("Send now")}
                                </Link>
                            </div>
                        </div>

                       

                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>{t("Your 2nd+ transfer")}</h3>
                                </div>
                                <div className="price">
                                    <h2><sup>%</sup> 4 <sub></sub></h2>
                                </div>
                                <p>{t("Standard fee is just 4% after your first withdrawal")}</p>

                                <Link href="/withdrawal">
                                {t("Send now")}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>{t("No hidden fees")}</h3>
                                </div>
                                <div className="price">
                                    <h2><sup></sup> FX <sub></sub></h2>
                                </div>
                                <p>{t("You will see the exact fee you're being charged & there are no extra fees hidden into the exchange rate")}</p>

                                <Link href="/withdrawal">
                                {t("Send now")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            {/* <AboutUsContentTwo /> */}
            
            <Footer />
        </>
    )
}

export default Pricing;