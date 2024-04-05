import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";

import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Tracker from "../components/Status/Tracker";

const Test = () => {
  return (
    <>
      {/* <NavbarTwo /> */}

      <Tracker />

      {/* <Footer /> */}
    </>
  );
};

export default Test;

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
