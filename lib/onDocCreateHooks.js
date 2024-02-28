import {reportEvent}  from "./analytics"

export const onUserCreate = async (doc) => {
    console.log("triggered: onUserCreate")
    await reportEvent({username:doc.username,eventName:"signup",insertId:doc._id,userProps:{utm_campaign:doc.utm_campaign}})
}

export const onWithdrawalAddressCreate = async (doc) => {
    console.log("triggered: onWithdrawalAddressCreate")

    await reportEvent({username:doc.username,eventName:"add-wiithdrawal-address",insertId:doc._id})
}

export const onDepositCreate = async (doc) => {
    console.log("triggered: onDepositCreate")
    await reportEvent({username:doc.username,eventName:"create-deposit",insertId:doc._id})
}
