"use client";


import { createDeposit } from "../../backend/requests";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScheduledMaintenanceTimer from "./ScheduledMaintenanceTimer"
import IndefiniteMaintenance from "./IndefiniteMaintenance"

import {isWithdrawalsPaused} from "../../utils/miscConstants"
const UTC_HOUR_MAINTENANCE_START = 20
const UTC_HOUR_MAINTENANCE_ENDS = 23

export default function DepositInitIfNoFunds({
  formData,
}) {
  //@ts-ignore
  // const { t } = useTranslation(lng);z
  const [okToContinue,setOkToContinue] = useState(false)
  const [showMaintenance,setShowMaintenance] = useState(false)
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(()=> {
    if (isWithdrawalsPaused === true) {
      return
    }
    //here, do a time of day check.. if time is ok, setOkToContinue(true), else setShowMaintenanceWindow(true)
    //basically continue only if okToContinue is true, which is either button clicked or time of day automatically
    const timeNow = new Date()
    const hoursNow = timeNow.getUTCHours()
    if (hoursNow > UTC_HOUR_MAINTENANCE_START && hoursNow < UTC_HOUR_MAINTENANCE_ENDS) {
      setShowMaintenance(true)
    } else {
      setOkToContinue(true)
    }
  },[])

  const handleClickContinueDespiteMaintenance = () => {
    setOkToContinue(true)
  }

  useEffect(() => {
    if (formData && okToContinue === true) {
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
  }, [okToContinue]);

  return <>
  {/* <p>Loading...</p> */}
  {isWithdrawalsPaused === true && <IndefiniteMaintenance /> }
  {showMaintenance === true && <ScheduledMaintenanceTimer handleClickContinueDespiteMaintenance={handleClickContinueDespiteMaintenance} utcHourMaintenanceEnds={UTC_HOUR_MAINTENANCE_ENDS}/>}
  </>;
}
