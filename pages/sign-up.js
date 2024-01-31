"use client"
import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { useRouter,useSearchParams } from "next/navigation";
import useAuthStore from "../signInLogic/auth";
import { analyticsSourceContext } from '../utils/miscConstants';
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import CaptureMarketingInfo from "../components/Common/CaptureMarketingInfo"
const SignUp = () => {
    const [user, authInProgress] = useAuthStore((state) => [state.user, state.authInProgress]);
    const authSignUp = useAuthStore((state) => state.authSignUp);
    const router = useRouter();
    const searchParams = useSearchParams()

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    useEffect(() => {
        console.log("BLAH")
        if (user != null && !authInProgress) {
          console.log("user is present already, SHOULD ROUTE TO CHECKOUT")
          router.push({pathname:"/withdrawal",query:Object.fromEntries(searchParams.entries())})
        
        }
      }, [user,authInProgress]);

      const submitSignUpForm = async (e) => {
        e.preventDefault();
    
    
        const miscData = {};
    
        for (const key of analyticsSourceContext) {
          const cookieName =
          key
          const data = getCookie(cookieName);
          miscData[cookieName] = data;
        }
    
        const error = await authSignUp(email, pwd, miscData);
        // alert(JSON.stringify(error))

    
        if (error == null) {
            console.log("NO ERRORS, will send them with query:", router.query,router.isReady)
            router.push({pathname:"/withdrawal",query:Object.fromEntries(searchParams.entries())})
            return
        }
    
        return console.log(error);
      };



    return (
        <>
            <NavbarTwo />
            
            <div className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Create Account</h3>
                                </div>

                                <form method="post" onSubmit={submitSignUpForm}>
                                    <div className="row">
                                       
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                                    <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                required
                                                placeholder="Enter Your Email"
                                                name="email"
                                            />

                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                            <input
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    id="pwd"
                                                    required
                                                    placeholder="Password"
                                                    name="pwd"
                                                />

                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                        
                                        <div className="col-12">
                                            <p className="account-desc">
                                                Already have an account?
                                            <Link
                                                href={{
                                                    pathname: `/sign-in`,   
                                                    query: Object.fromEntries(searchParams.entries()),
                                                }}
                                                className={`btn-link`}
                                                >
                                                Log In
                                            </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
            <CaptureMarketingInfo />
        </>
    )
}

export default SignUp;