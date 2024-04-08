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
  const closestLevel =
    Object.keys(parsedPrices)[binaryClosestIdx(levels, multiplier)];
  const priceKey = closestLevel;
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
  const TOTAL_FEE = 0.06 - Number(discount);
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

  const answer = convertUsdtToFiat({
    withdrawValues,
    usdtAmount,
    discount,
    myWithdrawalCurrency,
  });

  return answer;
};

const binaryClosestIdx = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (1) {
    if (arr[mid] === target) {
      return mid;
    } else if (start >= end) {
      break;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  // Return the closest between the last value checked and it's surrounding neighbors
  const first = Math.max(mid - 1, 0);
  const neighbors = arr.slice(first, mid + 2);
  const best = neighbors.reduce((b, el) =>
    Math.abs(el - target) < Math.abs(b - target) ? el : b
  );

  return first + neighbors.indexOf(best);
};
