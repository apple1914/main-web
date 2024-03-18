// import Stepper from "@/components/Stepper";
import WithdrawalMain from "../../components/Common/WithdrawalMain";

import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import RedirectIfNotSignedIn from "../../components/Common/RedirectIfNotSignedIn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useAuthStore from "../../signInLogic/auth";
import { saveCustomEvent } from "../../lib/userEvents";
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "../../lib/currencies";
import { useRouter } from "next/router";

function Withdrawal(props) {
  //@ts-ignore
  const router = useRouter();
  const { lng, withdrawValues, depositPrices, personalizationData } = props;
  const user = useAuthStore((state) => state.user);

  const handleSaveCustomEvent = (eventName) => {
    if (!eventName) return;
    if (!!user) {
      saveCustomEvent({ eventName, username: user.uid });
    }
  };
  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <NavbarTwoFixed />

      <WithdrawalMain
        lng={lng}
        handleSaveCustomEvent={handleSaveCustomEvent}
        depositPrices={depositPrices}
        withdrawValues={withdrawValues}
        personalizationData={personalizationData}
      />

      <Footer />
      {/* <CaptureMarketingInfo /> */}
      {/* <RedirectIfNotSignedIn /> */}
    </>
  );
}

export default Withdrawal;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const depositPrices = await getDepositCurrenciesAndRates();
  const withdrawValues = await getWithdrawCurrenciesAndRates();

  const [kaida, fromCurrency, amount] = context.params.path;
  const personalizationData = { kaida, fromCurrency, amount };

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      depositPrices: depositPrices,
      withdrawValues: withdrawValues,
      lng: locale,
      personalizationData: personalizationData,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
} //this fallback=true is very important. for our use case, it effectively turns this into SSR. but make sure to first prerender some skeleton

// In the “fallback” version of a page:

// The page’s props will be empty.
// Using the router, you can detect if the fallback is being rendered, router.isFallback will be true.
