"use client";
import Link from "next/link";
import depositMinimumsMap from "../../utils/depositMinimums.json";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  FormEvent,
} from "react";
import { Form } from "react-bootstrap";
import React from "react";
import { getCookie } from "cookies-next";
import { fetchDepositFiatCurrencies, getBalance } from "../../backend/requests";
import useAuthStore from "../../signInLogic/auth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";

export default function SimpleUsdtAmount({
  amount,
  handleChangeAmount,
  lng,
  invalid,
}) {
  const { t } = useTranslation("common");

  return (
    <div className="mb-3 w-100 mx-auto">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          data-bv-field="amount"
          id="amount"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            alert(e.target.value);
            handleChangeAmount(e.target.value);
          }}
          placeholder=""
        />
        <span className="input-group-text p-2 bg-white">
          <i className={`currency-flag currency-flag-usd m-1 ms-3 rounded`}></i>
        </span>
      </div>
    </div>
  );
}
