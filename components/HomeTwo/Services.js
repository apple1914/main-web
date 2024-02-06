import React from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const Services = () => {
    const {t} = useTranslation('common')
    return (
        <div className="service-area-two pt-100 pb-35">
            <div className="container">
                <div className="section-title">
                    <span>{t("Our Services")}</span>
                    <h2>{t("Features and services that we offer")}</h2>
                    <p>Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mua. Quis ipsum suspendices gravida.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-car-insurance"></i>
                                <h3>{t("Add money to your Santepay balance from any foreign card")}</h3>
                                <p>{t("Your money is always pegged to the dollar")}</p>

                                <Link href="/insurance-details">
                                    <i className="bx bx-chevrons-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>{t("Withdrawals to your card in any counry take just 15 minutes and are available 24/7")}</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <i className="bx bx-chevrons-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                   


                    
                </div>
            </div>
		</div>
    )
}

export default Services;