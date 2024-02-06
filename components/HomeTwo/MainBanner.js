import React from "react";
import Link from "next/link";
import Converter from "../Common/Converter"
import { useTranslation } from "next-i18next";
const MainBanner = () => {
  const {t} = useTranslation("common")
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
               

                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  {t("Withdraw money to cards of any country in 15 minutes")}
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <p>
                   {t("You can deposit to your balance from 100+ countries.")}
                   {t("Withdraw to cards of 150+ countries.")}
                   {t("With Santepay your money becomes international.")}
                  </p>
                </div>

              </div>
            </div>

            <div className="col-lg-6 pr-0">
            
              <div className="bg-white rounded shadow-md py-5 px-5 w-75 mx-auto">
              <Converter />

              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape">
          <img src="/images/banner/banner-shape.png" alt="Image" />
        </div>
        <div className="banner-shape-right">
          <img src="/images/banner/banner-shape-right.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
