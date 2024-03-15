import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Testimonials = () => {
  return (
    <>
      <NavbarTwoFixed />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />
      <TestimonialStyleTwo />

      <Footer />
    </>
  );
};

export default Testimonials;

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
