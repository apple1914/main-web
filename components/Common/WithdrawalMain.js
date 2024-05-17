"use client";
import React, { useEffect, useState } from "react";
import WithdrawalLevels from "./WithdrawalLevels";
import Leveler from "./Leveler";
import { useTranslation } from "next-i18next";

import {
  DEFAULT_WITHDRAWAL_CURRENCY,
  DEFAULT_DEPOSIT_CURRENCY,
  DEFAULT_DEPOSIT_AMOUNT,
} from "../../utils/defaultConverterPresets";

const WithdrawalMain = ({
  lng,
  handleSaveCustomEvent,
  depositPrices,
  withdrawValues,
}) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!
  const [allInputsAreReady, setAllInputsAreReady] = useState(false);
  const [formData, trigSetFormData] = useState({
    fiatAmount: DEFAULT_DEPOSIT_AMOUNT,
    fiatCurrency: DEFAULT_DEPOSIT_CURRENCY,
    withdrawalAddressId: "",
    convertedFiatCurrency: DEFAULT_WITHDRAWAL_CURRENCY,
    flowType: "withdrawal",
  });

  const setFormData = (val) => {
    trigSetFormData(val);
    console.log("triggered");
    if (
      !!val.fiatAmount &&
      !!val.fiatCurrency &&
      !!val.withdrawalAddressId &&
      !!val.convertedFiatCurrency &&
      val.withdrawalAddressId !== "defaultWithdrawalAddressId"
    ) {
      console.log("PING");
      setAllInputsAreReady(true);
    } else {
      console.log("PONG");
      setAllInputsAreReady(false);
    }
  };

  const [level, setLevel] = useState(0);

  const levelNames = ["view-converter", "view-to-address", "view-deposit-init"];
  useEffect(() => {
    handleSaveCustomEvent(levelNames[level]);
  }, [level]);

  function incrementLevel() {
    const newLevel = level + 1;
    // setLevel(newLevel);
    console.log("inc level called, formData:", formData);
  }
  return (
    <div id="content" className="py-4 bg-white">
      <div className="container pt-5">
        <div className="mx-auto text-center pt-5">{t("checkoutMain.h1")}</div>
        <div className="row pt-5">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <WithdrawalLevels
              lng={lng}
              formData={formData}
              setFormData={setFormData}
              level={level}
              incrementLevel={incrementLevel}
              depositPrices={depositPrices}
              withdrawValues={withdrawValues}
              allInputsAreReady={allInputsAreReady}
            />
          </div>
        </div>
        <div></div>

        <div className="pt-5">
          <Leveler level={level} />
        </div>
      </div>
    </div>
  );
};

export default WithdrawalMain;
