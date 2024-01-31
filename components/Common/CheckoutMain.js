

"use client"
import React,{useState} from "react";
import WithdrawalLevels from "./WithdrawalLevels";
import Leveler from "./Leveler"

const CheckoutMain = ({lng}) => {

  const [formData, setFormData] = useState({
    fiatAmount: 0.00,
    fiatCurrency: "",
    withdrawalAddressId: "",
    convertedFiatCurrency: "",
  });


  const [level, setLevel] = useState(0);
  const stepNameMapper = [
    "Details",
    "Withdrawal Card Info",
    "Payment",
    "Status",
  ];


  function incrementLevel() {
    setLevel(level + 1);
  }
    return (
        <div id="content" className="py-4 bg-white">
      <div className="container">
        <div className="mx-auto text-center pt-5">Withdrawal</div>
        <div className="row pt-5">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <WithdrawalLevels formData={formData} setFormData={setFormData} level={level} incrementLevel={incrementLevel} lng={lng}/>
          </div>
        </div>
        <div className="pt-5">
          <Leveler lng={lng} level={level}/>
        </div>
      </div>
    </div>
    )
};

  


export default CheckoutMain;
