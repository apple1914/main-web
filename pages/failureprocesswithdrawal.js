//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import ProcessWithdrawalStatusComponent from "../components/Common/ProcessWithdrawalStatusComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/_App/Footer";
const Failure = () => {
  return (
    <>
      <NavbarTwoFixed />
      <ProcessWithdrawalStatusComponent isSuccess={false} />
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
