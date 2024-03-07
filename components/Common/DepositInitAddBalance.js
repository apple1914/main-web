import { createDeposit } from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DepositInitAddBalance({ formData }) {
  const router = useRouter();

  useEffect(() => {
    depositInit();
  }, []);

  const depositInit = () => {
    if (formData) {
      const depositPayload = {
        fiatAmount: formData.amount,
        fiatCurrency: "USD",
      };
      createDeposit(depositPayload).then((depositInfo) => {
        //it should be okay to resuse same create`deposit endpoint since this time withdrawal object is null => no withdrawal is generated
        const { onrampPayload } = depositInfo;
        //transakSettings = onrampPayload FYI
        setLoading(false);
        router.push({ pathname: "/payment", query: onrampPayload });
      });
    }
  };

  return <></>;
}
