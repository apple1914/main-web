import React from "react";

// import Converter from "../Converters/Converter";
import HybridConverterAndPicker from "../WithdrawalAddress/HybridConverterAndPicker";

import DepositInitIfNoFunds from "./DepositInitIfNoFunds";
// const IS_PAUSED = true;
// import IndefiniteMaintenance from "./IndefiniteMaintenance";

const WithdrawalLevels = ({
  formData,
  setFormData,
  level,
  incrementLevel,
  lng,
  depositPrices,
  withdrawValues,
  allInputsAreReady,
}) => {
  switch (level) {
    // case 0:
    //   return (
    //     <div className="bg-white shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
    //       <HybridConverterAndPicker
    //         incrementLevel={incrementLevel}
    //         formData={formData}
    //         setFormData={setFormData}
    //         lng={lng}
    //         depositPrices={depositPrices}
    //         withdrawValues={withdrawValues}
    //       />
    //     </div>
    //   );
    case 0:
      return (
        <div className="bg-white shadow rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-10">
          <HybridConverterAndPicker
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
            lng={lng}
            depositPrices={depositPrices}
            withdrawValues={withdrawValues}
            allInputsAreReady={allInputsAreReady}
            withdrawalAddresses={[]}
          />
        </div>
      );
    case 1:
      return (
        <>
          <DepositInitIfNoFunds formData={formData} lng={lng} />
        </>
      );

    default: //should jsut be the withdrwal level 0 basically
      return (
        <>
          <ConverterAndPicker
            incrementLevel={incrementLevel}
            formData={formData}
            setFormData={setFormData}
            lng={lng}
            depositPrices={depositPrices}
            withdrawValues={withdrawValues}
          />
        </>
      );
  }
};

export default WithdrawalLevels;
