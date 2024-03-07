"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";
import { lookupWithdrawalAddressById } from "../../backend/requests";
import { createWithdrawal } from "../../lib/firebase/onCall";
import { useRouter } from "next/router";
export default function ConfirmWithdrawal({ formData }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [nick, setNick] = useState("");

  useEffect(() => {
    lookupWithdrawalAddressById({
      withdrawalAddressId: formData.withdrawalAddressId,
    }).then((withdrawalAddressObject) => {
      const myNick = withdrawalAddressObject.nickname;
      setNick(myNick);
    });
  }, []);

  const handleClickContinue = () => {
    if (formData) {
      const withdrawalPayload = {
        withdrawalAddressId: formData.withdrawalAddressId,
        usdtAmount: formData.amount,
      };
      createWithdrawal(withdrawalPayload)
        .then((success) => {
          if (success === true) {
            router.push("/success");
          } else {
            router.push("/failure");
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/failure");
        });
    }
  };

  return (
    <>
      <div className="bg-white shadow rounded w-75 mx-auto p-4 py-5 my-10">
        <h5 className="fw-400 text-center">{t("confirmWithdrawal.title")}</h5>

        <p className="fw-400 mt-4">${formData.amount}</p>
        <p className="fw-400">to: {nick}</p>

        <button
          className="btn btn-primary text-white mt-3 my-1 mx-1 w-100 mx-auto"
          onClick={(e) => {
            e.preventDefault();
            handleClickContinue();
          }}
        >
          {t("Confirm")}
        </button>
      </div>
    </>
  );
}
