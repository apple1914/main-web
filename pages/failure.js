//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PaymentStatusComponent from "../components/Common/PaymentStatusComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/_App/Footer";
import ChatwootWidget from "../components/Contact/ChatwootWidget";

const Failure = (props) => {
  const { lng } = props;
  return (
    <>
      <NavbarTwoFixed />
      <PaymentStatusComponent isSuccess={false} />
      <ChatwootWidget lng={lng} />
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
      lng: locale,
    },
    revalidate: 60,
  };
}
