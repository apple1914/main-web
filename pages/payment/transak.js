//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import TransakWidget from "../../components/Payment/TransakWidget";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Payment = () => {
  return (
    <>
      <NavbarTwoFixed />
      <TransakWidget />
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
