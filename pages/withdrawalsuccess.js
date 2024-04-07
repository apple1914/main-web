//import { Transak, TransakConfig } from "@transak/transak-sdk";
// import React, { useEffect, useState } from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import WithdrawalSuccessScreenMain from "../components/Status/WithdrawalSuccessScreenMain";
import Footer from "../components/_App/Footer";
import WhatsappButton from "../components/Common/WhatsappButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getOnDutyCustomerSupportNumber } from "../lib/customerSupport";
// import { fetchWithdrawalTrackingInfo } from "../lib/withdrawals";
function WithdrawalSuccess({ customerSupportPhoneNumber }) {
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
      {/* <NavbarTwoFixed /> */}
      <WithdrawalSuccessScreenMain />
      {/* {!!customerSupportPhoneNumber && (
        <WhatsappButton
          isMinifiedIcon={true}
          phoneNumber={customerSupportPhoneNumber}
        />
      )} */}
      {/* <Footer /> */}
    </>
  );
}

export default WithdrawalSuccess;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  const customerSupportPhoneNumber = await getOnDutyCustomerSupportNumber();

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      customerSupportPhoneNumber: customerSupportPhoneNumber,
    },
    revalidate: 60,
  };
}
