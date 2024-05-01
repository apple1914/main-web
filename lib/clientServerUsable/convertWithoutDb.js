const SANTEPAY_FEE = process.env.SANTEPAY_FEE;
export const convertFiatToUsdt = ({
  depositPrices,
  fiatAmount,
  fiatCurrency,
}) => {
  const { prices, fiatAmountMinimum } = depositPrices.find(
    (el) => el.currency === fiatCurrency
  );
  const multiplier = fiatAmount / fiatAmountMinimum;
  const parsedPrices = JSON.parse(JSON.stringify(prices));
  const levels = Object.keys(parsedPrices).map((priceLvlKey) =>
    parseFloat(priceLvlKey)
  );
  const closestIndexBelow = pickFirstIndexBelow(levels, multiplier);

  const levelKeyAsString = Object.keys(parsedPrices)[closestIndexBelow];
  const priceKey = levelKeyAsString;
  const price = parsedPrices[priceKey];
  const usdtAmount = fiatAmount / price;

  return usdtAmount;
};

export const convertUsdtToFiat = ({
  withdrawValues,
  usdtAmount,
  discount,
  myWithdrawalCurrency,
}) => {
  const { value } = withdrawValues.find(
    (el) => el.currency === myWithdrawalCurrency
  );
  const mainFee = Number(SANTEPAY_FEE);
  const TOTAL_FEE = mainFee - Number(discount);
  const answer = usdtAmount * (1 - TOTAL_FEE) * value;

  return answer;
};

export const convert = ({
  myDepositAmount,
  myWithdrawalCurrency,
  myDepositCurrency,
  discount,
  depositPrices,
  withdrawValues,
}) => {
  const usdtAmount = convertFiatToUsdt({
    depositPrices,
    fiatAmount: myDepositAmount,
    fiatCurrency: myDepositCurrency,
  });
  // console.log("usdtAmount results", { usdtAmount });

  const answer = convertUsdtToFiat({
    withdrawValues,
    usdtAmount,
    discount,
    myWithdrawalCurrency,
  });

  return answer;
};

const pickFirstIndexBelow = (arr, target) => {
  //should return idnex cuz we need to pick dict keys string
  const sortedIncreasing = [...arr].sort((a, b) => a - b);
  const correctIndexForSorted = pickFirstLevelIndexBelowSorted(
    sortedIncreasing,
    target
  );

  const level = sortedIncreasing[correctIndexForSorted];
  const levelIndex = arr.findIndex((el) => el == level);
  return levelIndex;
};

const pickFirstLevelIndexBelowSorted = (sortedArr, target) => {
  for (const index in sortedArr) {
    const threshold = sortedArr[index];
    if (target < threshold) {
      return index;
    }
  }
  return sortedArr.length - 1;
};
