import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignUpComponentV2 from "../../components/Authentication/SignUpV2";

const SignUp = (props) => {
  const { personalizationData } = props;
  return (
    <>
      <NavbarTwoFixed />

      <SignUpComponentV2 personalizationData={personalizationData} />

      <Footer />
    </>
  );
};

export default SignUp;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const [kaida, fromCurrency, amount] = context.params.path;
  const personalizationData = { kaida, fromCurrency, amount };
  // const options = decodeOptions(context.params.path);

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      personalizationData: personalizationData,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
} //this fallback=true is very important. for our use case, it effectively turns this into SSR. but make sure to first prerender some skeleton
