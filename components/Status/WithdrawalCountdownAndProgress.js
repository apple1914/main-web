import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
const SECOND = 1000;
const MINUTE = SECOND * 60;

//status and timer / countdown are fully independent of each other

export default function WithdrawalCountdownAndProgress({ deadline }) {
  //@ts-ignore

  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  //time = deadline - date.now()

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(deadline - Date.now()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={100 - Math.max(timeLeft, 0) / (15 * 60 * 1000)}
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 75%"
        ></div>
      </div>
      <div
        className="row w-75 mx-auto border rounded border-primary"
        role="timer"
      >
        <div className="col-6 ">
          <div className="box text-center py-3">
            <p id="minute">
              {Math.floor((Math.max(timeLeft, 0) / MINUTE) % 60)} {"Minutes"}
            </p>
          </div>
        </div>
        <div className="col-6 ">
          <div className="box text-center py-3">
            <p id="second">
              {Math.floor((Math.max(timeLeft, 0) / SECOND) % 60)} {"Seconds"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Progress Bar + countdown timer + messages
