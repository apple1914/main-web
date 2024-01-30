"use client";

import { setCookie } from "cookies-next";
import {useSearchParams } from "next/navigation";

import { miscDataNames } from "../../utils/miscConstants";



export default function CaptureMarketingInfo() {
  const searchParams = useSearchParams();

  searchParams.forEach((value, key) => {
    //then save value
    if (Object.keys(miscDataNames).includes(key)) {
      const valueToSave = value
      const properVariableName = miscDataNames[key]
      setCookie(properVariableName, valueToSave);
    }
  });

  return (
    <>
    </>
  );
}
