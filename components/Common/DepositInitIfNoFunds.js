"use client";


import { createDeposit } from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScheduledMaintenanceTimer from "./ScheduledMaintenanceTimer"
import IndefiniteMaintenance from "./IndefiniteMaintenance"
import TransakExplainer from "./TransakExplainer"
import {isWithdrawalsStopped} from "../../utils/miscConstants"
const UTC_HOUR_MAINTENANCE_START = 20
const UTC_HOUR_MAINTENANCE_ENDS = 23



export default function DepositInitIfNoFunds({
  formData,
}) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z

  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const operationState = getOperationsStateNow()

 



  const handleClickContinue = () => {
    depositInit()
  }




  const depositInit = () => {
    if (formData) {
      const withdrawal =
      {
        withdrawalAddressId: formData.withdrawalAddressId,
        triggerWithdrawal: true,
      }
      const createDepositPayload = {
        fiatAmount: formData.fiatAmount,
        fiatCurrency: formData.fiatCurrency,
        withdrawal: withdrawal || null,
      };
      createDeposit(createDepositPayload).then((depositInfo) => {
        const {onrampPayload} = depositInfo
        //transakSettings = onrampPayload FYI
        setLoading(false);
        router.push({pathname:"/payment",query:onrampPayload})
      });
    }
  }
  

  return <>
  {operationState === "stopped" && <IndefiniteMaintenance /> }
  {operationState === "paused" && <ScheduledMaintenanceTimer handleClickContinue={handleClickContinue} utcHourMaintenanceEnds={UTC_HOUR_MAINTENANCE_ENDS}/>}
  {operationState === "active" && <TransakExplainer handleClickContinue={handleClickContinue}/> }
  </>;
}


const getOperationsStateNow = () => {
  if (isWithdrawalsStopped === true) {
    return "stopped"
  }
  const timeNow = new Date()
  const hoursNow = timeNow.getUTCHours()
  if (hoursNow > UTC_HOUR_MAINTENANCE_START && hoursNow < UTC_HOUR_MAINTENANCE_ENDS) {
    return "paused"
  }
  return "active"
}