"use client";
import React, { useEffect, useState } from "react";
import CheckoutMyBalanceLevels from "./CheckoutMyBalanceLevels";
import { useTranslation } from "next-i18next";
// import { getBalance } from "../../backend/requests";
import useAuthStore from "../../signInLogic/auth";
const CheckoutMyBalanceMain = ({ flowType }) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!
  const getBalance = useAuthStore((state) => state.getBalance);
  // const [amount, setAmount] = useState(0.0);
  // const [withdrawalAddressId, setWithdrawalAddressId] = useState("");
  const [formData, setFormData] = useState({
    amount: 0.0,
    withdrawalAddressId: "",
  });
  const handleSetFormData = (newPayload) => {
    setFormData(newPayload);
  };

  const [balance, setBalance] = useState(0.0);

  const [level, setLevel] = useState(0);

  function incrementLevel() {
    const newLevel = level + 1;
    setLevel(newLevel);
  }

  useEffect(() => {
    getBalance().then((bal) => {
      setBalance(bal);
    });
  }, []);

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
              balance={balance}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckoutMyBalanceMain;
