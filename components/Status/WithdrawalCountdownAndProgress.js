import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { fetchWithdrawalTrackingInfo } from "../../backend/requests";
import { useSearchParams } from "next/navigation";

const SECOND = 1000;
const MINUTE = SECOND * 60;

//status and timer / countdown are fully independent of each other

export default function WithdrawalCountdownAndProgress() {
  //ISSUE TO SOLVE!! this deadline gets updated once its fetch. but from some reason it's null on the first try,
  //after that it stats as null for this oimcponent and this changes in the props is never passed down for this child
  //
  //
  //
  //
  //
  //@ts-ignore
  const searchParams = useSearchParams();

  const [deadline, setDeadline] = useState(null);
  const [tusti, setTusti] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  const [minutesLeft, setMinutesLeft] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(null);

  const refreshWithdrawalInfo = () => {
    const withdrawalId = searchParams.get("withdrawalId");
    if (!withdrawalId) return;

    fetchWithdrawalTrackingInfo({ withdrawalId })
      .then((data) => {
        if (data?.tusti === true) {
          setTusti(true);
        }
        if (loading === false) {
          return;
        }

        const { createdAt } = data;
        const newDeadline = 1000 * (createdAt.seconds + 15 * 60);
        setDeadline(newDeadline);
        setLoading(false);
      })
      .catch((err) => {
        console.log("GOT ERR IN THIS API" + JSON.stringify(err.response));
      });
  };
  useEffect(() => {
    refreshWithdrawalInfo();
  }, [searchParams]);

  useEffect(() => {
    if (searchParams) {
      const interval = setInterval(() => refreshWithdrawalInfo(), 5000);
      return () => clearInterval(interval);
    }
  }, [searchParams]);
  useEffect(() => {
    const interval = setInterval(() => handleSetTimeLeft(), 1000);
    return () => clearInterval(interval);
  }, [loading, deadline]);
  //time = deadline - date.now()
  const handleSetTimeLeft = () => {
    if (loading) {
      return;
    }
    const tsNow = Date.now();
    const newTimeLeft = deadline - tsNow;
    setTimeLeft(newTimeLeft);
    const newMinutesLeft = Math.floor((Math.max(newTimeLeft, 0) / MINUTE) % 60);
    const newSecondsLeft = Math.floor((Math.max(newTimeLeft, 0) / SECOND) % 60);
    setMinutesLeft(newMinutesLeft);
    setSecondsLeft(newSecondsLeft);
  };

  return (
    <div>
      {/* <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={100 - 100 * Math.max(timeLeft / (15 * 60 * 1000), 0)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div> */}
      <div
        className="row w-25 mx-auto border rounded border-primary"
        role="timer"
      >
        <div className="col-6 ">
          <div className="box text-center py-3">
            <p id="minute">
              {minutesLeft} {"Minutes"}
              {/* {timeLeft} {deadline} */}
            </p>
          </div>
        </div>
        <div className="col-6 ">
          <div className="box text-center py-3">
            <p id="second">
              {secondsLeft} {"Seconds"}
              {/* {timeLeft} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Progress Bar + countdown timer + messages
