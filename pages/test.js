import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ChatWindowMain from "../components/Chat/ChatWindowMain";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useAuthStore from "../signInLogic/auth";

const Test = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Hello World"
        homePageUrl="/"
        homePageText="Home"
        activePageText="HowItWorks"
      />

      {!!user && <ChatWindowMain roomId={user.uid} />}

      <Footer />
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
