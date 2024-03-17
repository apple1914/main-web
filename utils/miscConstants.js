export const analyticsSourceContext = ["utm_campaign", "group"];

export const cookieMappingContext = {
  fromCurrency: "fiatCurrency",
  toCurrency: "withdrawalCurrency",
  utm_campaign: "utm_campaign",
};

export const isWithdrawalsStopped =
  process.env.IS_WITHDRAWALS_PAUSED === "false";
