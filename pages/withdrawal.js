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
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "../lib/currencies";

function Withdrawal(props) {
  //@ts-ignore
  const { lng, withdrawValues, depositPrices } = props;
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

      <WithdrawalMain
        lng={lng}
        handleSaveCustomEvent={handleSaveCustomEvent}
        depositPrices={depositPrices}
        withdrawValues={withdrawValues}
      />
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
  const depositPrices = await getDepositCurrenciesAndRates();
  const withdrawValues = await getWithdrawCurrenciesAndRates();

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      depositPrices: depositPrices,
      withdrawValues: withdrawValues,
      lng: locale,
    },
  };
}
