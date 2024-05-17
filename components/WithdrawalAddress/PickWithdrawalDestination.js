"use client";
import { useEffect, useState } from "react";

import { toast } from "react-hot-toast";

// import { useTranslation } from "@/app/i18n/client";
import { Form, Button } from "react-bootstrap";

import { useTranslation } from "next-i18next";

// import dynamic from 'next/dynamic'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   ssr: false,
// })

export default function PickWithdrawalDestination({
  formData,
  setFormData,
  withdrawalAddresses,
  lng,
}) {
  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(true);

  const handleSelectRecipient = async (pickedWithdrawalAddressId) => {
    formData.withdrawalAddressId = pickedWithdrawalAddressId;
    setFormData(formData);
  };

  return (
    <div>
      <hr className="mx-n3 mx-sm-n5 mb-4" />

      <div>
        <p className="text-5 fw-400 mb-0 text-muted mx-1 my-1 py-1">
          {t("pickWithdrawalDestination.h1")}
        </p>
        <select
          className="form-select"
          disabled={false}
          onChange={(e) => {
            e.preventDefault();
            if (!e.target.value) return;
            handleSelectRecipient(e.target.value);
          }}
          placeholder={"ASS"}
        >
          <option
            key={"defaultWithdrawalAddressId"}
            value={"defaultWithdrawalAddressId"}
          >
            {t("Choose")}...
          </option>
          {withdrawalAddresses.map((destination) => {
            return (
              // <div className="border rounded py-2 my-2">
              <option
                key={destination.withdrawalAddressId}
                value={destination.withdrawalAddressId}
              >
                {destination.nickname}
              </option>
              // </div>
            );
          })}
        </select>
      </div>
    </div>
  );
}
