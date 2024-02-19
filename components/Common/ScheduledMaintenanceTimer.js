"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { addWithdrawalAddress } from "../../backend/requests";
import { OFFRAMPER_WIDGET_URL } from "../../utils/importantUrls";
import { useTranslation } from "next-i18next";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export default function ScheduledMaintenanceTimer({
  handleClickContinueDespiteMaintenance,utcHourMaintenanceEnds
}) {
  
  const { t } = useTranslation("common");

  
  // const [hours,setHours] = useState(0) 
  // const [minutes,setMinutes] = useState(0) 
  // const [seconds,setSeconds] = useState(0) 
  const date = new Date()
  const parsedDeadline = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),date.getUTCDate(),utcHourMaintenanceEnds,0,0)

  const [time, setTime] = useState(parsedDeadline - Date.now());


  useEffect(() => {
    const interval = setInterval(
        () => setTime(parsedDeadline - Date.now()),
        1000,
    );

    return () => clearInterval(interval);
}, []);




  return (
    <>
    <div className="bg-white shadow rounded w-75 mx-auto p-4 py-5 my-10">
          <h5 className="fw-400 text-center">{t("scheduledMaintenance.title")}</h5>
          
          
          <p className="fw-400 text-center">{t("scheduledMaintenance.p1")}</p>
          <p className="fw-400 text-center">{t("scheduledMaintenance.p2")}</p>
  

            <div className="row w-75 mx-auto border rounded border-primary" role="timer">
              <div className="col-4">
                <div className="box text-center py-3">
                  <p id="hour">{Math.floor((time / HOUR) % 24)} {"Hours"}</p>
                </div>
              </div>
              <div className="col-4  ">
                <div className="box text-center py-3">
                  <p id="minute">{Math.floor((time / MINUTE) % 60)} {"Minutes"}</p>
                </div>
              </div>
              <div className="col-4  ">
                <div className="box text-center py-3">
                  <p id="second">{Math.floor((time / SECOND) % 60)} {"Seconds"}</p>
                </div>
              </div>
            </div>


          <button 
          className="btn btn-outline-primary text-primary mt-5 my-1 mx-1 w-100 mx-auto"
          onClick={(e)=> {
            e.preventDefault()
            handleClickContinueDespiteMaintenance()
          }}
         >
          {t("Continue")}
        </button>
      </div>

         
    </>
  );
}