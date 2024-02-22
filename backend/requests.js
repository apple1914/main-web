import { auth } from "../signInLogic/firebaseAuthenticationConfig"
import axios from "axios";

import {THIS_BACKEND_URL} from "../utils/importantUrls"




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
        alert(JSON.stringify(err))
        alert(JSON.stringify(err.response))
        alert(JSON.stringify(err.response?.data))
      })
      return res.data
    } catch (e) {
      // alert("errrrror!")
      console.log(e);
    }
}



export const createDeposit = async ({ fiatAmount,
  fiatCurrency,
  blockchain,withdrawal}) => {
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
        fiatAmount,
        fiatCurrency,
        blockchain,withdrawal
      }
      const res = await axios.post(`${THIS_BACKEND_URL}/deposits`, payloadBody,payloadHeader);
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
  const url = `${THIS_BACKEND_URL}/users/saveUserInfo`
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
