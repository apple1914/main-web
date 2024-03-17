import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const HowItWorks = () => {
  const { t } = useTranslation("common");

  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="about-content">
              <span>{t("HowItWorks")}</span>
              <h2>{t("How does it work?")}</h2>
              <p>{t("HowItWorks.p1")}</p>

              <div className="about-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-single-list list-2">
                      <i className="flaticon-social-care-1"></i>
                      <span>
                        {t("Withdrawals to card taker just 15 minutes")}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-single-list">
                      <i className="flaticon-target"></i>
                      <span>{t("Minimum amount for payment is just €25")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="about-img-3">
              <img src="/images/about-img-3.jpg" alt="Image" />
              <div className="about-img-2">
                <img src="/images/about-img-2.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
