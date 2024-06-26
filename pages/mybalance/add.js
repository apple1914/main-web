// import Stepper from "@/components/Stepper";
import CheckoutMyBalanceMain from "../../components/Common/CheckoutMyBalanceMain";

import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import RedirectIfNotSignedIn from "../../components/Common/RedirectIfNotSignedIn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Add = (props) => {
  //@ts-ignore
  const { lng } = props;
  const flowType = "/mybalance/add";

  return (
    <>
      <NavbarTwoFixed />
      <CheckoutMyBalanceMain flowType={flowType} lng={lng} />

      <Footer />
      {/* <CaptureMarketingInfo /> */}
      <RedirectIfNotSignedIn />
    </>
  );
};

export default Add;

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
