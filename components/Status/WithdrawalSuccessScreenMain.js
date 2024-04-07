"use client";
import Leveler from "../Common/Leveler";
import { useTranslation } from "next-i18next";
import WithdrawalCountdownAndProgress from "./WithdrawalCountdownAndProgress";
import SuccessInitializingWithdraw from "./SuccessInitializingWithdraw";
import SuccessFinishedWithdrawal from "./SuccessFinishedWithdrawal";

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

export default function WithdrawalSuccessScreenMain() {
  //@ts-ignore
  const { t } = useTranslation("common");

  return (
    <div className="content py-4 mt-5">
      <div className="container mt-5">
        <WithdrawalCountdownAndProgress />
        {/* {tusti === false ? (
          <SuccessInitializingWithdraw />
        ) : (
          <SuccessFinishedWithdrawal />
        )} */}
        <div className="pt-5 mb-5">
          <Leveler level={3} />
        </div>
      </div>
    </div>
  );
}
//mercuryo already has payment success screen actually

//
