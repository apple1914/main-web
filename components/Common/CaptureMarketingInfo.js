"use client";

import { setCookie } from "cookies-next";

import {useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

import { cookieMappingContext } from "../../utils/miscConstants";

import { useEffect } from "react";


export default function CaptureMarketingInfo() {
  const searchParams = useSearchParams()


  
  useEffect(()=>{
    if (searchParams) {
      for (const key of Object.keys(cookieMappingContext)) {
        const value = searchParams.get(key)
        if (!!value) {
          const cookieName =
          cookieMappingContext[key];
          setCookie(cookieName, value);
        }
      }
      
    }
  },[searchParams])




  
  return (
    <>
    </>
  );
}
