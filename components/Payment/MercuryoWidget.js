"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
export default function Mercuryo() {
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
        signedAddress: searchParams.get("signedAddress"),
        widgetId: searchParams.get("widgetId"),
        merchantTransactionId: `${depositId}-${getRandomEnding(9)}`,
      };

      setMercuryoSettings(dynamicMercuryoSettings);

      setLoading(false);
    }
  }, [searchParams]);

  return loading === true ? (
    <></>
  ) : (
    <>
      <Script
        strategy="lazyOnload"
        src="https://sandbox-widget.mrcr.io/embded.2.0.js" //https://widget.mercuryo.io/embed.2.0.js
        onLoad={() => {
          try {
            const staticMercuryoSettings = {
              fixFiatCurrency: true,
              fixFiatAmount: true,
              fixAmount: true,
              fixCurrency: true,
              host: document.getElementById("mercuryo-widget"),
              onStatusChange: (data) => onMercuryoStatusChange(data),
            };
            const fullMercuryoSettings = {
              ...mercuryoSettings,
              ...staticMercuryoSettings,
            };
            window.mercuryoWidget.run(fullMercuryoSettings);
          } catch (e) {
            console.log(e);
          }
        }}
      />
      <div
        id="mercuryo-widget"
        style={{
          height: "100vh",
          width: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></div>
    </>
  );
}
