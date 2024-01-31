"use client";

import { setCookie } from "cookies-next";
import {router } from "next/navigation";

import { cookieMappingContext } from "../../utils/miscConstants";

import { useRouter } from 'next/router'
import { useEffect } from "react";


export default function CaptureMarketingInfo() {
  const router = useRouter();

  useEffect(()=> {
    if (router.isReady) {
      const myQuery = router.query
      for (const [key,value] of Object.entries(myQuery)) {
        if (Object.keys(cookieMappingContext).includes(key)) {
          const cookieName =
          cookieMappingContext[key];
          setCookie(cookieName, value);
        }
      }
     
    }

  },[router.isReady])


  
  return (
    <>
    </>
  );
}
