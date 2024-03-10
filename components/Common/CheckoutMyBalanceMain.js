"use client";
import React, { useEffect, useState } from "react";
import CheckoutMyBalanceLevels from "./CheckoutMyBalanceLevels";
import { useTranslation } from "next-i18next";
// import { getBalance } from "../../backend/requests";

const CheckoutMyBalanceMain = ({ flowType }) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!

  // const [amount, setAmount] = useState(0.0);
  // const [withdrawalAddressId, setWithdrawalAddressId] = useState("");
  const [formData, setFormData] = useState({
    amount: 0.0,
    withdrawalAddressId: "",
  });

  const [level, setLevel] = useState(0);

  function incrementLevel() {
    const newLevel = level + 1;
    setLevel(newLevel);
  }

  return (
    <div id="content" className="py-4 bg-white">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <CheckoutMyBalanceLevels
              flowType={flowType}
              formData={formData}
              setFormData={setFormData}
              level={level}
              incrementLevel={incrementLevel}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckoutMyBalanceMain;
