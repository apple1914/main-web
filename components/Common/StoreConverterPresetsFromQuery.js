"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { converterPresetsQueryToCookieMap } from "../../utils/miscConstants";
import { useEffect } from "react";

export default function StoreConverterPresets() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const keysToCheck = Object.keys(converterPresetsQueryToCookieMap);
      const myQuery = router.query;
      for (const key of keysToCheck) {
        const value = myQuery[key];
        if (!!value) {
          const cookieKey = converterPresetsQueryToCookieMap[key];
          setCookie(cookieKey, value);
        }
      }
    }
  }, [router.isReady]);

  return <></>;
}
