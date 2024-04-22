//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import MercuryoWidget from "../../components/Payment/MercuryoWidget";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ChatwootWidget from "../../components/Contact/ChatwootWidget";

const Payment = (props) => {
  const { lng } = props;
  return (
    <>
      <MercuryoWidget />
      <ChatwootWidget lng={lng} />
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
      lng: locale,
    },
    revalidate: 60,
  };
}
