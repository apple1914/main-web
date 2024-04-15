import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatsappButton from "../components/Common/WhatsappButton";
import { getOnDutyCustomerSupportNumber } from "../lib/customerSupport";
import { useTranslation } from "next-i18next";
const Contact = (props) => {
  const { t } = useTranslation("common");
  const phoneNumber = props.phoneNumber;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={t("Contact us")}
        homePageUrl="/"
        homePageText="Home"
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
