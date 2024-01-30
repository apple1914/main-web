"use client";


import { createDeposit } from "@/backend/requests";
import { useEffect, useState } from "react";
import { Transak, TransakConfig } from "@transak/transak-sdk";


export default function TransakWidget({
  formData,
  incrementLevel,
  setFormData,
  lng,
}) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z
  const [loading, setLoading] = useState(true);

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
      formData.transakUspeshno = true;
      setFormData(formData);
      incrementLevel();
    });


    Transak.on(Transak.EVENTS.TRANSAK_ORDER_CANCELLED, (orderData) => {
      console.log(orderData);
      console.log("Cancelled");
      // window.alert("Payment Success");
      transak.close();
      formData.transakUspeshno = false;
      setFormData(formData);
      incrementLevel();
    });

    Transak.on(Transak.EVENTS.TRANSAK_ORDER_FAILED, (orderData) => {
      console.log(orderData);
      console.log("Failed");
      // window.alert("Payment Success");
      transak.close();
      formData.transakUspeshno = false;
      setFormData(formData);
      incrementLevel();
    });
  };

  useEffect(() => {
    if (formData) {
      const withdrawal =
      {
        withdrawalAddressId: formData.withdrawalAddressId,
        triggerWithdrawal: true,
      }
      //type 1 means we initiate withdrawal prior to mercuryo deposit
      const createDepositPayload = {
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        withdrawal: withdrawal || null,
      };
      createDeposit(createDepositPayload).then((res) => {
        formData.depositId = res.depositId;
        setFormData(formData);
        const onrampPayload = res.onrampPayload;
        console.log("ONRAMP PAYLOAD IS", onrampPayload);
        // setOnrampPayload(onrampPayload);
        setLoading(false);
        runTransak(onrampPayload);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading === true && (<p>Payment window is loading...</p>)}</>;
}
