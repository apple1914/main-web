import useAuthStore from "../../signInLogic/auth";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { usefulMarketingQueryParams } from "../../utils/miscConstants";

export default function SocialSignIn() {
  const [authSignInWithGmail] = useAuthStore((state) => [
    state.authSignInWithGmail,
  ]);

  const getAnalyticsData = async () => {
    const miscData = {};

    for (const key of usefulMarketingQueryParams) {
      const cookieName = key;
      const data = getCookie(cookieName);
      miscData[cookieName] = data;
    }
    return miscData;
  };

  return (
    <>
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
