"use client"
import React from 'react';

import useAuthStore from "../../signInLogic/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const SignOutButton = () => {
    const [user, authInProgress] = useAuthStore((state) => [state.user, state.authInProgress]);
    const authSignOut = useAuthStore((state) => state.authSignOut);
    const router = useRouter()



    const submitSignOut = async (e) => {
        e.preventDefault();
        authSignOut()
        toast.success("Signed Out!")
        
    }

    if (user && !authInProgress) {
        return (<button className="btn btn-primary-outline text-white" onClick={e => {
            submitSignOut(e)
         }}>Sign Out</button>)
    } 
    return  (<>asd</>)
    

   

       
}

export default SignOutButton;