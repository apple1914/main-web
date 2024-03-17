import React from "react";
import { useTranslation } from "next-i18next";

const FunFactsStyleTwo = () => {
  const { t } = useTranslation("common");
  return (
    <div className="counter-area-two pt-100 pb-70 jarallax">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                950 <span className="target">+</span>
							</h2>
							<p>Completed Project</p>
						</div>
					</div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter">
              <h2>
                100 <span className="target">+</span>
              </h2>
              <p>{t("Countries")}</p>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                40,000 <span className="traget">+</span>
							</h2>
							<p>{t("Customers")}</p>
						</div>
					</div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter">
              <h2>
                15 <span className="target">+</span>
              </h2>
              <p>{t("minutes - our average time to receive the funds")}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter">
              <h2>
                5 <span className="target">$</span>
              </h2>
              <p>{t("Minimum transfer amount is just €25")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactsStyleTwo;
