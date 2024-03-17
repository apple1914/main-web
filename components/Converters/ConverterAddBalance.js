"use client";
import depositMinimumsMap from "../../utils/depositMinimums.json";
import { useState } from "react";
import React from "react";
import { toast } from "react-hot-toast";

import { useTranslation } from "next-i18next";

export default function Converter({ incrementLevel, setFormData, formData }) {
  const { t } = useTranslation("common");

  const [addAmount, setAddAmount] = useState(0.0);

  const handleChangeAmount = (val) => {
    setAddAmount(val);
  };

  const handleSubmit = () => {
    if (addAmount < depositMinimumsMap["USD"]) {
      toast.error("Minimum for deposit is €25");
      setAddAmount(0.0);
      return;
    }
    formData.amount = addAmount;
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
            value={addAmount}
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
    </div>
  );
}
