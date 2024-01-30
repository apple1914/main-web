"use client";


export default function Leveler({ level, lng }) {
  // const { t } = useTranslation(lng);
  return (
    <>
      <div className="row mt-4 mb-5">
        <div className="col-lg-11 mx-auto">
          <div className="row widget-steps w-50 mx-auto">
            <div
              className={
                level === 0 ? "col-3 step active" : "col-3 step complete"
              }
            >
              <div className="step-name">{"Details"}</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
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
              <div className="step-name">{"Withdrawal Card Info"}</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
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
              <div className="step-name">{"Payment"}</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
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
              <div className="step-name">{"Status"}</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <button className="step-dot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
