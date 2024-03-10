"use client";
import depositMinimumsMap from "../../utils/depositMinimums.json";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { useTranslation } from "next-i18next";
import useAuthStore from "../../signInLogic/auth";

export default function Converter({ incrementLevel, setFormData, formData }) {
  const { t } = useTranslation("common");
  const getBalance = useAuthStore((state) => state.getBalance);
  const [balance, setBalance] = useState(0.0);
  const [loading, setLoading] = useState(true);
  const [wdrwAmount, setWdrwAmount] = useState(0.0);

  const handleChangeAmount = (value) => {
    setWdrwAmount(value);
  };

  useEffect(() => {
    getBalance().then((bal) => {
      setBalance(bal);
      setLoading(false);
    });
  }, []);

  const handleSubmit = () => {
    if (balance === null) return;
    if (wdrwAmount > balance) {
      toast.error("Available balance: " + balance.toFixed(2));
      setWdrwAmount(0.0);
      return;
    }
    if (wdrwAmount < depositMinimumsMap["USD"]) {
      toast.error(
        "Minimum for withdrawal: " + depositMinimumsMap["USD"].toFixed(2)
      );
      setWdrwAmount(0.0);
      return;
    }
    formData.amount = wdrwAmount;
    setFormData(formData);
    incrementLevel();
  };
  return (
    <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
      <div className="mb-3 w-100 mx-auto">
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            data-bv-field="amount"
            id="amount"
            value={wdrwAmount}
            onChange={(e) => {
              e.preventDefault();
              handleChangeAmount(e.target.value);
            }}
            placeholder=""
          />
          <span className="input-group-text p-2 bg-white">
            <i
              className={`currency-flag currency-flag-usd m-1 ms-3 rounded`}
            ></i>
          </span>
        </div>
      </div>
      {!loading && (
        <p className="text-center">
          {t("Your balance")}: {balance?.toFixed(2)}
        </p>
      )}
      {!loading && (
        <div className="d-grid w-100 mx-auto">
          <button
            className={`btn btn-primary`}
            onClick={() => {
              handleSubmit();
            }}
          >
            {t("Continue")}
          </button>
        </div>
      )}
    </div>
  );
}
