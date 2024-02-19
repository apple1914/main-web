"use client";
// import { useTranslation } from "@/app/i18n/client";

import { useTranslation } from "next-i18next";



export default function IndefiniteMaintenance() {
  
  const { t } = useTranslation("common");




  return (
    <>
    <div className="bg-white shadow rounded w-75 mx-auto p-4 py-5 my-10">
          <h5 className="fw-400 text-center">{t("scheduledMaintenance.title")}</h5>
          
          
          <p className="fw-400 text-center">{t("scheduledMaintenance.p1")}</p>
      </div>

         
    </>
  );
}