"use client";
import { useEffect,  useState } from "react";

import Offramper from "./Offramper";

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
    <div className="bg-white shadow rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-10">
      <div className="d-flex w-100 justify-content-between align-items-center">
        {hasNoAvailableDestinations == false && <h3 className="text-5 fw-400 mb-0">{t("pickWithdrawalDestination.h1")}</h3>}
      </div>
      <hr className="mx-n3 mx-sm-n5 mb-4" />
      {!!user && (<Offramper
        // triggerUpdateRecipients={triggerUpdateRecipients}
        lng={lng}
        incrementLevel={incrementLevel}
        formData={formData}
        setFormData={setFormData}
        email={user.email}
      />)}
      {hasNoAvailableDestinations == false && <div className="text-center my-3">or</div>}
      {hasNoAvailableDestinations === false &&
        (loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
          </div>
        ) : (
          <form onSubmit={() => handleSubmitSelectedAddress()}>
            <Form.Group controlId="formBasicCheckbox">
              {withdrawalAddresses.map((destination) => {
                return (
                  <div className="border rounded py-2 my-2">
                    <Form.Check
                      id={destination.withdrawalAddressId}
                      className="mx-2"
                      value={destination.withdrawalAddressId}
                      type="checkbox"
                      aria-label="radio 2"
                      label={destination.nickname}
                      onChange={() => {
                        handleSelectRecipient(destination.withdrawalAddressId);
                      }}
                      checked={
                        !!withdrawalAddressId &&
                        withdrawalAddressId === destination.withdrawalAddressId
                      }
                    />
                  </div>
                );
              })}
            </Form.Group>
            <div className="d-grid w-100 mx-auto mt-3">
              <button type="submit" className="btn btn-primary">
                {t("Continue")}
              </button>
            </div>
          </form>
        ))}
      {/* {hasNoAvailableDestinations == false && <div className="text-center my-3">or</div>} */}
     
    </div>
  );
}
