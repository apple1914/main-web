import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatsappButton from "../components/Common/WhatsappButton";
import { getOnDutyCustomerSupportNumber } from "../lib/customerSupport";

const Contact = (props) => {
  const phoneNumber = props.phoneNumber;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactForm phoneNumber={phoneNumber} />

      <WhatsappButton isMinifiedIcon={true} phoneNumber={phoneNumber} />
      <Footer />
    </>
  );
};

export default Contact;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const phoneNumber = await getOnDutyCustomerSupportNumber();

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      phoneNumber: phoneNumber,
    },
  };
}
