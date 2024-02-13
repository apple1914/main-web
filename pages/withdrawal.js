// import Stepper from "@/components/Stepper";
import CheckoutMain from "../components/Common/CheckoutMain";

import NavbarTwo from '../components/_App/NavbarTwo';
import Footer from '../components/_App/Footer';
import RedirectIfNotSignedIn from "../components/Common/RedirectIfNotSignedIn"
import CaptureMarketingInfo from '../components/Common/CaptureMarketingInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";


function Withdrawal(props) {
  //@ts-ignore
  const {lng} = props


  
  return (
    <>
    <NavbarTwo />

    <CheckoutMain lng={lng}/>
    <Footer />
    <CaptureMarketingInfo />
    <RedirectIfNotSignedIn/>

    </>
    
  );
}

export default Withdrawal;



export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),lng:locale
    },
  }
}