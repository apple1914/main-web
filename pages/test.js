import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";

import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BillingInfo from "../components/Common/BillingInfo";

const Test = () => {
  return (
    <>
      {/* <NavbarTwo /> */}

      {/* <BillingInfo /> */}
      <p>hui</p>

      {/* <Footer /> */}
    </>
  );
};

export default Test;

export async function getServerSideProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
