"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
export default function Mercuryo() {
  const [loading, setLoading] = useState(true);
  const [withdrawalId, setWithdrawalId] = useState();
  const [mercuryoSettings, setMercuryoSettings] = useState({});
  const [isProd, setIsProd] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  function getRandomEnding(max) {
    const num = Math.floor(Math.random() * max);
    return num.toString();
  }
  const sendToOutcome = ({ isSuccess }) => {
    if (isSuccess) {
      if (!!withdrawalId) {
        router.push("/withdrawalsuccess?withdrawalId=" + withdrawalId);
      } else {
        router.push("/success");
      }
    } else {
      router.push("/failure");
    }
  };
  const onMercuryoStatusChange = (data) => {
    const { status } = data;

    if (status === "paid") {
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
      const myWithdrawalId = searchParams.get("withdrawalId");
      if (!!myWithdrawalId) setWithdrawalId(myWithdrawalId);
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

      setMercuryoSettings(dynamicMercuryoSettings);
      if (
        searchParams.get("isProd") === "false" ||
        searchParams.get("isProd") === false
      ) {
        setIsProd(false);
      }

      setLoading(false);
    }
  }, [searchParams]);

  return loading === true ? (
    <></>
  ) : (
    <>
      <Script
        strategy="lazyOnload"
        src={
          isProd === true
            ? "https://widget.mercuryo.io/embed.2.0.js"
            : "https://sandbox-widget.mrcr.io/embed.2.0.js"
        }
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
