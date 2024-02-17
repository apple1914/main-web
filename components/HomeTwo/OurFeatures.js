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

				
			</div>
		</div>
    )
}

export default OurFeatures;