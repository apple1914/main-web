"use client";
import { useTranslation } from "next-i18next";


export default function Leveler({ level, lng }) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="row mt-4 mb-5">
        <div className="col-lg-11 mx-auto">
          <div className="row checkout-levels">
            <div
              className={
                level === 0 ? "col-3 step active" : "col-3 step complete"
              }
            >
              <div className="step-name">{t("Amount")}</div>
              {/* <div className="progress">
                <div className="progress-bar"></div>
              </div> */}
              <button className="step-dot" />
            </div>
            <div
              className={
                level === 1
                  ? "col-3 step active"
                  : level > 1
                  ? "col-3 step complete"
                  : "col-3 step"
              }
            >
              <div className="step-name">{t("Withdrawal Destination")}</div>

              {/* <div className="progress">
                <div className="progress-bar"></div>
              </div> */}
              <button className="step-dot" />
            </div>
            <div
              className={
                level === 2
                  ? "col-3 step active"
                  : level > 2
                  ? "col-3 step complete"
                  : "col-3 step"
              }
            >
              <div className="step-name">{t("Balance")}</div>
              {/* <div className="progress">
                <div className="progress-bar"></div>
              </div> */}
              <button className="step-dot" />
            </div>
            <div
              className={
                level === 3
                  ? "col-3 step active"
                  : level > 3
                  ? "col-3 step complete"
                  : "col-3 step"
              }
            >
              <div className="step-name">{t("Status")}</div>
              {/* <div className="progress">
                <div className="progress-bar"></div>
              </div> */}
              <button className="step-dot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
