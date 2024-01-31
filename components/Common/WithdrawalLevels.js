import React from "react";

import Converter from "./Converter"
import TransactionOutcome from "./TransactionOutcome"
import PickWithdrawalDestination from "./PickWithdrawalDestination";
import Transak from "./Transak"

const WithdrawalLevels = ({formData,setFormData,level,incrementLevel,lng}) => {


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
            {/* <div className="shadow-lg rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4"> */}
            <PickWithdrawalDestination
                incrementLevel={incrementLevel}
                formData={formData}
                setFormData={setFormData}
                lng={lng}
            />
            </>
        );
        case 2:
        return (
            <>
            <Transak
                incrementLevel={incrementLevel}
                formData={formData}
                setFormData={setFormData}
                lng={lng}
            />
            </>
        );
        case 3:
            return <TransactionOutcome formData={formData} lng={lng} />;
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
