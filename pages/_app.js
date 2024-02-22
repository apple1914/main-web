import React from "react";
import AOS from "aos";
import { appWithTranslation } from "next-i18next";
import { CONSTANTS } from '../utils/highlightConstants.js'
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../styles/meanmenu.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "currency-flags/dist/currency-flags.css";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp)
