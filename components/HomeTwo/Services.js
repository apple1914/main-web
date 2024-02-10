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
                    <h2>{t("Instand withdrawal to your cards in any country")}</h2>
                    {/* <p>{t("Withdrawals to card taker just 15 minutes")}</p> */}
                </div>

                <div className="row">
                <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>{t("Low minimum amount")}</h3>
                                <p>{t("Minimum amount for payment is just $5")}</p>

                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>{t("Fastest withdrawals")}</h3>
                                <p>{t("Withdrawals to card taker just 15 minutes")}</p>

                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>{t("Deposit + add balance")}</h3>
                                <p>{t("You can pay and fill up your balance with your foreig card")}</p>

                                
                            </div>
                        </div>
                    </div>

                   


                    
                </div>
            </div>
		</div>
    )
}

export default Services;