"use client";
import React, { useEffect, useState } from "react";
import DepositLevels from "./DepositLevels";
import Leveler from "./Leveler";
import { useTranslation } from "next-i18next";
const CheckoutDeposit = ({ lng, handleSaveCustomEvent }) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!

  const [formData, setFormData] = useState({
    fiatAmount: 0.0,
    fiatCurrency: "",
    withdrawalAddressId: "",
    convertedFiatCurrency: "",
    flowType: "deposit",
  });

  const [level, setLevel] = useState(0);

  const levelNames = ["view-converter", "view-to-address", "view-deposit-init"];
  useEffect(() => {
    handleSaveCustomEvent(levelNames[level]);
  }, [level]);

  function incrementLevel() {
    const newLevel = level + 1;
    setLevel(newLevel);
  }
  return (
    <div id="content" className="py-4 bg-white">
      <div className="container pt-5">
        <div className="mx-auto text-center pt-5">
          {t("checkoutDeposit.h1")}
        </div>
        <div className="row pt-5">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <DepositLevels
              lng={lng}
              formData={formData}
              setFormData={setFormData}
              level={level}
              incrementLevel={incrementLevel}
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

export default CheckoutDeposit;