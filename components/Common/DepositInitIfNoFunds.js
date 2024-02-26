import { createDeposit } from "../../lib/deposits";
import useAuthStore from "../../signInLogic/auth";
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
  const user = useAuthStore((state) => state.user);


 



  const handleClickContinue = () => {
    depositInit()
  }





  const depositInit = () => {
    if (formData && !!user) {
      createDeposit({
        username,
        fiatAmount:formData.fiatAmount,
        fiatCurrency:formData.fiatCurrency,
        triggerWithdrawal:true,
        withdrawalAddressId:formData.withdrawalAddressId,
      }).then((depositInfo) => {
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