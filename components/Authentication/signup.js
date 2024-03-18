"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useAuthStore from "../../signInLogic/auth";
import { analyticsSourceContext } from "../../utils/miscConstants";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import SocialSignIn from "./SocialSignIn";
import { H } from "@highlight-run/next/client";

const SignUp = ({ personalizationData, marketingDagta }) => {
  const [user, authInProgress] = useAuthStore((state) => [
    state.user,
    state.authInProgress,
  ]);
  const authSignUp = useAuthStore((state) => state.authSignUp);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { t } = useTranslation("common");

  useEffect(() => {
    console.log("BLAH");
    if (user != null && !authInProgress) {
      console.log("user is present already, SHOULD ROUTE TO CHECKOUT");
      const flowType = "withdrawal";
      router.push({
        pathname: "/" + flowType,
        query: personalizationData,
      });
    }
  }, [user, authInProgress]);

  const submitSignUpForm = async (e) => {
    e.preventDefault();

    const miscData = marketingDagta;

    // for (const key of analyticsSourceContext) {
    //   const cookieName = key;
    //   const data = getCookie(cookieName);
    //   miscData[cookieName] = data;
    // }

    const { success, error, username } = await authSignUp(email, pwd, miscData);
    // alert(JSON.stringify(error))
    console.log("riz here is :", { success, username });

    if (success === true) {
      console.log(
        "NO ERRORS, will send them with query:",
        router.query,
        router.isReady
      );
      try {
        H.identify(username);
      } catch (err) {
        console.log("err", err);
      }
      const flowType = "withdrawal";
      router.push({
        pathname: "/" + flowType,
        query: personalizationData,
      });
      return;
    }

    return console.log(error);
  };

  return (
    <div className="user-area-all-style sign-up-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">{t("Create account")}</h3>
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
                        placeholder="Email"
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
                        placeholder={t("Password")}
                        name="pwd"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      {t("Sign Up")}
                    </button>
                  </div>
                  <div className="col-12">
                    <SocialSignIn
                      personalizationData={personalizationData}
                      marketingDagta={marketingDagta}
                    />
                  </div>

                  <div className="col-12">
                    <p className="account-desc">
                      {t("Already have an account?")}
                      <Link
                        href={{
                          pathname: `/sign-in`,
                          query: personalizationData,
                        }}
                        className={`btn-link`}
                      >
                        {t("Sign In")}
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
  );
};

export default SignUp;
