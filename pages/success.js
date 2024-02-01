//import { Transak, TransakConfig } from "@transak/transak-sdk";


import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PaymentStatusComponent from '../components/Common/PaymentStatusComponent';
import {useRouter} from "next/navigation"

const Success = () => {
    const router = useRouter()
    
    return (
        <>
            <NavbarTwo />
           <PaymentStatusComponent isSuccess={true}/> 
        </>
    )
}

export default Success;