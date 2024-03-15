import useAuthStore from "../../signInLogic/auth";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { analyticsSourceContext } from "../../utils/miscConstants";
import nookies from "nookies";
export default function SocialSignIn() {
  const [authSignInWithGmail] = useAuthStore((state) => [
    state.authSignInWithGmail,
  ]);

  const getAnalyticsData = async () => {
    const miscData = {};

    for (const key of analyticsSourceContext) {
      const cookieName = key;
      const data = getCookie(cookieName);
      miscData[cookieName] = data;
    }
    return miscData;
  };
  const handleClickSocial = () => {
    authSignInWithGmail(getAnalyticsData()).then((result) => {
      const { success } = result;
      if (success !== true) return;
      const newUser = result.user;
      newUser.getIdToken().then((userToken) => {
        nookies.set(undefined, "userToken", userToken, { path: "/" });
      });
    });
  };

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <button
          onClick={() => {
            handleClickSocial();
          }}
          className="btn bg-muted btn-flat d-flex align-items-center"
        >
          <Image
            className="me-2"
            src="/images/google-logo.jpg"
            alt=""
            width={20}
            height={20}
          />
          Google
        </button>
      </div>
    </>
  );
}
