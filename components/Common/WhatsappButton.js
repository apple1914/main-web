"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// import ReactWhatsapp from "react-whatsapp";
const baseUrl = "https://wa.me";
const WhatsappButton = ({ isMinifiedIcon, phoneNumber }) => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!

  const handleClickChat = () => {
    const waUrl = `${baseUrl}/${phoneNumber}`;
    window.open(waUrl);
  };
  if (isMinifiedIcon === false) {
    return (
      <button
        onClick={() => handleClickChat()}
        className="bg-transparent text-white btn-outline-primary"
      >
        {t("Text us on")} WhatsApp
      </button>
    );
  }

  return (
    <div className="fixed-bottom">
      <button
        onClick={() => handleClickChat()}
        className="bg-white rounded my-3 mx-3 justify-content-end"
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
