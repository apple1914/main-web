//import { Transak, TransakConfig } from "@transak/transak-sdk";
// import React, { useEffect, useState } from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import WithdrawalSuccessScreenMain from "../components/Status/WithdrawalSuccessScreenMain";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ChatwootWidget from "../components/Contact/ChatwootWidget";

// import { fetchWithdrawalTrackingInfo } from "../lib/withdrawals";
function WithdrawalSuccess(props) {
  const { lng } = props;
  // //@ts-ignore
  // const { t, ready, i18n } = useTranslation("common");
  // const [phoneNumber, setPhoneNumber] = useState("");

  // useEffect(() => {
  //   getOnDutyCustomerSupportNumber().then((myPhoneNumber) => {
  //     setPhoneNumber(myPhoneNumber);
  //   });
  // });

  return (
    <>
      <NavbarTwoFixed />
      <WithdrawalSuccessScreenMain />
      <ChatwootWidget lng={lng} />
      <Footer />
    </>
  );
}

export default WithdrawalSuccess;

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
