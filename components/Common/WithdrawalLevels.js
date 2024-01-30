"use client"
import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Converter from "./Converter"
import TransactionOutcome from "./TransactionOutcome"
import PickWithdrawalDestination from "./PickWithdrawalDestination";
import FauxTransak from "./FauxTransak"

const WithdrawalLevels = ({lng}) => {

  const [formData, setFormData] = useState({
    fiatAmount: 0.00,
    fiatCurrency: "",
    withdrawalAddressId: "",
    transakUspeshno: null,
    depositId: "",
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
            {/* <RedirectIfNotSignedIn checkoutType={`checkout`} /> */}
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
            {/* <RedirectIfNotSignedIn checkoutType={`checkout`} /> */}
            {/* </div> */}
            </>
        );
        case 2:
        return (
            <>
            <FauxTransak
                incrementLevel={incrementLevel}
                formData={formData}
                setFormData={setFormData}
                lng={lng}
                checkoutType="1"
            />
            {/* <RedirectIfNotSignedIn checkoutType={`checkout`} /> */}
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
                {/* <RedirectIfNotSignedIn checkoutType={`checkout`} /> */}
                </>
            );
    }
};

  


export default WithdrawalLevels;
