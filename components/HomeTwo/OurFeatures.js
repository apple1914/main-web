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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-team"></span>
							<h3>{t("Instant withdrawal to your cards in any country")}</h3>
							<p>{t("Withdraw money to your cards back home in just 15 minute")}</p>

                            {/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-money"></span>
							<h3>{t("Security")}</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-support"></span>
							<h3>{t("Pay and deposit from any foreign card")}</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-contract"></span>
							<h3>{t("Perfect solution for those who live abroad")}</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

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