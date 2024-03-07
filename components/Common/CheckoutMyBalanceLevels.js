import React from "react";

import SimpleUsdtAmount from "./SimpleUsdtAmount";
import PickWithdrawalDestination from "./PickWithdrawalDestination";
import DepositInitAddBalance from "./DepositInitAddBalance";
import ConfirmWithdrawal from "./ConfirmWithdrawal";
import depositMinimumsMap from "../../utils/depositMinimums.json";

const CheckoutMyBalanceLevels = ({
  flowType,
  formData,
  setFormData,
  level,
  incrementLevel,
  balance,
}) => {
  if (flowType === "/mybalance/add") {
    return AddMyBalanceLevels({
      flowType,
      formData,
      setFormData,
      level,
      incrementLevel,
    });
  }
  if (flowType === "/mybalance/withdraw") {
    return WithdrawMyBalanceLevels({
      flowType,
      formData,
      setFormData,
      level,
      incrementLevel,
      balance,
    });
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
        <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
          <SimpleUsdtAmount
            amount={formData.amount}
            handleChangeAmount={(value) => {
              formData.amount = value;
              setFormData(formData);
            }}
            invalid={formData.amount < depositMinimumsMap["USD"]}
          />
          <div className="d-grid w-100 mx-auto">
            <button
              className={`btn btn-primary`}
              onClick={() => {
                incrementLevel();
              }}
            >
              {t("Continue")}
            </button>
          </div>
        </div>
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
  balance,
}) => {
  switch (level) {
    case 0:
      return (
        <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
          <SimpleUsdtAmount
            amount={formData.amount}
            handleChangeAmount={(value) => {
              formData.amount = value;
              setFormData(formData);
            }}
            invalid={
              formData.amount > balance &&
              formData.amount > depositMinimumsMap["USD"]
            }
          />
          <div className="d-grid w-100 mx-auto">
            <button
              className={`btn btn-primary`}
              onClick={() => {
                incrementLevel();
              }}
            >
              {t("Continue")}
            </button>
          </div>
        </div>
      );
    case 1:
      return (
        <>
          <PickWithdrawalDestination
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
          />
        </>
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
