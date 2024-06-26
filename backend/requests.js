import { auth } from "../lib/firebase/firebase";
import axios from "axios";

const MIXPANEL_SECRET = process.env.MIXPANEL_SECRET;
const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN;

export const fetchWithdrawalAddresses = async () => {
  try {
    const user = auth.currentUser;
    const username = user.uid;
    // const token = user && (await user.getIdToken());

    // const payloadHeader = {
    //   headers: {
    //     "Content-Type": "application/json",//
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    const data = await axios
      .get(`/api/fetchwithdrawaladdresses?username=${username}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log("ERRRRRR with fetchWithdrawalAddresses", err);
      });

    console.log("Data here is", data);
    const withdrawalAddresses = data.map((withdawalAddress) => {
      const withdrawalAddressId = withdawalAddress.withdrawalAddressId;
      const nickname = withdawalAddress.nickname;
      return { withdrawalAddressId, nickname };
    });
    console.log("withdrawalAddresses here is", withdrawalAddresses);

    return withdrawalAddresses;
  } catch (e) {
    console.log(e);
  }
};

export const fetchWithdrawalAddressesV2 = async () => {
  try {
    const user = auth.currentUser;
    const username = user.uid;

    return axios
      .get(`/api/fetchwithdrawaladdresses?username=${username}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log("ERRRRRR with fetchWithdrawalAddresses", err);
        return [];
      });
  } catch (e) {
    console.log(e);
  }
};

export const addWithdrawalAddress = async ({
  nickname,
  address,
  blockchain,
  cryptocurrency,
}) => {
  const user = auth.currentUser;
  const username = user.uid;
  const payload = {
    nickname,
    address,
    blockchain,
    cryptocurrency,
    username,
  };
  if (
    Object.entries(payload)
      .map((arr) => arr[1])
      .some((el) => el == null)
  ) {
    throw new Error(
      "Error prior to making addWithdrawalAddress api request, some inputs are not defined",
      payload
    );
  }

  const result = await axios
    .post(`/api/addwithdrawaladdress`, payload)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const createWithdrawalUnfunded = async ({
  withdrawalAddressId,
  fiatAmount,
  fiatCurrency,
  isProd,
}) => {
  const user = auth.currentUser;

  const payload = {
    username: user.uid,
    withdrawalAddressId,
    fiatAmount,
    fiatCurrency,
    isProd,
  };

  if (
    Object.entries(payload)
      .map((arr) => arr[1])
      .some((el) => el == null)
  ) {
    throw new Error(
      "Error prior to making createWithdrawalUnfunded api request, some inputs are not defined",
      payload
    );
  }

  return axios
    .post(`/api/createwithdrawalunfunded `, payload)
    .then((res) => res.data);
};
export const createDeposit = async ({
  fiatAmount,
  fiatCurrency,
  withdrawal,
  isProd,
}) => {
  const user = auth.currentUser;

  const payload = {
    fiatAmount,
    fiatCurrency,
    withdrawal,
    username: user.uid,
    isProd,
  };
  if (
    Object.entries(payload)
      .map((arr) => arr[1])
      .some((el) => el == null)
  ) {
    throw new Error(
      "Error prior to making createDeposit api request, some inputs are not defined",
      payload
    );
  }

  const res = await axios.post(`/api/createdeposit`, payload);
  return res.data;
};

export const createWithdrawal = async ({ usdtAmount, withdrawalAddressId }) => {
  try {
    const user = auth.currentUser;

    const payload = {
      username: user.uid,
      usdtAmount,
      withdrawalAddressId,
    };
    const res = await axios.post(`/api/createwithdrawal`, payload);
    return res.data; //data should be {success:true or false}
  } catch (e) {
    console.log(e);
  }
};

export const getWithdrawals = async () => {
  try {
    const user = auth.currentUser;

    const result = await axios
      .get(`/api/getwithdrawals?username=${user.uid}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchDepositFiatCurrencies = async () => {
  const url = `/api/getdepositcurrencies`;

  return axios.get(url).then((res) => res.data);
};

export const fetchWithdrawalCurrencies = async () => {
  const url = `/api/getwithdrawcurrencies`;

  return axios.get(url).then((res) => res.data);
};

export const convert = async (
  fiatAmount,
  withdrawCurrency,
  depositCurrency,
  discountPercent
) => {
  const answer = await axios
    .get(
      `/api/convert?amount=${fiatAmount}&fromCurrency=${depositCurrency}&toCurrency=${withdrawCurrency}&discount=${discountPercent}`
    )
    .then((res) => res.data);

  return answer;
};

export const createCsTicket = async ({ email, category, problemText }) => {
  return;
};

export const saveUserInfo = async ({ username, miscInfo, contactInfo }) => {
  const url = `/api/saveuserinfo`;
  const payload = { username, miscInfo, contactInfo };

  return axios
    .post(url, payload)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const fetchOnrampSettings = async ({ depositId }) => {
  return;
};

export const saveBillingInfo = async (payload) => {
  const user = auth.currentUser;
  const answer = await axios
    .post(`/api/savebillinginfo`, { username: user.uid, ...payload })
    .then((res) => res.data);
  return;
};

export const mxpReportEvent = async ({
  username,
  eventProps,
  timestamp,
  eventName,
  insertId,
}) => {
  const url = `https://api.mixpanel.com/import`;

  const newProperties = {
    ...eventProps,
    time: timestamp,
    distinct_id: username,
    token: MIXPANEL_TOKEN,
    $insert_id: insertId,
  };
  const payload = [{ event: eventName, properties: newProperties }];

  const headers = {
    "content-type": "application/json",
    Authorization:
      "Basic " + Buffer.from(`${MIXPANEL_SECRET}:`).toString("base64"),
  };

  return axios
    .post(url, payload, { headers: headers })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const mxpIdentifyUser = async ({ username, userProps }) => {
  const mxpPaylo = [
    {
      $token: MIXPANEL_TOKEN,
      $distinct_id: username,
      $set: userProps,
    },
  ];
  //should be solid
  return axios
    .post("https://api.mixpanel.com/engage#profile-set", mxpPaylo)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

// createWithdrawal,
//   lookupWithdrawalAddressById

export const lookupWithdrawalAddressById = async ({ withdrawalAddressId }) => {
  const answer = await axios
    .get(
      `/api/lookupwithdrawaladdressbyid?withdrawalAddressId=${withdrawalAddressId}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return answer;
};

export const fetchWithdrawalTrackingInfo = async ({ withdrawalId }) => {
  return axios
    .get(`/api/fetchwithdrawaltrackinginfo?withdrawalId=${withdrawalId}`)
    .then((res) => {
      return res.data;
    });
};

export const submitCustomerSupportTicket = async ({ email, number, text }) => {
  const url = "/api/submitcustomersupportticket";

  const payload = { email, number, text };

  const user = auth?.currentUser;
  const username = user?.uid;
  payload["username"] = username;

  return axios.post(url, payload);
};
