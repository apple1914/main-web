import { useTranslation } from "next-i18next";

export default function ProcessWithdrawalStatusComponent({ isSuccess }) {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="content py-4 mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto w-auto">
            <div className="bg-white text-center shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
              {isSuccess ? (
                <>
                  <div className="my-4">
                    <p className="lead">
                      {t("ProcessWithdrawalStatusComponent.success")}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-4">
                    <p className="lead">
                      {t("ProcessWithdrawalStatusComponent.failure")}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
