"use client";
import { useEffect, useState } from "react";

import Offramper from "./Offramper";
import { toast } from "react-hot-toast";
import { fetchWithdrawalAddressesV2 } from "../../backend/requests";
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
  const [loading, setLoading] = useState(true);
  const [hasNoAvailableDestinations, setHasNoAvailableDestinations] =
    useState(true);

  const handleSelectRecipient = async (pickedWithdrawalAddressId) => {
    formData.withdrawalAddressId = pickedWithdrawalAddressId;
    setFormData(formData);
  };

  function updateWithdrawalAddresses(myNewDestinations) {
    // recipientsRef.current = newRecipients;
    setQWithdrawalDestinations(myNewDestinations);
  }

  const handleSubmitSelectedAddress = (e) => {
    e.preventDefault();
    if (!formData.withdrawalAddressId) {
      toast.error(t("Please pick a card to withdraw to or add a new one"));
      return;
    }

    !!incrementLevel && incrementLevel();
  };

  useEffect(() => {
    if (!!user) {
      fetchWithdrawalAddressesV2().then((data) => {
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
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        {hasNoAvailableDestinations == false && (
          <h3 className="text-5 fw-400 mb-0">
            {t("pickWithdrawalDestination.h1")}
          </h3>
        )}
      </div>
      <hr className="mx-n3 mx-sm-n5 mb-4" />
      {!!user && (
        <Offramper
          // triggerUpdateRecipients={triggerUpdateRecipients}
          lng={lng}
          incrementLevel={incrementLevel}
          formData={formData}
          setFormData={setFormData}
          email={user.email}
        />
      )}
      {hasNoAvailableDestinations == false && (
        <div className="text-center my-3">or</div>
      )}
      {hasNoAvailableDestinations === false &&
        (loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmitSelectedAddress(e)}>
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
                        !!formData.withdrawalAddressId &&
                        formData.withdrawalAddressId ===
                          destination.withdrawalAddressId
                      }
                    />
                  </div>
                );
              })}
            </Form.Group>
            {incrementLevel && (
              <div className="d-grid w-100 mx-auto mt-3">
                <button type="submit" className="btn btn-primary">
                  {t("Continue")}
                </button>
              </div>
            )}
          </form>
        ))}
      {/* {hasNoAvailableDestinations == false && <div className="text-center my-3">or</div>} */}
    </>
  );
}
