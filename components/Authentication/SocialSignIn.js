import useAuthStore from "../../signInLogic/auth";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { analyticsSourceContext } from "../../utils/miscConstants";
import { useTranslation } from "next-i18next";
export default function SocialSignIn({ personalizationData, marketingData }) {
  const { t } = useTranslation("common");

  const [authSignInWithGmail] = useAuthStore((state) => [
    state.authSignInWithGmail,
  ]);
  //not quite sure about personalizationData -> it seems like the subsequent routing after gmail auth is handled by the hook in parent compoennt? which is not ideal

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <button
          onClick={() => {
            authSignInWithGmail(marketingData);
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
          {t("googleauth.cta")}
        </button>
      </div>
    </>
  );
}
