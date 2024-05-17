"use client";
import Converter from "../Converters/Converter";

import PickWithdrawalDestination from "./PickWithdrawalDestination";
import Offramper from "./Offramper";

// import { useTranslation } from "@/app/i18n/client";
import { Button } from "react-bootstrap";
import useAuthStore from "../../signInLogic/auth";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { fetchWithdrawalAddressesV2 } from "../../backend/requests";
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
  allInputsAreReady,
  withdrawalAddresses,
}) {
  const { t } = useTranslation("common");

  const handleClickContinue = () => {
    if (allInputsAreReady) {
      incrementLevel();
    } else {
      alert("some is undefiend! " + JSON.stringify(formData));
    }
  };

  return (
    <div>
      <Converter
        formData={formData}
        setFormData={setFormData}
        lng={lng}
        depositPrices={depositPrices}
        withdrawValues={withdrawValues}
      />
      <div className="py-3 mx-3 w-100"></div>
      {withdrawalAddresses.length > 0 && (
        <PickWithdrawalDestination
          formData={formData}
          setFormData={setFormData}
          lng={lng}
          withdrawalAddresses={withdrawalAddresses}
        />
      )}
      {allInputsAreReady && (
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

      {withdrawalAddresses.length > 0 && (
        <div className="text-center my-3">or</div>
      )}
      <Offramper
        // triggerUpdateRecipients={triggerUpdateRecipients}
        lng={lng}
        incrementLevel={incrementLevel}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
