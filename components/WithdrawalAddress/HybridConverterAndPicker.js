"use client";
import Converter from "../Converters/Converter";

import PickWithdrawalDestination from "./PickWithdrawalDestination";

// import { useTranslation } from "@/app/i18n/client";
import { Button } from "react-bootstrap";

import { useTranslation } from "next-i18next";

// import dynamic from 'next/dynamic'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   ssr: false,
// })

export default function HybridConverterAndPicker({
  incrementLevel,
  formData,
  setFormData,
  depositPrices,
  withdrawValues,
  lng,
}) {
  const { t } = useTranslation("common");

  const handleClickContinue = () => {
    if (
      !!formData.fiatAmount &&
      !!formData.fiatCurrency &&
      !!formData.withdrawalAddressId &&
      !!formData.convertedFiatCurrency
    ) {
      incrementLevel();
    } else {
      alert("some is undefiend! " + JSON.stringify(formData));
    }
  };

  return (
    <>
      <Converter
        formData={formData}
        setFormData={setFormData}
        lng={lng}
        depositPrices={depositPrices}
        withdrawValues={withdrawValues}
      />

      <PickWithdrawalDestination
        formData={formData}
        setFormData={setFormData}
        lng={lng}
      />
      {!!formData.fiatAmount &&
        !!formData.fiatCurrency &&
        !!formData.withdrawalAddressId &&
        !!formData.convertedFiatCurrency && (
          <div className="d-grid w-100 mx-auto mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleClickContinue();
              }}
            >
              {t("Continue")}
            </button>
          </div>
        )}
    </>
  );
}
