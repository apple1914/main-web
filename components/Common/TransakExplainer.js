"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";
import TransakExplainerSafety from "./TransakExplainerSafety"
import TransakExplainerHowItWorks from "./TransakExplainerHowItWorks"
import TransakExplainerWhyCrypto from "./TransakExplainerWhyCrypto"



export default function TransakExplainer({
  handleClickContinue
}) {
  
  const { t } = useTranslation("common");




  return (
    <>
    <div className="bg-white shadow rounded w-75 mx-auto p-4 py-5 my-10">
          <h5 className="fw-400 text-center">{t("transakExplainer.title")}</h5>
          
          
          <p className="fw-400 text-center">{t("transakExplainer.p1")}</p>
          <TransakExplainerSafety />
          <TransakExplainerHowItWorks /> 
          <TransakExplainerWhyCrypto /> 
  

          <button 
          className="btn btn-primary text-white mt-5 my-1 mx-1 w-100 mx-auto"
          onClick={(e)=> {
            e.preventDefault()
            handleClickContinue()
          }}
         >
          {t("Continue")}
        </button>
      </div>

         
    </>
  );
}