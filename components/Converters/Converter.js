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
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { convert } from "../../utils/algos";

export default function Converter({
  incrementLevel,
  setFormData,
  formData,
  depositPrices,
  withdrawValues,
  personalizationData,
}) {
  const { t } = useTranslation("common");
  const [user, authInProgress] = useAuthStore((state) => [
    state.user,
    state.authInProgress,
  ]);
  // console.log("HERE INSIDE CONVERTER!!!", depositPrices, withdrawValues);

  const [myDepositAmount, setMyDepositAmount] = useState(1000);
  const [myDepositCurrency, setMyDepositCurrency] = useState("USD");
  const [myWithdrawalAmount, setMyWithdrawalAmount] = useState("0");

  const INIT_WDRW_KAIDA = personalizationData?.kaida || "RONLPDE";
  const [myWithdrawalCurrency, setMyWithdrawalCurrency] = useState(
    INIT_WDRW_KAIDA.substring(2, INIT_WDRW_KAIDA.length - 2)
      .split("")
      .reverse()
      .join("")
  );
  const myDepositCurrencies = ["USD"]; //depositPrices?.map((el) => el.currency);
  const myWithdrawalCurrencies = ["RUB"]; //withdrawValues?.map((el) => el.currency);
  const [exchangeRate, setExchangeRate] = useState("1");
  const [invalid, setInvalid] = useState(false);

  const [discount, setDiscount] = useState(0.04);
  const [conversionRateLoader, setConversionRateLoader] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (formData && setFormData && incrementLevel && !invalid) {
      formData.fiatAmount = myDepositAmount;
      formData.fiatCurrency = myDepositCurrency;
      formData.convertedFiatCurrency = myWithdrawalCurrency;
      setFormData(formData);
      incrementLevel();
    }
  };

  const handleChangeDepositCurrency = (value) => {
    setMyDepositCurrency(value);
    setCookie("fiatCurrency", value);
  };
  const handleChangeWithdrawCurrency = (value) => {
    setMyWithdrawalCurrency(value);
    setCookie("withdrawalCurrency", value);
  };

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
          setDiscount(0);
        }
      });
    }
  }, [user, authInProgress]);

  const updateConversionRate = () => {
    if (!myDepositCurrency || !myWithdrawalCurrency) return;
    const answer = convert(
      myDepositAmount,
      myWithdrawalCurrency,
      myDepositCurrency,
      discount,
      depositPrices,
      withdrawValues
    );
    setMyWithdrawalAmount(answer.toFixed(2));
    setExchangeRate((answer / myDepositAmount).toFixed(2));
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
                setMyDepositAmount(Number(e.target.value));
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

      <div className="d-grid w-100 mx-auto">
        {incrementLevel ? (
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
        ) : (
          <>
            <Link
              href={{
                pathname: "/withdrawal",
                query: {
                  fiatCurrency: myDepositCurrency,
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
            <Link
              href={{
                pathname: "/mybalance/view",
              }}
              className={`btn btn-outline-primary text-primary ${
                invalid || conversionRateLoader ? "disabled" : ""
              } mt-3`}
            >
              {conversionRateLoader ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <p>{t("myDeposit.button")}</p>
              )}
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
