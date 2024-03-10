//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PaymentStatusComponent from "../components/Common/PaymentStatusComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/_App/Footer";
const Failure = () => {
  return (
    <>
      <NavbarTwoFixed />
      <PaymentStatusComponent isSuccess={false} />
      <Footer />
    </>
  );
};

export default Failure;

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
