//import { Transak, TransakConfig } from "@transak/transak-sdk";

import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PaymentStatusComponent from "../components/Common/PaymentStatusComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/_App/Footer";
import WhatsappButton from "../components/Common/WhatsappButton";
import { getOnDutyCustomerSupportNumber } from "../lib/customerSupport";
const Failure = (props) => {
  const { customerSupportPhoneNumber } = customerSupportPhoneNumber;
  return (
    <>
      <NavbarTwoFixed />
      <PaymentStatusComponent isSuccess={false} />
      <WhatsappButton
        isMinifiedIcon={true}
        phoneNumber={customerSupportPhoneNumber}
      />
      <Footer />
    </>
  );
};

export default Failure;

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
