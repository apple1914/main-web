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

    const submitGoToLogin = async (e) => {
        e.preventDefault()
        router.push("/sign-in")
    }
    if (user) {
        return (<button className="btn btn-primary bx" onClick={e => {
            submitSignOut(e)
         }}>Sign Out</button>)
    } else {
        return  (<button className="btn btn-primary bx" onClick={e => {
            submitGoToLogin(e)
         }}>Sign In</button>)
    }

   

       
}

export default SignOutButton;