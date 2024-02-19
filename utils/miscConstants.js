export const analyticsSourceContext = ['utm_campaign']

export const cookieMappingContext = {
  "fromCurrency":"fiatCurrency",
  "toCurrency":"withdrawalCurrency",
  "utm_campaign":"utm_campaign"
}


export const isWithdrawalsPaused = process.env.IS_WITHDRAWALS_PAUSED === 'true'