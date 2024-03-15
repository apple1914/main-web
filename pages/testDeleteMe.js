// import Stepper from "@/components/Stepper";
// import WithdrawalMain from "../components/Common/WithdrawalMain";

// import NavbarTwoFixed from "../components/_App/NavbarTwoFixed";
import Footer from "../components/_App/Footer";
// import RedirectIfNotSignedIn from "../components/Common/RedirectIfNotSignedIn";
// import CaptureMarketingInfo from "../components/Common/CaptureMarketingInfo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import useAuthStore from "../signInLogic/auth";
// import { saveCustomEvent } from "../lib/userEvents";
// import {
//   getDepositCurrenciesAndRates,
//   getWithdrawCurrenciesAndRates,
// } from "../lib/currencies";
// import { auth } from "../lib/firebase/firebase";

// import { getWithdrawals } from "../lib/withdrawals";
// import { fetchWithdrawalAddresses } from "../lib/withdrawalAddress";

// import { firebaseAdmin } from "../lib/firebase/firebaseAdmin";
// import nookies from "nookies";

function TestDeleteMe(props) {
  //@ts-ignore
  const {
    lng,
    withdrawValues,
    depositPrices,
    withdrawals,
    withdrawalAddresses,
  } = props;
  // const user = useAuthStore((state) => state.user);

  return (
    <>
      {/* <NavbarTwoFixed /> */}
      <div> sas</div>
      {/* <Footer /> */}
      {/* <CaptureMarketingInfo /> */}
      {/* <RedirectIfNotSignedIn /> */}
    </>
  );
}

export default TestDeleteMe;

export async function getServerSideProps(context) {
  const { locale } = context;
  console.log("HEEERE");
  // const depositPrices = await getDepositCurrenciesAndRates();
  // const withdrawValues = await getWithdrawCurrenciesAndRates();
  // console.log("getServerSideProps here 0 start after fetching currs");
  // // const user = auth.currentUser;
  // // const username = user.uid;
  // // const [getWithdrawals, fetchWithdrawalAddresses] = useAuthStore((state) => [
  // //   state.getWithdrawals,
  // //   state.fetchWithdrawalAddresses,
  // // ]);

  // const cookies = nookies.get(context);
  // console.log("getServerSideProps here cookies", cookies, cookies.userToken);
  // if (!cookies.userToken || cookies.userToken == "") {
  //   console.log("redirecting you to sign in, buddy");
  //   return {
  //     redirect: {
  //       destination: "/sign-in",
  //       permanent: false,
  //     },
  //   };
  // }
  // console.log("hitting here 1");

  // const userToken = await firebaseAdmin.auth().verifyIdToken(cookies.userToken);
  // console.log("hitting here 2");

  // const { uid, email } = userToken; //
  // const username = uid;
  // const withdrawals = await getWithdrawals({ username });
  // const withdrawalAddresses = await fetchWithdrawalAddresses({ username });

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
