//import { Transak, TransakConfig } from "@transak/transak-sdk";


import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import TransakWidget from '../components/Common/TransakWidget';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Payment = () => {
    return (
        <>
            <NavbarTwo />
           <TransakWidget /> 
        </>
    )
}

export default Payment;


export async function getStaticProps(context) {
    // extract the locale identifier from the URL
    const { locale } = context
  
    return {
      props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale)),
      },
    }
  }