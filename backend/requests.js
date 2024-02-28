import { auth } from "../signInLogic/firebaseAuthenticationConfig"
import axios from "axios";

import {THIS_BACKEND_URL} from "../utils/importantUrls"

const MIXPANEL_SECRET = process.env.MIXPANEL_SECRET
const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN


export const fetchWithdrawalAddresses = async () => {
  try {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const data = await axios.get(`${THIS_BACKEND_URL}/withdrawalAddress`, payloadHeader).then((res)=>res.data).catch((err)=> {
        console.log("ERRRRRR with fetchWithdrawalAddresses", err)
      })

      console.log("Data here is", data)
      const withdrawalAddresses = data.map((withdawalAddress) => {
        const withdrawalAddressId = withdawalAddress.withdrawalAddressId
        const nickname = withdawalAddress.nickname
        return {withdrawalAddressId,nickname}
      })
      console.log("withdrawalAddresses here is", withdrawalAddresses)

      return withdrawalAddresses
    } catch (e) {
      console.log(e);
    }
}


export const fetchWithdrawalAddressesV2 = async () => {
  try {
      const user = auth.currentUser;
      const username = user.uid


      const data = await axios.get(`/api/fetchwithdrawaladdresses?username=${username}`).then((res)=>res.data).catch((err)=> {
        console.log("ERRRRRR with fetchWithdrawalAddresses", err)
      })

      console.log("Data here is", data)
      const withdrawalAddresses = data.map((withdawalAddress) => {
        const withdrawalAddressId = withdawalAddress.withdrawalAddressId
        const nickname = withdawalAddress.nickname
        return {withdrawalAddressId,nickname}
      })
      console.log("withdrawalAddresses here is", withdrawalAddresses)

      return withdrawalAddresses
    } catch (e) {
      console.log(e);
    }
}


export const addWithdrawalAddress = async({nickname,address,blockchain,cryptocurrency})=> {
  try {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const payloadBody = {
        nickname,address,blockchain,cryptocurrency
      }
      const res = await axios.post(`${THIS_BACKEND_URL}/withdrawalAddress`,payloadBody, payloadHeader).catch((err)=> {
        console.log(err.response?.data)
      })
      return res.data
    } catch (e) {
      // alert("errrrror!")
      console.log(e);
    }
}

export const addWithdrawalAddressV2 = async({nickname,address,blockchain,cryptocurrency})=> {
  try {
      const user = auth.currentUser;
      const username = user.uid

      const payloadBody = {
        nickname,address,blockchain,cryptocurrency,username
      }
      const res = await axios.post(`/api/addwithdrawaladdress`,payloadBody).catch((err)=> {
       console.log(err)
      })
      return res.data
    } catch (e) {
      // alert("errrrror!")
      console.log(e);
    }
}



// export const createDeposit = async ({ fiatAmount,
//   fiatCurrency,
//   blockchain,withdrawal}) => {
//   try {
//       const user = auth.currentUser;
//       const token = user && (await user.getIdToken());

//       const payloadHeader = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const payloadBody = {
//         fiatAmount,
//         fiatCurrency,
//         blockchain,withdrawal
//       }
//       const res = await axios.post(`${THIS_BACKEND_URL}/deposits`, payloadBody,payloadHeader);
//       return res.data
//     } catch (e) {
//       console.log(e);
//     }
// }

export const createDeposit = async ({ fiatAmount,
  fiatCurrency,
  blockchain,withdrawal}) => {
  try {
      const user = auth.currentUser;

      const payloadBody = {
        fiatAmount,
        fiatCurrency,
        blockchain,
        withdrawal,
        username:user.uid
      }
      const res = await axios.post(`/api/createdeposit`, payloadBody)
      return res.data
    } catch (e) {
      console.log(e);
    }
}




export const createWithdrawal = async ({ cryptoAmount,useFullAmount,blockchain,withdrawalAddressId}) => {
  try {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const payloadBody = {
        cryptoAmount,
        useFullAmount,
        blockchain,withdrawalAddressId
      }
      const res = await axios.post(`${THIS_BACKEND_URL}/withdrawals`, payloadBody,payloadHeader);
      return res.data
    } catch (e) {
      console.log(e);
    }
}


export const getWithdrawals = async () => {
  try {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      
      const res = await axios.get(`${THIS_BACKEND_URL}/withdrawals`,payloadHeader);
      return res.data
    } catch (e) {
      console.log(e);
    }
}


export const fetchDepositFiatCurrencies = async () => {
  const url =
  `/api/getdepositcurrencies`

  return axios.get(url).then((res)=>res.data);
}


export const fetchWithdrawalCurrencies = async () => {
  const url =
   `/api/getwithdrawcurrencies`

  return axios.get(url).then((res)=>res.data);
}

export const convert = async (fiatAmount,
  withdrawCurrency,
  depositCurrency,
  discountPercent) => {
  const answer = await axios.get(`/api/convert?amount=${fiatAmount}&fromCurrency=${depositCurrency}&toCurrency=${withdrawCurrency}&discount=${discountPercent}`).then((res)=>res.data);
  
  return answer
}



export const createCsTicket = async ({ email,category,problemText}) => {

  const payloadBody = {
    email,
    category,
    problemText
  }
  const headers = {"Content-Type":"application/json"}
  const url = `${THIS_BACKEND_URL}/customerSupport/createCsTicket`
  // alert(url)
  return axios.post(url, payloadBody,{headers})
}





export const saveUserInfo = async ({username,miscInfo,contactInfo}) => {
  const url = `/api/saveuserinfo`
  const payload = {username,miscInfo,contactInfo}
  return axios.post(url,payload).then((res)=>res.data).catch((err)=>{console.log(err)})
}



export const fetchOnrampSettings = async ({depositId}) => {
  try {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const payloadHeader = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${THIS_BACKEND_URL}/deposits/${depositId}`


    const data = await axios.get(url, payloadHeader).then((res)=>res.data).catch((err)=> {
      console.log("ERRRRRR with fetchOnrampSettings", err)
    })

    console.log("Data here is", data)
    const withdrawalAddresses = data.map((withdawalAddress) => {
      const withdrawalAddressId = withdawalAddress.withdrawalAddressId
      const nickname = withdawalAddress.nickname
      return {withdrawalAddressId,nickname}
    })
    console.log("withdrawalAddresses here is", withdrawalAddresses)

    return withdrawalAddresses
  } catch (e) {
    console.log(e);
  }}


  export const saveBillingInfo = async (payload) => {
    const user = auth.currentUser;
    const answer = await axios.post(`/api/savebillinginfo`,{username:user.uid,...payload}).then((res)=>res.data);
    return 
  }






export const reportEvent = async ({
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
    const payload = [{ event:eventName, properties: newProperties }];
  
    const headers = {
      "content-type": "application/json",
      Authorization: "Basic " + Buffer.from(`${MIXPANEL_SECRET}:`).toString("base64")
    };
  
    return axios
      .post(url, payload, { headers: headers })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.response.data);
        });
  };


export const identifyUser = async ({ username, userProps }) => {
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
