import React from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const OurFeatures = () => {
	const {t} = useTranslation("common")
    return (
        <div className="choose-us-area choose-us-area-two pt-100 pb-70">
			<div className="container">
				

				<div className="row">
					

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-money"></span>
							<h3>{t("sideBenefits.f2a")}</h3>
							<p>{t("sideBenefits.f2b")}</p>

							
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-support"></span>
							<h3>{t("sideBenefits.f3a")}</h3>
							<p>{t("sideBenefits.f3b")}</p>

						
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-contract"></span>
							<h3>{t("sideBenefits.f4a")}</h3>
							<p>{t("sideBenefits.f4b")}</p>

							
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurFeatures;