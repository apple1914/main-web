"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { addWithdrawalAddress } from "../../backend/requests";
import { OFFRAMPER_WIDGET_URL } from "../../utils/importantUrls";
import { useTranslation } from "next-i18next";

export default function TransakExplainerHowItWorks() {

  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  

  return (
    <>
      <button 
        className="btn text-primary my-1 mx-1 w-100 mx-auto"
        onClick={handleShow}
      >
        {t("transakExplainerHowItWorks.button")}
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <div className="modal-header">
          <h5 className="modal-title fw-400">{t("transakExplainerHowItWorks.title")}</h5>
         
        </div>
        <div className="modal-body p-0 bg-white rounded px-3">
          <h6 className="modal-title fw-400">
            {t("transakExplainerHowItWorks.p1")}
          </h6>
          <h6 className="modal-text fw-400">
            {t("transakExplainerHowItWorks.p2")}
          </h6>
          <button
                type="button"
                className="btn btn-primary w-100 mx-auto mx-10 my-3"
                onClick={(e)=>{
                  e.preventDefault()
                  handleClose()
                }}
              >{t("Close")}</button>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
}