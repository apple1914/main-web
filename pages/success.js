//import { Transak, TransakConfig } from "@transak/transak-sdk";


import React from 'react';
import NavbarTwoFixed from '../components/_App/NavbarTwoFixed';
import PaymentStatusComponent from '../components/Common/PaymentStatusComponent';
import {useRouter} from "next/navigation"
import Footer from '../components/_App/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'//


const Success = () => {
    const router = useRouter()
    
    return (
        <>
            <NavbarTwoFixed />
            <PaymentStatusComponent isSuccess={true}/> 

           <Footer />
        </>
    )
}

export default Success;


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