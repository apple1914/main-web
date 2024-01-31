//import { Transak, TransakConfig } from "@transak/transak-sdk";


import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import TransakWidget from '../components/Common/TransakWidget';

const Payment = () => {
    return (
        <>
            <NavbarTwo />
           <TransakWidget /> 
        </>
    )
}

export default Payment;