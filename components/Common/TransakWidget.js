"use client";


import { useEffect, useState } from "react";
import { Transak, TransakConfig } from "@transak/transak-sdk";
import {useRouter,useSearchParams} from "next/navigation"

export default function TransakWidget() {
  
  const searchParams = useSearchParams()
  const router = useRouter()

  


  const runTransak = (settings) => {
    const transak = new Transak(settings);

    transak.init();

    // This will trigger when the user closed the widget
    Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
      console.log(eventData);
      transak.close();
    });
    Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      console.log("Payment Success");
      // window.alert("Payment Success");
      transak.close();
      sendToOutcome({isSuccess:true})

    });


    Transak.on(Transak.EVENTS.TRANSAK_ORDER_CANCELLED, (orderData) => {
      console.log(orderData);
      console.log("Cancelled");
      // window.alert("Payment Success");
      transak.close();
      sendToOutcome({isSuccess:false})

      
    });

    Transak.on(Transak.EVENTS.TRANSAK_ORDER_FAILED, (orderData) => {
      console.log(orderData);
      console.log("Failed");
      // window.alert("Payment Success");
      transak.close();
      sendToOutcome({isSuccess:false})
     
    });
  };
  useEffect(()=> {
    if (searchParams && searchParams.get("apiKey")) {
      // alert("AAA")
      // alert(searchParams.get("apiKey"))
      const transakDynamicSettings = {
        apiKey:searchParams.get("apiKey"),
        environment:searchParams.get("environment"),
        fiatAmount:searchParams.get("fiatAmount"),
        fiatCurrency:searchParams.get("fiatCurrency"),
        cryptoCurrencyCode:searchParams.get("cryptoCurrencyCode"),
        network:searchParams.get("network"),
        walletAddress:searchParams.get("walletAddress"),
        partnerOrderId:searchParams.get("partnerOrderId"),
      }
      const transakStaticSettings = {
        themeColor: "000000", // App theme color
        // hostURL: window.location.origin,
        widgetHeight: "700px",
        widgetWidth: "500px",
        hideExchangeScreen: true,
        disableWalletAddressForm: true,
      };
      const transakSettings = {...transakDynamicSettings,...transakStaticSettings}
      runTransak(transakSettings)
    }
  },[searchParams])


  

  const sendToOutcome = ({isSuccess}) => {
    if (isSuccess) {
      router.push("/success")
    } else {
      router.push("/failure")
    }
    
  }

 
  return <></>;
}
