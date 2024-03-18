"use client";

import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";

import { usefulMarketingQueryParams } from "../../utils/miscConstants";

import { useEffect } from "react";

export default function CaptureMarketingInfo() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      for (const key of usefulMarketingQueryParams) {
        const value = searchParams.get(key);
        if (!!value) {
          setCookie(key, value);
        }
      }
    }
  }, [searchParams]);

  return <></>;
}
