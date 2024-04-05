import Leveler from "../Common/Leveler";
import { useTranslation } from "next-i18next";
import WithdrawalCountdownAndProgress from "./WithdrawalCountdownAndProgress";
import SuccessInitializingWithdraw from "./SuccessInitializingWithdraw";
import { fetchWithdrawalTrackingInfo } from "../../backend/requests";
import SuccessFinishedWithdrawal from "./SuccessFinishedWithdrawal";
import { useState, useEffect } from "react";
// NOTE! you DONT need the withdrawal/deposit schema changes in order to finish this!
// for this tracker to be finished, all you need is just a standalone /withdrawal/:withdrawalId lookup object
// so feel free to run and deug this and make a pr and ake the changes only after! (what about tusti though..undefined defaults to false)
//
//
//
//
//
//
//
//

export default function WithdrawalSuccessScreenMain({ withdrawalId }) {
  //@ts-ignore
  const { t } = useTranslation("common");
  const [deadline, setDeadline] = useState(null);
  const [tusti, setTusti] = useState(false);
  const refreshWithdrawalInfo = () => {
    fetchWithdrawalTrackingInfo({ withdrawalId }).then((data) => {
      setTusti(data?.tusti === true);
      if (deadline === null) {
        const { createdAt } = data;
        setDeadline(createdAt._seconds * 1000 + 60 * 60 * 1000); //only set it once for now this is 60 but should be 15 mins
      }
    });
  }; //basically once status is tusti = true, then don't show the tracker anymore!

  useEffect(() => {
    const interval = setInterval(() => refreshWithdrawalInfo(), 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content py-4 mt-5">
      <div className="container mt-5">
        TEEEEEEST {t("Continue")}
        {!!deadline && tusti === false && (
          <WithdrawalCountdownAndProgress deadline={deadline} />
        )}
        {tusti === false ? (
          <SuccessInitializingWithdraw />
        ) : (
          <SuccessFinishedWithdrawal />
        )}
        <div className="pt-5 mb-5">
          <Leveler level={3} />
        </div>
      </div>
    </div>
  );
}
//mercuryo already has payment success screen actually

//
