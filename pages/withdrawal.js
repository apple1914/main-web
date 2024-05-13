// import Stepper from "@/components/Stepper";
import WithdrawalMain from "../components/Common/WithdrawalMain";
import { Suspense } from "react";

import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import Footer from "../components/_App/Footer";
import RedirectIfNotSignedIn from "../components/Common/RedirectIfNotSignedIn";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useAuthStore from "../signInLogic/auth";
import { saveCustomEvent } from "../lib/userEvents";
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "../lib/currencies";
import ChatwootWidget from "../components/Contact/ChatwootWidget";
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
      <Suspense>
        <WithdrawalMain
          lng={lng}
          handleSaveCustomEvent={handleSaveCustomEvent}
          depositPrices={depositPrices}
          withdrawValues={withdrawValues}
        />
      </Suspense>
      <Suspense>
        <ChatwootWidget lng={lng} />
      </Suspense>

      <Footer />
      {/* <CaptureMarketingInfo /> */}
      <RedirectIfNotSignedIn />
    </>
  );
}

export default Withdrawal;

export async function getServerSideProps(context) {
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
