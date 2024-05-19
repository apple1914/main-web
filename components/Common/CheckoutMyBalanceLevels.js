"use client";
import React, { useState, useEffect } from "react";
import PickWithdrawalDestination from "../WithdrawalAddress/PickWithdrawalDestination";
import DepositInitAddBalance from "./DepositInitAddBalance";
import ConfirmWithdrawal from "./ConfirmWithdrawal";
import { useTranslation } from "next-i18next";
import { toast } from "react-hot-toast";
import ConverterAddBalance from "../Converters/ConverterAddBalance";
import ConverterWithdrawBalance from "../Converters/ConverterWithdrawBalance";

const CheckoutMyBalanceLevels = ({
  flowType,
  formData,
  setFormData,
  level,
  incrementLevel,
}) => {
  const { t } = useTranslation("common");

  if (flowType === "/mybalance/add") {
    return (
      <>
        <div className="mx-auto text-center pt-5">
          {t("checkoutMyBalance.addTitle")}
        </div>
        <AddMyBalanceLevels
          formData={formData}
          setFormData={setFormData}
          incrementLevel={incrementLevel}
          level={level}
        />
      </>
    );
  }
  if (flowType === "/mybalance/withdraw") {
    return (
      <>
        <div className="mx-auto text-center pt-5">
          {t("checkoutMyBalance.wdrwTitle")}
        </div>
        <WithdrawMyBalanceLevels
          formData={formData}
          setFormData={setFormData}
          incrementLevel={incrementLevel}
          level={level}
        />
      </>
    );
  }
  return <></>;
};

const AddMyBalanceLevels = ({
  formData,
  setFormData,
  level,
  incrementLevel,
}) => {
  switch (level) {
    case 0:
      return (
        <ConverterAddBalance
          formData={formData}
          setFormData={setFormData}
          incrementLevel={incrementLevel}
        />
      );
    case 1:
      return (
        <>
          <DepositInitAddBalance formData={formData} />
        </>
      );

    default:
      return <></>;
  }
};

const WithdrawMyBalanceLevels = ({
  formData,
  setFormData,
  level,
  incrementLevel,
  lng,
}) => {
  switch (level) {
    case 0:
      return (
        <ConverterWithdrawBalance
          formData={formData}
          setFormData={setFormData}
          incrementLevel={incrementLevel}
        />
      );
    case 1:
      return (
        <div className="bg-white shadow rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-10">
          <PickWithdrawalDestination
            formData={formData}
            setFormData={setFormData}
          />
          {!!formData.withdrawalAddressId && (
            <div className="d-grid w-100 mx-auto mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (!!formData.withdrawalAddressId) {
                    incrementLevel();
                  }
                }}
              >
                {t("Continue")}
              </button>
            </div>
          )}
          <div className="m-3">
            <Offramper
              // triggerUpdateRecipients={triggerUpdateRecipients}
              lng={lng}
              incrementLevel={incrementLevel}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <>
          <ConfirmWithdrawal formData={formData} />
        </>
      );

    default:
      return <></>;
  }
};

export default CheckoutMyBalanceLevels;
