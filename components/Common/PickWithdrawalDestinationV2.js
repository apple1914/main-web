"use client";
import { useEffect,  useState } from "react";

import Offramper from "./OfframperV2";

import { fetchWithdrawalAddresses } from "../../backend/requests";
// import { useTranslation } from "@/app/i18n/client";
import { Form, Button } from "react-bootstrap";
import useAuthStore from "../../signInLogic/auth";
import { useTranslation } from "next-i18next";

// import dynamic from 'next/dynamic'
 
// const DynamicHeader = dynamic(() => import('../components/header'), {
//   ssr: false,
// })

export default function PickWithdrawalDestination({
  incrementLevel,
  formData,
  setFormData,
  lng,
}) {
  const { t } = useTranslation("common");
  const user = useAuthStore((state) => state.user);
  const [withdrawalAddresses, setQWithdrawalDestinations] = useState([]);
  const [withdrawalAddressId, setWithdrawalAddressId] = useState();
  const [loading, setLoading] = useState(true);
  const [hasNoAvailableDestinations, setHasNoAvailableDestinations] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleSelectRecipient = async (pickedWithdrawalAddressId) => {
    setWithdrawalAddressId(pickedWithdrawalAddressId);
  };

  function updateWithdrawalAddresses(myNewDestinations) {
    // recipientsRef.current = newRecipients;
    setQWithdrawalDestinations(myNewDestinations);
  }

  const handleSubmitSelectedAddress = () => {
    formData.withdrawalAddressId = withdrawalAddressId
    setFormData(formData);
    // alert(withdrawalAddressId)
    incrementLevel();
  };



  useEffect(() => {
    if (!!user) {
      fetchWithdrawalAddresses().then((data) => {
        if (!!data && data.length > 0) {
          updateWithdrawalAddresses(data);
          setHasNoAvailableDestinations(false);
        } else {
          setHasNoAvailableDestinations(true);
        }
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="bg-white shadow rounded p-3">
      
      <div className="d-flex w-100 justify-content-between align-items-center">
        {hasNoAvailableDestinations == false && <h3 className="text-5 fw-400 mb-0">{t("pickWithdrawalDestination.h1")}</h3>}
      </div>
      {/* <hr className="mx-n3 mx-sm-n5 mb-4" /> */}
      
      <div className="d-grid w-100 mx-auto">
        <Button 
            className="btn btn-primary"
            onClick={handleShow}
          >
            {/* {t("offramper.button")} */}
            Указать новую карту для получения средств
            {t("offramper.button")}
          </Button>
    </div>

    
    
           
     
    </div>
  );
}
