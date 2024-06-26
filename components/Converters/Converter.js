"use client";
import Link from "next/link";
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
import { getWithdrawals } from "../../backend/requests";
import useAuthStore from "../../signInLogic/auth";
import { useTranslation } from "next-i18next";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { convert } from "../../lib/clientServerUsable/convertWithoutDb";
import { useRouter } from "next/router";

import {
  DEFAULT_WITHDRAWAL_CURRENCY,
  DEFAULT_DEPOSIT_CURRENCY,
  DEFAULT_DEPOSIT_AMOUNT,
} from "../../utils/defaultConverterPresets";

export default function Converter({
  incrementLevel,
  setFormData,
  formData,
  depositPrices,
  withdrawValues,
  showLinkCta,
}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [user, authInProgress] = useAuthStore((state) => [
    state.user,
    state.authInProgress,
  ]);

  const [myDepositAmount, setMyDepositAmount] = useState(
    formData?.fiatAmount || Number(DEFAULT_DEPOSIT_AMOUNT)
  );
  const [myDepositCurrency, setMyDepositCurrency] = useState(
    formData?.fiatCurrency || DEFAULT_DEPOSIT_CURRENCY
  );
  const [myWithdrawalAmount, setMyWithdrawalAmount] = useState("0");
  const myDepositCurrencies = depositPrices.map((el) => el.currency);
  const [myWithdrawalCurrency, setMyWithdrawalCurrency] = useState(
    formData?.convertedFiatCurrency || DEFAULT_WITHDRAWAL_CURRENCY
  );
  const myWithdrawalCurrencies = withdrawValues.map((el) => el.currency);
  const [exchangeRate, setExchangeRate] = useState("1");
  const [invalid, setInvalid] = useState(false);
  const searchParams = useSearchParams();
  const [discount, setDiscount] = useState(0.0);
  const [conversionRateLoader, setConversionRateLoader] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (incrementLevel && !invalid) {
      incrementLevel();
    }
  };

  const handleChangeDepositAmount = (value) => {
    setMyDepositAmount(value);
    if (formData && setFormData) {
      formData.fiatAmount = value;
      setFormData(formData);
    }
  };

  const handleChangeDepositCurrency = (value) => {
    setMyDepositCurrency(value);
    if (formData && setFormData) {
      formData.fiatCurrency = value;
      setFormData(formData);
    }
    setCookie("depositCurrency", value);
  };
  const handleChangeWithdrawCurrency = (value) => {
    setMyWithdrawalCurrency(value);
    if (formData && setFormData) {
      formData.convertedFiatCurrency = value;
      setFormData(formData);
    }
    setCookie("withdrawalCurrency", value);
  };

  useEffect(() => {
    //logically, it's never the case that you go to /withdrawal with converter query params which are useful, so only save cookie if changed by user
    if (router.isReady) {
      const withdrawalCurrency =
        searchParams.get("withdrawalCurrency") ||
        searchParams.get("toCurrency") ||
        getCookie("withdrawalCurrency");
      !!withdrawalCurrency && handleChangeWithdrawCurrency(withdrawalCurrency);

      const depositCurrency =
        searchParams.get("depositCurrency") ||
        searchParams.get("fromCurrency") ||
        getCookie("depositCurrency");

      !!depositCurrency && handleChangeDepositCurrency(depositCurrency);

      const amount = searchParams.get("amount") || getCookie("amount");

      if (
        amount != null &&
        depositPrices.find((el) => el.currency === myDepositCurrency)[
          "fiatAmountMinimum"
        ] <= Number(amount)
      ) {
        handleChangeDepositAmount(Number(amount));
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateConversionRate();
    }, 500);
    return () => clearTimeout(timeout);
  }, [myDepositCurrency, myWithdrawalCurrency, myDepositAmount, discount]);

  useEffect(() => {
    if (!!user & !authInProgress) {
      getWithdrawals().then((withdrawals) => {
        if (!!withdrawals && withdrawals.length > 0) {
          setDiscount(0.0);
        }
      });
    }
  }, [user, authInProgress]);

  const updateConversionRate = () => {
    if (!myDepositCurrency || !myWithdrawalCurrency) return;
    const answer = handleConvert(
      myDepositAmount,
      myWithdrawalCurrency,
      myDepositCurrency,
      discount
    );
    setMyWithdrawalAmount(answer.toFixed(2));
    setExchangeRate((answer / myDepositAmount).toFixed(2));
  };
  const handleConvert = (
    myDepositAmount,
    myWithdrawalCurrency,
    myDepositCurrency,
    discount
  ) => {
    const answer = convert({
      depositPrices,
      withdrawValues,
      myDepositAmount,
      myWithdrawalCurrency,
      myDepositCurrency,
      discount,
    });
    return answer;
  };

  return (
    <form id="form-send-money" onSubmit={submit}>
      <div className="mb-3 w-100 mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            data-bv-field="myDepositAmount"
            id="myDepositAmount"
            value={myDepositAmount}
            onChange={(e) => {
              if (Number(e.target.value) >= 0) {
                if (
                  Number(e.target.value) <
                  depositPrices.find((el) => el.currency === myDepositCurrency)[
                    "fiatAmountMinimum"
                  ]
                ) {
                  setInvalid(true);
                }
                if (
                  Number(e.target.value) >=
                  depositPrices.find((el) => el.currency === myDepositCurrency)[
                    "fiatAmountMinimum"
                  ]
                ) {
                  setInvalid(false);
                }
                handleChangeDepositAmount(Number(e.target.value));
              }
            }}
            placeholder=""
          />
          <span className="input-group-text p-0 bg-white">
            {!!myDepositCurrency && (
              <i
                className={`currency-flag currency-flag-${myDepositCurrency.toLowerCase()} m-1 ms-3 rounded`}
              ></i>
            )}
            <Form.Control
              as={"select"}
              id="myDepositCurrency"
              data-style=""
              data-container="body"
              data-live-search="true"
              className="selectpicker form-control bg-transparent border-0 ps-1"
              required={true}
              value={myDepositCurrency}
              onChange={(e) => {
                handleChangeDepositCurrency(e.target.value);
              }}
            >
              {myDepositCurrencies.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </Form.Control>
          </span>
        </div>
      </div>
      <div className={`invalid-feedback ${invalid ? "d-block" : ""}`}>
        {"Minimum withdraw amount: "}
        {
          depositPrices.find((el) => el.currency === myDepositCurrency)[
            "fiatAmountMinimum"
          ]
        }
      </div>

      <div className="mb-3 w-100 mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            data-bv-field="myWithdrawalAmount"
            id="myWithdrawalAmount"
            value={myWithdrawalAmount}
            readOnly={true}
            placeholder=""
          />

          <span className="input-group-text p-0 bg-white">
            {!!myWithdrawalCurrency && (
              <i
                className={`currency-flag currency-flag-${myWithdrawalCurrency.toLowerCase()} m-1 ms-3 border-0 rounded`}
              ></i>
            )}
            <Form.Control
              as={"select"}
              id="myWithdrawalCurrency"
              data-style="form-select bg-transparent"
              data-container="body"
              data-live-search="true"
              className="selectpicker form-control bg-transparent  border-0 ps-1"
              required={true}
              value={myWithdrawalCurrency}
              onChange={(e) => {
                handleChangeWithdrawCurrency(e.target.value);
              }}
            >
              {myWithdrawalCurrencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </Form.Control>
          </span>
        </div>
      </div>
      {showLinkCta === true && (
        <div className="d-grid w-100 mx-auto">
          <Link
            href={{
              pathname: "/withdrawal",
              query: {
                depositCurrency: myDepositCurrency,
                withdrawalCurrency: myWithdrawalCurrency,
                amount: myDepositAmount,
              },
            }}
            className={`btn btn-primary text-white ${
              invalid || conversionRateLoader ? "disabled" : ""
            }`}
          >
            {conversionRateLoader ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <p>{t("Withdrawal")}</p>
            )}
          </Link>
        </div>
      )}
      {!!incrementLevel && (
        <div className="d-grid w-100 mx-auto">
          <button
            className={`btn btn-primary ${
              invalid || conversionRateLoader ? "disabled" : ""
            }`}
            type="submit"
          >
            {conversionRateLoader ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              t("Continue")
            )}
          </button>
        </div>
      )}
    </form>
  );
}
