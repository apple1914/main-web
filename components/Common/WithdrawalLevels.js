import React from "react";

import Converter from "../Converters/Converter";
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
  depositPrices,
  withdrawValues,
  withdrawalAddresses,
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
            depositPrices={depositPrices}
            withdrawValues={withdrawValues}
          />
        </div>
      );
    case 1:
      return (
        <>
          <PickWithdrawalDestination
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
            lng={lng}
            withdrawalAddresses={withdrawalAddresses}
          />
        </>
      );
    case 2:
      return (
        <>
          <DepositInitIfNoFunds formData={formData} lng={lng} />
        </>
      );

    default: //should jsut be the withdrwal level 0 basically
      return (
        <>
          <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <Converter
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
