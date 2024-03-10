"use client";

import { createDeposit } from "../../backend/requests";
import { useEffect, useState } from "react";
// import { Transak, TransakConfig } from "@transak/transak-sdk";

export default function TransakWidget({
  formData,
  incrementLevel,
  setFormData,
  lng,
}) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (formData) {
      const withdrawal = {
        withdrawalAddressId: formData.withdrawalAddressId,
        triggerWithdrawal: true,
      };
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
        // runTransak(onrampPayload);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFauxButton = ({ success }) => {
    formData.transakUspeshno = success;
    setFormData(formData);
    incrementLevel();
  };

  return (
    <>
      {loading === true ? (
        <p>Payment window is loading...</p>
      ) : (
        <>
          <button onClick={() => handleFauxButton({ success: true })}>
            Success
          </button>
          <button onClick={() => handleFauxButton({ success: false })}>
            Failure
          </button>
        </>
      )}
    </>
  );
}
