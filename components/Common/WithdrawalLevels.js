import React from "react";

import Converter from "./Converter";
import PickWithdrawalDestination from "./PickWithdrawalDestination";
import DepositInitIfNoFunds from "./DepositInitIfNoFunds";
// const IS_PAUSED = true;
import IndefiniteMaintenance from "./IndefiniteMaintenance";

const WithdrawalLevels = ({
  formData,
  setFormData,
  level,
  incrementLevel,
  lng,
}) => {
  switch (level) {
    case 0:
      return (
        <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
          <Converter
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
            lng={lng}
          />
        </div>
      );
    case 1:
      return (
        <>
          <IndefiniteMaintenance />
          {/* <PickWithdrawalDestination
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
            lng={lng}
          /> */}
        </>
      );
    case 2:
      return (
        <>
          <DepositInitIfNoFunds formData={formData} lng={lng} />
        </>
      );

    default:
      return (
        <>
          <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <Calculator
              incrementLevel={incrementLevel}
              formData={formData}
              setFormData={setFormData}
              lng={lng}
            />
          </div>
        </>
      );
  }
};

export default WithdrawalLevels;
