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
import { auth } from "../lib/firebase/firebase";
import { getWithdrawals } from "../lib/withdrawals";
import { fetchWithdrawalAddresses } from "../lib/withdrawalAddress";
import { firebaseAdmin } from "../lib/firebase/firebaseAdmin";
import nookies from "nookies";
function Withdrawal(props) {
  //@ts-ignore
  const {
    lng,
    withdrawValues,
    depositPrices,
    withdrawals,
    withdrawalAddresses,
  } = props;
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
        withdrawals={withdrawals}
        withdrawalAddresses={withdrawalAddresses}
      />
      <Footer />
      {/* <CaptureMarketingInfo /> */}
      {/* <RedirectIfNotSignedIn /> */}
    </>
  );
}

export default Withdrawal;

export async function getServerSideProps(context) {
  const { locale } = context;
  const depositPrices = await getDepositCurrenciesAndRates();
  const withdrawValues = await getWithdrawCurrenciesAndRates();
  // const user = auth.currentUser;
  // const username = user.uid;
  // const [getWithdrawals, fetchWithdrawalAddresses] = useAuthStore((state) => [
  //   state.getWithdrawals,
  //   state.fetchWithdrawalAddresses,
  // ]);
  let withdrawals = [];
  let withdrawalAddresses = [];
  const cookies = nookies.get(context);
  if (!!cookies.userToken || cookies.userToken !== "") {
    console.log("hitting here 1");

    const userToken = await firebaseAdmin
      .auth()
      .verifyIdToken(cookies.userToken);
    console.log("hitting here 2");

    const { uid, email } = userToken; //
    const username = uid;
    withdrawals = await getWithdrawals({ username });
    withdrawalAddresses = await fetchWithdrawalAddresses({ username });
  } else {
    console.log("hitting here 3");
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      depositPrices: depositPrices,
      withdrawValues: withdrawValues,
      lng: locale,
      withdrawals,
      withdrawalAddresses,
    },
  };
}
