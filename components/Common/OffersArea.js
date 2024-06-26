import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { PROMOTED_BASE_URL } from "../../utils/importantUrls";

const OffersArea = () => {
  const { t } = useTranslation("common");
  return (
    <div className="business-contact-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 p-0">
            <div className="business-img">
              <img src="/images/counter-bg-6.jpg" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 p-0">
            <div className="business-content">
              <h3>{t("offersArea.p1")}</h3>

              <Link href={`/withdrawal`} className="default-btn active ml-0">
                {t("Continue")}
              </Link>

              <Link
                className="nav-link"
                href="/contact"
                activeClassName="active"
              >
                {t("Contact us")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersArea;
