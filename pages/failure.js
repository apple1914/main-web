//import { Transak, TransakConfig } from "@transak/transak-sdk";


import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PaymentStatusComponent from '../components/Common/PaymentStatusComponent';

const Failure = () => {
    return (
        <>
            <NavbarTwo />
           <PaymentStatusComponent isSuccess={false}/> 
        </>
    )
}

export default Failure;