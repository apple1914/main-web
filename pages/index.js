import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import MainBanner from "../components/HomeTwo/MainBanner";
import SideBenefitCards from "../components/HomeTwo/SideBenefitCards";
import AboutUs from "../components/HomeTwo/AboutUs";
import HowItWorks from "../components/HomeTwo/HowItWorks";

import Services from "../components/HomeTwo/Services";
import OffersArea from "../components/Common/OffersArea";
import WhyChooseUs from "../components/HomeTwo/WhyChooseUs";
import TeamSlider from "../components/Common/TeamSlider";
import FunFactsStyleTwo from "../components/Common/FunFactsStyleTwo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import ContactWithUs from "../components/HomeTwo/ContactWithUs";
import Footer from "../components/_App/Footer";
import CaptureMarketingInfo from "../components/Common/CaptureMarketingInfo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "../lib/currencies";

const Index = (props) => {
  const { depositPrices, withdrawValues, lng } = props;
  return (
    <>
      <NavbarTwoFixed />

      <MainBanner
        depositPrices={depositPrices}
        withdrawValues={withdrawValues}
      />

      {/* <Services /> */}

      <WhyChooseUs />

      <SideBenefitCards />

      {/* <AboutUs /> */}

      <div className="pb-100">
        <OffersArea />
      </div>

      {/* <TeamSlider /> */}

      <FunFactsStyleTwo />

      {/* <TestimonialStyleTwo /> */}

      {/* <div className="pb-100">
                <ContactWithUs />
            </div> */}

      <Footer />
      <CaptureMarketingInfo />
    </>
  );
};

export default Index;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const depositPrices = await getDepositCurrenciesAndRates();
  const withdrawValues = await getWithdrawCurrenciesAndRates();

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      depositPrices: depositPrices,
      withdrawValues: withdrawValues,
      lng: locale,
    },
  };
}
