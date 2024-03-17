import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import RedirectIfNotSignedIn from "../../components/Common/RedirectIfNotSignedIn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ViewMyBalance from "../../components/Common/ViewMyBalance";

const View = (props) => {
  //@ts-ignore
  const { lng } = props;

  return (
    <>
      <NavbarTwoFixed />
      <ViewMyBalance />
      <Footer />
      {/* <CaptureMarketingInfo /> */}
      <RedirectIfNotSignedIn />
    </>
  );
};

export default View;

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
