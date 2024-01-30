"use client";
import useAuthStore from "../../signInLogic/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RedirectIfNotSignedIn() {
  const [user, authInProgress] = useAuthStore((state) => [state.user, state.authInProgress]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (user === null && !authInProgress) {
      !!searchParams ? router.push(
        "/sign-up" +
          "?" +
          searchParams.toString()
      ) : router.push(
        "/sign-up"
      )
    }
  }, [user,authInProgress]);

  return <></>;
}
