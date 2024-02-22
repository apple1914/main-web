import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import { Analytics } from "@vercel/analytics/react"
const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Santepay: borderless money</title>
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1, shrink-to-fit=no" 
                />
            </Head>

            {children}
            <Analytics />
            <GoTop 
                scrollStepInPx="100" 
                delayInMs="10.50" 
            />
        </>
    );
}

export default Layout;