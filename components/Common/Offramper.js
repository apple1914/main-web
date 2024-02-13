"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { addWithdrawalAddress } from "../../backend/requests";
import { OFFRAMPER_WIDGET_URL } from "../../utils/importantUrls";
import { useTranslation } from "next-i18next";

export default function Offramper({
  lng,
  incrementLevel,
  formData,
  setFormData,email
}) {
  const [show, setShow] = useState(false);
  const [withdrawalAddressData, setWithdrawalAddressData] = useState({
    address: undefined,
    blockchain: undefined,
    cryptocurrency:undefined,
    nickname:undefined
  });
  const { t } = useTranslation("common");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  function listener(e) {
    const iframeData = e.data;

    if (!iframeData) {
      return;
    }
    // alert("god ifrmae data!")
    // alert(JSON.stringify(iframeData))
    if (!!iframeData.address && !!iframeData.blockchain) {
      // alert("got address and blockchain from iframe");
      const setPayloadTo = {
        address:iframeData.address,blockchain:iframeData.blockchain,cryptocurrency:iframeData.cryptocurrency,nickname:iframeData.nickname
      }
      setWithdrawalAddressData(setPayloadTo);

    }
  }
  useEffect(() => {
    window.addEventListener("message", listener);
    // return () => window.removeEventListener("message", listener);
  }, []);

  useEffect(() => {
    if (
      !!withdrawalAddressData.address &&
      !!withdrawalAddressData.blockchain &&
      !!withdrawalAddressData.cryptocurrency && 
      !!withdrawalAddressData.nickname
    ) {
      addWithdrawalAddress(withdrawalAddressData).then((data) => {
        // alert("addWithdrawalAddress otuput" + JSON.stringify(data))
        formData.withdrawalAddressId = data.withdrawalAddressId;
        setFormData(formData);
        incrementLevel();
        // triggerUpdateRecipients()
        // handleClose()
      });
    }
  }, [withdrawalAddressData]);

  return (
    <>
      <button 
        className="btn btn-outline-primary text-primary my-1 mx-1 w-100 mx-auto"
        onClick={handleShow}
      >
        {t("Add New Card For Withdrawal")}
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <div className="modal-header">
          <h5 className="modal-title fw-400">{t("Add New Card For Withdrawal")}</h5>
          {/* <button
                type="button"
                className="btn-close"
                onClick={()=>{handleClose}}
              ></button> */}
        </div>
        <div className="modal-body p-0 bg-white rounded">
          <iframe
            src={`${OFFRAMPER_WIDGET_URL}/production/${formData.convertedFiatCurrency}?lng=${lng}&email=${email}`}
            frameBorder="0"
            width="100%"
            height="600px"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
}
