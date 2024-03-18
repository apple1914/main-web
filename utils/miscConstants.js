export const usefulMarketingQueryParams = ["utm_campaign", "group"];

export const converterPresetsQueryToCookieMap = {
  amount: "amount",
  fromCurrency: "depositCurrency",
  toCurrency: "withdrawalCurrency",
};

export const isWithdrawalsStopped =
  process.env.IS_WITHDRAWALS_PAUSED === "false";
