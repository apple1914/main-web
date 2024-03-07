import NavbarTwoFixed from "../../components/_App/NavbarTwoFixed";
import Footer from "../../components/_App/Footer";
import RedirectIfNotSignedIn from "../../components/Common/RedirectIfNotSignedIn";
import SimpleUsdtAmount from "../../components/Common/SimpleUsdtAmount";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useAuthStore from "../../signInLogic/auth";

const View = async (props) => {
  //@ts-ignore
  const { lng } = props;
  const getBalance = useAuthStore((state) => state.getBalance);
  const balance = await getBalance();

  return (
    <>
      <NavbarTwoFixed />
      <div id="content" className="py-4 bg-white">
        <div className="container pt-5">
          <div className="mx-auto text-center pt-5">{t("checkoutMain.h1")}</div>
          <div className="row pt-5">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <SimpleUsdtAmount
                lng={lng}
                handleChangeAmount={(value) => {
                  console.log(value);
                  return null;
                }}
                amount={balance}
                invalid={false}
              />
              <div className="d-grid w-100 mx-auto">
                <Link
                  href={{
                    pathname: "/mybalance/add",
                  }}
                  className={`btn btn-primary text-white`}
                >
                  <p>{t("Add")}</p>
                </Link>
                <Link
                  href={{
                    pathname: "/mybalance/withdraw",
                  }}
                  className={`btn btn-primary text-white`}
                >
                  <p>{t("Withdraw")}</p>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

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
