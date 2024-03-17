import CheckoutMyBalanceMain from "../../components/Common/CheckoutMyBalanceMain";

import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import RedirectIfNotSignedIn from "../../components/Common/RedirectIfNotSignedIn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useAuthStore from "../../signInLogic/auth";

const Withdraw = (props) => {
  //@ts-ignore
  const { lng } = props;
  const flowType = "/mybalance/withdraw";

  return (
    <>
      <NavbarTwoFixed />
      <CheckoutMyBalanceMain flowType={flowType} />

      <Footer />
      {/* <CaptureMarketingInfo /> */}
      <RedirectIfNotSignedIn />
    </>
  );
};

export default Withdraw;

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
