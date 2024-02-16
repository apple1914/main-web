import React from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const OurFeatures = () => {
	const {t} = useTranslation("common")
    return (
        <div className="choose-us-area choose-us-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>{t("features.f0a")}</span>
					<h2>{t("features.f0b")}</h2>
					<p>{t("features.f0c")}</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-team"></span>
							<h3>{t("features.f1a")}</h3>
							<p>{t("features.f1b")}</p>

                            {/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-money"></span>
							<h3>{t("features.f2a")}</h3>
							<p>{t("features.f2b")}</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-support"></span>
							<h3>{t("features.f3a")}</h3>
							<p>{t("features.f3b")}</p>

							{/* <Link href="/insurance-details">
                                <i className="flaticon-right"></i>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-contract"></span>
							<h3>{t("features.f4a")}</h3>
							<p>{t("features.f4b")}</p>

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