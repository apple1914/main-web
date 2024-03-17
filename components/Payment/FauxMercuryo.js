"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function FauxMercuryo() {
  const [loading, setLoading] = useState(true);
  const [mercuryoSettings, setMercuryoSettings] = useState({});
  const searchParams = useSearchParams();

  function getRandomEnding(max) {
    const num = Math.floor(Math.random() * max);
    return num.toString();
  }
  const sendToOutcome = ({ isSuccess }) => {
    if (isSuccess) {
      router.push("/success");
    } else {
      router.push("/failure");
    }
  };
  const onMercuryoStatusChange = (data) => {
    const { status } = data;

    if (status === "paid") {
      formData.mercuryoSuccess = true;
      sendToOutcome({ isSuccess: true });
    }
    if (
      status === "order_failed" ||
      status === "cancelled" ||
      status === "descriptor_failed" ||
      status === 400 ||
      status === "400" ||
      status === 403 ||
      status === "403"
    ) {
      sendToOutcome({ isSuccess: false });
    }
  };

  useEffect(() => {
    if (searchParams && searchParams.get("widgetId")) {
      const depositId = searchParams.get("depositId");
      const dynamicMercuryoSettings = {
        currency: searchParams.get("currency"),
        network: searchParams.get("network"),
        fiatCurrency: searchParams.get("fiatCurrency"),
        fiatAmount: searchParams.get("fiatAmount"),
        address: searchParams.get("address"),
        signature: searchParams.get("signature"),
        widgetId: searchParams.get("widgetId"),
        merchantTransactionId: `${depositId}-${getRandomEnding(9)}`,
      };

      const staticMercuryoSettings = {
        fixFiatCurrency: true,
        fixFiatAmount: true,
        fixAmount: true,
        fixCurrency: true,
        host: document.getElementById("mercuryo-widget"),
        onStatusChange: (data) => onMercuryoStatusChange(data),
      };
      setMercuryoSettings({
        ...dynamicMercuryoSettings,
        ...staticMercuryoSettings,
      });

      setLoading(false);
    }
  }, [searchParams]);

  return loading === true ? (
    <></>
  ) : (
    <>
      <div className="text-center mt-5">
        <p>{"faux mercuryo!"}</p>
        <>{JSON.stringify(mercuryoSettings)}</>
        <p>{mercuryoSettings?.address}</p>
        <p>{mercuryoSettings?.network}</p>
        <p>{mercuryoSettings?.depositId}</p>
        <button
          onClick={() => {
            onMercuryoStatusChange({ status: "paid" });
          }}
        >
          Success
        </button>

        <button
          onClick={() => {
            onMercuryoStatusChange({ status: "order_failed" });
          }}
        >
          Failure
        </button>
      </div>
    </>
  );
}
