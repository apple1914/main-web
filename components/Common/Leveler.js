"use client";
import { useTranslation } from "next-i18next";


export default function Leveler({ level, lng }) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row checkout-levels w-50 mx-auto">
            <div
              className={
                level === 0 ? "col-3 step active" : "col-3 step complete"
              }
            >
              <div className="step-name d-none d-sm-block">{t("Amount")}</div>
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
              <div className="step-name d-none d-sm-block">{t("Withdrawal Destination")}</div>

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
              <div className="step-name d-none d-sm-block">{t("Balance")}</div>
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
              <div className="step-name d-none d-sm-block">{t("Status")}</div>
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
