"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
// import { getCookie } from "cookies-next";

const nextStep = () => {
  alert("redefine me later")
}
export default function Converter() {
  
  const [myDepositAmount, setMyDepositAmount] = useState(1000);
  const [myDepositCurrency, setMyDepositCurrency] = useState("USD");
  const [myWithdrawalAmount, setMyWithdrawalAmount] = useState("0");
  const [myWithdrawalCurrency, setMyWithdrawalCurrency] = useState("RUB");
  const [myDepositCurrencies, setMyDepositCurrencies] =
    useState(['USD']);
  const [myWithdrawalCurrencies, setMyWithdrawalCurrencies] = useState(
    ['UAH','RUB']
  );
  const [exchangeRate, setExchangeRate] = useState("1");
  const [invalid, setInvalid] = useState(false);
  const searchParams = useSearchParams();
  const [discount, setDiscount] = useState(0.04);
  const [conversionRateLoader, setConversionRateLoader] =
    useState(true);

  const submit = () => {
    console.log("SUBMIT!")
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
                  (depositMinimumsMap)[myDepositCurrency]
                ) {
                  setInvalid(true);
                }
                if (
                  Number(e.target.value) >=
                  (depositMinimumsMap)[myDepositCurrency]
                ) {
                  setInvalid(false);
                }
                setMyDepositAmount(Number(e.target.value));
              }
            }}
            placeholder=""
          />
          <span className="input-group-text p-0">
            <i
              className={`currency-flag currency-flag-${myDepositCurrency.toLowerCase()} m-1 ms-3 rounded`}
            ></i>
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
                setMyDepositCurrency(e.target.value);
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
        {(depositMinimumsMap)[myDepositCurrency]}
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
          <span className="input-group-text p-0">
            <i
              className={`currency-flag currency-flag-${myWithdrawalCurrency.toLowerCase()} m-1 ms-3 border-0 rounded`}
            ></i>
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
                setMyWithdrawalCurrency(e.target.value);
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
      <p className="text-muted text-center w-100 mx-auto">
        Exchange rate: {" "}
        <span className="fw-500">
          1 {myDepositCurrency} = {exchangeRate} {myWithdrawalCurrency}
        </span>
        {discount !== 0 && (
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                *first withdrawal only
              </Tooltip>
            }
          >
            <span style={{ cursor: "pointer" }}>*</span>
          </OverlayTrigger>
        )}
      </p>
      <div className="d-grid w-100 mx-auto">
        {nextStep ? (
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
                pathname: "/user/checkout",
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
                t("Withdraw money to any card")
              )}
            </Link>
            {enableDepositButton == true && (
              <Link
                href={{
                  pathname: "/user/depost",
                  query: {
                    depositCurrency: myDepositCurrency,
                    amount: myDepositAmount,
                  },
                }}
                className={`mt-3 btn btn-outline-primary text-primary ${
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
                  t("Deposit money")
                )}
              </Link>
            )}
          </>
        )}
      </div>
    </form>
  );
}
