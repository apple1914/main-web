"use client";
import React from "react";

import useAuthStore from "../../signInLogic/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useTranslation } from "next-i18next";
import nookies from "nookies";
export const SignOutButton = () => {
  const [user, authInProgress] = useAuthStore((state) => [
    state.user,
    state.authInProgress,
  ]);
  const authSignOut = useAuthStore((state) => state.authSignOut);
  const router = useRouter();
  const { t } = useTranslation("common");

  const submitSignOut = async (e) => {
    e.preventDefault();
    authSignOut();
    nookies.set(undefined, "userToken", "", { path: "/" });
    toast.success("Signed Out!");
  };

  if (user && !authInProgress) {
    return (
      <button
        className="btn btn-primary-outline text-white"
        onClick={(e) => {
          submitSignOut(e);
        }}
      >
        {t("Sign Out")}
      </button>
    );
  }
  return <></>;
};

export default SignOutButton;
