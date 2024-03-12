import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Services = () => {
  const { t } = useTranslation("common");
  return (
    <div className="service-area-two pt-100 pb-35">
      <div className="container">
        <div className="text-center w-50 mx-auto">
          {/* <span>{t("Our Services")}</span>
                    <h2>{t("Instand withdrawal to your cards in any country")}</h2> */}
          <h2>{t("services.f0a")}</h2>
          <h3 className="text-muted">{t("services.f0b")}</h3>
          {/* <p>{t("Withdrawals to card taker just 15 minutes")}</p> */}
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-sm-6">
            <div className="single-service mb-65">
              <div className="service-content">
                <i className="icon-style flaticon-money"></i>
                {/* <h3>{t("Low minimum amount")}</h3>
                                <p>{t("Minimum amount for payment is just €25")}</p> */}
                <h3>{t("services.f1a")}</h3>
                <p>{t("services.f1b")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-service mb-65">
              <div className="service-content">
                <i className="icon-style flaticon-insurance"></i>
                {/* <h3>{t("Fastest withdrawals")}</h3>
                                <p>{t("Withdrawals to card taker just 15 minutes")}</p> */}
                <h3>{t("services.f2a")}</h3>
                <p>{t("services.f2b")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
