"use client";
import React from "react";
import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { useRouter } from "next/router"; //should be next/router for pages dir
import useAuthStore from "../signInLogic/auth";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { H } from "@highlight-run/next/client";
const SignIn = () => {
  const [user, authInProgress] = useAuthStore((state) => [
    state.user,
    state.authInProgress,
  ]);
  const authSignIn = useAuthStore((state) => state.authSignIn);

  const router = useRouter();
  // const searchParams = useSearchParams()

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submitSignInForm = async (e) => {
    e.preventDefault();

    const { success, err, username } = await authSignIn(email, pwd);

    if (success === true) {
      goToNext({ username });
      return;
    }
  };

  useEffect(() => {
    if (user != null && !authInProgress) {
      goToNext({ username: user.uid });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNext = ({ username }) => {
    try {
      H.identify(username);
    } catch (e) {
      console.log(e);
    }
    router.push({ pathname: "/withdrawal", query: router.query });
  };

  return (
    <>
      <NavbarTwoFixed />
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Log In</h3>
                </div>

                <form method="post" onSubmit={submitSignInForm}>
                  <div className="row">
                    <div className="col-12">
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
                    <div className="col-12">
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

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password">Forgot my password?</Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Log In Now
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member?
                        <Link
                          href={{
                            pathname: `/sign-up`,
                            query: router.query,
                          }}
                        >
                          Sign Up
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
    </>
  );
};

export default SignIn;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
