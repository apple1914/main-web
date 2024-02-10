import React from 'react';
import { useTranslation } from "next-i18next";

const WhyChooseUs = () => {
	const {t} = useTranslation("common")
    return (
        <div className="chooses-us-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>{t("Why choose us")}</span>
					<h2>{t("Our strengths")}</h2>
				</div>

				<div className="choose-us-wrap">
					<ul>
						<li>
							<i className="flaticon-health-care"></i>
							<h3>{t("Fast")}</h3>
							<p>{t("Withdraw money to your cards back home in just 15 minutes")}</p>
						</li>

						<li>
							<i className="flaticon-kindness"></i>
							<h3>{t("Low minimum amount")}</h3>
							<p>{t("Smallest amount for transfer is just $5 so you can give it a try with a tiny sum")}</p>
						</li>

						<li>
							<i className="flaticon-support"></i>
							<h3>{t("We care about our customers")}</h3>
							<p>{t("If you have any questions or problems, our customer support agents are always happy to assist you")}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}

export default WhyChooseUs;