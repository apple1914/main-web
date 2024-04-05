//import { Transak, TransakConfig } from "@transak/transak-sdk";
"use client";
import React, { useEffect, useState } from "react";
import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import WithdrawalSuccessScreenMain from "../../components/Status/WithdrawalSuccessScreenMain";
import Footer from "../../components/_App/Footer";
import { useTranslation } from "next-i18next";
import WhatsappButton from "../../components/Common/WhatsappButton";
import { useRouter } from "next/router";
import { fetchCustomerSupportNumber } from "../../backend/requests";

function WithdrawalSuccess(props) {
  //@ts-ignore
  const router = useRouter();
  const { t, ready, i18n } = useTranslation("common");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { withdrawalId } = router.query;
  useEffect(() => {
    fetchCustomerSupportNumber().then((myPhoneNumber) => {
      setPhoneNumber(myPhoneNumber);
    });
  });

  return (
    <>
      <NavbarTwoFixed />
      <WithdrawalSuccessScreenMain withdrawalId={withdrawalId} />
      {!!phoneNumber && (
        <WhatsappButton isMinifiedIcon={true} phoneNumber={phoneNumber} />
      )}
      <Footer />
    </>
  );
}

export default WithdrawalSuccess;
