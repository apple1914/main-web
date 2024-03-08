"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import SimpleUsdtAmount from "./SimpleUsdtAmount";
import Link from "next/link";
import useAuthStore from "../../signInLogic/auth";
const ViewMyBalance = () => {
  const { t } = useTranslation("common"); //usage - just use t("adfdsf") and it will work!
  const user = useAuthStore((state) => state.user);

  const getBalance = useAuthStore((state) => state.getBalance);

  const [balance, setBalance] = useState(0.0);

  useEffect(() => {
    if (user) {
      getBalance().then((bal) => {
        setBalance(bal);
      });
    }
  }, [user]);
  const handleChange = (val) => {
    console.log(val);
  };

  return (
    <div id="content" className="py-4 bg-white">
      <div className="container pt-5">
        <div className="mx-auto text-center pt-5">{t("mybalance.title")}</div>
        <div className="row pt-5 w-50 mx-auto">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <div className="mb-3 w-100 mx-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  data-bv-field="amount"
                  value={balance}
                  onChange={(e) => {
                    e.preventDefault();
                    handleChange(e.target.value);
                    // console.log(e.target.value);
                  }}
                />
                <span className="input-group-text p-2 bg-white">
                  <i
                    className={`currency-flag currency-flag-usd m-1 ms-3 rounded`}
                  ></i>
                </span>
              </div>
            </div>
            <div className="d-grid mx-auto">
              <Link
                href={{
                  pathname: "/mybalance/add",
                }}
                className={`btn btn-primary text-white`}
              >
                <p>{t("viewMyBalance.addButton")}</p>
              </Link>
              <Link
                href={{
                  pathname: "/mybalance/withdraw",
                }}
                className={`btn btn-outline-primary text-primary mt-3`}
              >
                <p>{t("viewMyBalance.withdrawButton")}</p>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ViewMyBalance;
