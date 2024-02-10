import React from 'react';
import { useTranslation } from "next-i18next";

const ContactWithUs = () => {
	const {t} = useTranslation("common")
    return (
        <div className="any-contact-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-6">
						<div className="contact-text">
							<h3>{t("Contact us")}</h3>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="contact-call">
							<h3>
								<i className="flaticon-call"></i>
								Email: hello@santepay.com
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactWithUs;