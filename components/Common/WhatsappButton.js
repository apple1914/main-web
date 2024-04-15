"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Modal } from "react-bootstrap";

// import ReactWhatsapp from "react-whatsapp";
const baseUrl = "https://wa.me";
const WhatsappButton = ({ phoneNumber, isFlatButton }) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!

  const handleClickChat = () => {
    sendToWaApi();
  };

  const sendToWaApi = () => {
    const waUrl = `${baseUrl}/${phoneNumber}`;
    window.open(waUrl);
  };
  if (!phoneNumber) {
    return <></>;
  }

  //FUTURE IMPROVEMENT FOR DESKTOP:
  //if on desktop, open a modal, with messsage saying to contact our customer support via whatsapp:
  //scan this QR code from your phone
  if (isFlatButton === true) {
    return (
      <button
        className="btn btn-primary text-white w-50"
        onClick={() => {
          handleClickChat();
        }}
      >
        WhatsApp
      </button>
    );
  }

  return (
    <div className="fixed-bottom pb-5">
      <button
        onClick={() => handleClickChat()}
        className="bg-white rounded shadow my-3 mx-3 justify-content-end"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{
            height: "40px",
            width: "40px",
            color: "#25D366",
            backgroundColor: "#ffffff",
            borderColor: "#ffffff",
            borderStyle: "none",
          }}
        />
      </button>
    </div>
  );
};

export default WhatsappButton;

const WhatsAppQrCode = ({ phoneNumber }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="modal-header">
        {/* <h5 className="modal-title fw-400">{t("Add New Card For Withdrawal")}</h5> */}
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
  );
};
