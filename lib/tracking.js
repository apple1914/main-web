"use client"
import { H } from '@highlight-run/next/client'

export const identifyUser = ({username}) => {
    try {
        H.identify(username,{meat:"horse"})
        console.log("Success identifying user", {username})
    } catch (e) {
        console.log("error with identifying user")
    }
    return
}