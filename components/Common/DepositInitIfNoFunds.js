import {
  createDeposit,
  createWithdrawalUnfunded,
} from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScheduledMaintenanceTimer from "./ScheduledMaintenanceTimer";
import IndefiniteMaintenance from "./IndefiniteMaintenance";
import { isWithdrawalsStopped } from "../../utils/miscConstants";
const IS_SANTEPAY_TEST = process.env.IS_SANTEPAY_TEST === "yes";
const UTC_HOUR_MAINTENANCE_STARTS = 22;
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
      // console.log("is it test?", {
      //   IS_SANTEPAY_TEST,
      //   envs: process.env.IS_SANTEPAY_TEST,
      // });
      const testInputTriggered = IS_SANTEPAY_TEST;
      const isProd = !testInputTriggered;
      const withdrawalResult = await createWithdrawalUnfunded({
        withdrawalAddressId: formData.withdrawalAddressId,
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        isProd,
      });
      const depositPayload = {
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        withdrawal: {
          triggerWithdrawal: true,
          withdrawalId: withdrawalResult.withdrawalId,
        },
        isProd,
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
  const dayOfWeekToday = timeNow.getDay();
  const weekDays = [1, 2, 3, 4, 5];
  const utcMaintenanceStarts = weekDays.includes(dayOfWeekToday)
    ? UTC_HOUR_MAINTENANCE_STARTS
    : UTC_HOUR_MAINTENANCE_STARTS - 1;
  const utcMaintenanceEnds = UTC_HOUR_MAINTENANCE_ENDS;
  if (hoursNow > utcMaintenanceStarts && hoursNow < utcMaintenanceEnds) {
    return "paused";
  }
  return "active";
};
