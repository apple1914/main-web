import React from "react";
import { useTranslation } from "next-i18next";

const ContactWithUs = () => {
  const { t } = useTranslation("common");
  return (
    <div className="any-contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <Link className="nav-link" href="/contact" activeClassName="active">
              {t("Contact us")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithUs;
