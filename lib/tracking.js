"use client"
import { H } from '@highlight-run/next/client'

export const identifyUser = ({username}) => {
    try {
        H.identify(username,{meat:"horse"})
    } catch (e) {
        console.log("error with identifying user")
    }
    return
}