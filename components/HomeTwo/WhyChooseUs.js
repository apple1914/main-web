import React from 'react';
import { useTranslation } from "next-i18next";

const WhyChooseUs = () => {
	const {t} = useTranslation("common")
    return (
        <div className="chooses-us-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>{t("whyChooseUs.f0a")}</span>
					<h2>{t("whyChooseUs.f0a")}</h2>
				</div>

				<div className="choose-us-wrap">
					<ul>
						<li>
							<i className="flaticon-health-care"></i>
							<h3>{t("whyChooseUs.f1a")}</h3>
							<p>{t("whyChooseUs.f1b")}</p>
						</li>

						<li>
							<i className="flaticon-kindness"></i>
							<h3>{t("whyChooseUs.f2a")}</h3>
							<p>{t("whyChooseUs.f2b")}</p>
						</li>

						<li>
							<i className="flaticon-support"></i>
							<h3>{t("whyChooseUs.f3a")}</h3>
							<p>{t("whyChooseUs.f3b")}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}

export default WhyChooseUs;