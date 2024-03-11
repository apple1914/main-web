//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import FauxMercuryoWidget from "../../components/Payment/FauxMercuryo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Payment = () => {
  return (
    <>
      <NavbarTwoFixed />
      <FauxMercuryoWidget />
    </>
  );
};

export default Payment;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
