import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { decodeOptions } from "../../utils/pathShenanigans";
import SignUpComponent from "../../components/Authentication/signup";

const SignUp = (props) => {
  const { personalizationData, marketingDagta } = props;
  return (
    <>
      <NavbarTwoFixed />

      <SignUpComponent
        personalizationData={personalizationData}
        marketingDagta={marketingDagta}
      />

      <Footer />
    </>
  );
};

export default SignUp;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  const [kaido, utm_campaign, group, from, amount] = context.params.path;
  const personalizationData = { kaido, from, amount };
  const marketingDagta = { utm_campaign, group };
  // const options = decodeOptions(context.params.path);

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
      personalizationData: personalizationData,
      marketingDagta: marketingDagta,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
