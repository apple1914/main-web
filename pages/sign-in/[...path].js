import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignInComponent from "../../components/Authentication/SignIn";

const SignIn = ({ personalizationData }) => {
  return (
    <>
      <NavbarTwoFixed />
      <SignInComponent personalizationData={personalizationData} />

      <Footer />
    </>
  );
};

export default SignIn;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const [kaida, from, amount] = context.params.path;
  const personalizationData = { kaida, from, amount };

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      personalizationData,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
} //this fallback=true is very important. for our use case, it effectively turns this into SSR. but make sure to first prerender some skeleton
