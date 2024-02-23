import useAuthStore from "../../signInLogic/auth";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { analyticsSourceContext } from '../../utils/miscConstants';

export default function SocialSignIn() {
  const [authSignInWithGmail] = useAuthStore((state) => [
    state.authSignInWithGmail,
  ]);

  const getAnalyticsData = async () => {
    const miscData = {};

    for (const key of analyticsSourceContext) {
      const cookieName =
      key
      const data = getCookie(cookieName);
      miscData[cookieName] = data;
    }
    return miscData
  };


  return (
    <>
      <p
        className="text-3 text-muted text-center my-4 w-100"
        style={{
          width: "100%",
          borderBottom: "1px solid #ebecee",
          lineHeight: "0.1em",
        }}
      >
        <span
          style={{
            background: "#fff",
            padding: "0 10px",
          }}
        >
          or
        </span>
      </p>
      <div className="d-flex justify-content-evenly">
        <button
          onClick={() => {
            authSignInWithGmail(getAnalyticsData());
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
