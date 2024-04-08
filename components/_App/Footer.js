import React from "react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-widget">
                <Link href="/">
                  <img
                    src="/images/santepay-logo.png"
                    alt="Image"
                    width={100}
                    height={100}
                  />
                </Link>

                <div className="social-area">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/santepay"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/santepay" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/santepay"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/santepay"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/santepay"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-widget contact">
                <h3>{t("Customer support")}</h3>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    href="/contact"
                    activeClassName="active"
                  >
                    {t("Contact us")}
                  </Link>
                </li>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-widget">
                <ul>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/faq"
                      activeClassName="active"
                    >
                      {t("FAQ")}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/terms-conditions"
                      activeClassName="active"
                    >
                      {t("Terms & Conditions")}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/privacy-policy"
                      activeClassName="active"
                    >
                      {t("Privacy Policy")}
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/testimonials"
                      activeClassName="active"
                    >
                      {t("Testimonials")}
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area footer-bottom-electronics-area">
        <div className="container">
          <div className="copy-right">
            <p>Copyright &copy;{currentYear} Santepay</p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Footer;
