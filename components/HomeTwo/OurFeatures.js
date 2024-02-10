import React from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const OurFeatures = () => {
	const {t} = useTranslation("common")
    return (
        <div className="choose-us-area choose-us-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>{t("Benefits")}</span>
					<h2>{t("Created with love for immigrants")}</h2>
					<p>{t("Our company was created by immigrants to help other immigrants send money back home")}</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-team"></span>
							<h3>{t("Instand withdrawal to your cards in any country")}</h3>
							<p>{t("Withdrawals to card taker just 15 minutes")}</p>

                            {/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-money"></span>
							<h3>{t("Security")}</h3>
							<p>{t("We use highest standards of encryption and never share your data")}. {t("Your money is safeguarded by highest levels of protection")}</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-support"></span>
							<h3>{t("Pay with your foreign card")}</h3>
							<p>{t("We accept payments from cards of 100+ countries")}</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-contract"></span>
							<h3>{t("Perfect solution for those who live abroad")}</h3>
							<p>{t("Work abroad and can't withdraw your salary to your home country?")}. {t("Santepay can help")}</p>

							{/* <Link href="/insurance-details">
                               <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurFeatures;