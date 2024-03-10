// import Stepper from "@/components/Stepper";
import WithdrawalMain from "../components/Common/WithdrawalMain";

import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import Footer from "../components/_App/Footer";
import RedirectIfNotSignedIn from "../components/Common/RedirectIfNotSignedIn";
import CaptureMarketingInfo from "../components/Common/CaptureMarketingInfo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useAuthStore from "../signInLogic/auth";
import { saveCustomEvent } from "../lib/userEvents";

function Withdrawal(props) {
  //@ts-ignore
  const { lng } = props;
  const user = useAuthStore((state) => state.user);

  const handleSaveCustomEvent = (eventName) => {
    if (!eventName) return;
    if (!!user) {
      saveCustomEvent({ eventName, username: user.uid });
    }
  };

  return (
    <>
      <NavbarTwoFixed />

      <WithdrawalMain lng={lng} handleSaveCustomEvent={handleSaveCustomEvent} />
      <Footer />
      {/* <CaptureMarketingInfo /> */}
      <RedirectIfNotSignedIn />
    </>
  );
}

export default Withdrawal;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      lng: locale,
    },
  };
}
