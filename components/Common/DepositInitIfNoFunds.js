import {
  createDeposit,
  createWithdrawalUnfunded,
} from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScheduledMaintenanceTimer from "./ScheduledMaintenanceTimer";
import IndefiniteMaintenance from "./IndefiniteMaintenance";
import TransakExplainer from "./TransakExplainer";
import { isWithdrawalsStopped } from "../../utils/miscConstants";
const UTC_HOUR_MAINTENANCE_STARTS = 21;
const UTC_HOUR_MAINTENANCE_ENDS = 24;

export default function DepositInitIfNoFunds({ formData }) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z

  const router = useRouter();
  const operationState = getOperationsStateNow();

  const handleClickContinue = () => {
    depositInit();
  };
  useEffect(() => {
    if (operationState === "active") {
      depositInit();
    }
  }, []);

  const depositInit = async () => {
    if (formData) {
      const withdrawalResult = await createWithdrawalUnfunded({
        withdrawalAddressId: formData.withdrawalAddressId,
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
      });
      const depositPayload = {
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        withdrawal: {
          triggerWithdrawal: true,
          withdrawalId: withdrawalResult.withdrawalId,
        },
      };
      createDeposit(depositPayload).then((depositInfo) => {
        const { onrampPayload, onrampName, withdrawal } = depositInfo;
        //transakSettings = onrampPayload FYI
        // alert(JSON.stringify(withdrawal));
        router.push({
          pathname: "/payment/" + onrampName,
          query: { ...onrampPayload, withdrawalId: withdrawal.withdrawalId },
        });
      });
    }
  };

  return (
    <>
      {operationState === "stopped" && <IndefiniteMaintenance />}
      {operationState === "paused" && (
        <ScheduledMaintenanceTimer
          handleClickContinue={handleClickContinue}
          utcHourMaintenanceEnds={UTC_HOUR_MAINTENANCE_ENDS}
        />
      )}
      {/* {operationState === "active" && <TransakExplainer handleClickContinue={handleClickContinue}/> } */}
    </>
  );
}

const getOperationsStateNow = () => {
  if (isWithdrawalsStopped === true) {
    return "stopped";
  }
  const timeNow = new Date();
  const hoursNow = timeNow.getUTCHours();
  if (
    hoursNow > UTC_HOUR_MAINTENANCE_STARTS &&
    hoursNow < UTC_HOUR_MAINTENANCE_ENDS
  ) {
    return "paused";
  }
  return "active";
};
