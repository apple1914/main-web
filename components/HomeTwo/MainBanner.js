import React from "react";
import Link from "next/link";
import Converter from "../Common/Converter"
import { useTranslation } from "next-i18next";
import ReactStars from 'react-stars'

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
                  {t("Your money without borders")}
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <p>
                   {t("Instantly withdraw money to your card in your home country")}{". "}
                   {t("Pay and deposit from any foreign card")}{". "}
                   {t("Santepay makes your money international")}
                  </p>
                </div>

              </div>
              <div className="d-flex justify-content-center mb-3" data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true">
                  <ReactStars
                          count={5}
                          size={24}
                          value={5}
                          color2={'#00B67A'} 
                          edit={false}
                          /> 
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
