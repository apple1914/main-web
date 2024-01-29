"use client"
import React from 'react';

import useAuthStore from "../../signInLogic/auth";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
    const [user, authInProgress] = useAuthStore((state) => [state.user, state.authInProgress]);
    const authSignOut = useAuthStore((state) => state.authSignOut);
    const router = useRouter()



    const submitSignOut = async (e) => {
        e.preventDefault();
        authSignOut()
        router.push("/sign-in")
    }

   

       

    return (
        <button className="btn btn-primary bx" onClick={e => {
            submitSignOut(e)
         }}>Sign Out</button>
    )
}

export default SignOutButton;