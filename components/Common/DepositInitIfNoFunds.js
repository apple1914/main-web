"use client";


import { createDeposit } from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DepositInitIfNoFunds({
  formData,
}) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  

  useEffect(() => {
    if (formData) {
      const withdrawal =
      {
        withdrawalAddressId: formData.withdrawalAddressId,
        triggerWithdrawal: true,
      }
      const createDepositPayload = {
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        withdrawal: withdrawal || null,
      };
      createDeposit(createDepositPayload).then((depositInfo) => {
        const {onrampPayload} = depositInfo
        //transakSettings = onrampPayload FYI
        setLoading(false);
        router.push({pathname:"/payment",query:onrampPayload})
      });
    }
  }, []);

  return <>{loading === true ? (<p>Initializing payment...</p>) : (<p>Redirecting to payment...</p>)}</>;
}
