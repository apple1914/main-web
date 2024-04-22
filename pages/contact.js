import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import ChatwootWidget from "../components/Contact/ChatwootWidget";

const Contact = (props) => {
  const { t } = useTranslation("common");
  const { lng } = props;
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={t("Contact us")}
        homePageUrl="/"
        homePageText="Home"
      />

      <ContactForm />
      <ChatwootWidget lng={lng} />
      <Footer />
    </>
  );
};

export default Contact;

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
