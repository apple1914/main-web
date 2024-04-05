//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PaymentStatusComponent from "../components/Common/PaymentStatusComponent";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; //
import WhatsappButton from "../components/Common/WhatsappButton";
import { getOnDutyCustomerSupportNumber } from "../lib/customerSupport";

const Success = (props) => {
  const { customerSupportPhoneNumber } = props;

  return (
    <>
      <NavbarTwoFixed />
      <PaymentStatusComponent isSuccess={true} />
      <WhatsappButton
        isMinifiedIcon={true}
        phoneNumber={customerSupportPhoneNumber}
      />
      <Footer />
    </>
  );
};

export default Success;

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
