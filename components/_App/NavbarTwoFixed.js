// import React from 'react';
import Link from "next/link";
import SignOutButton from "../Common/SignOutButton";
// import TopHeader from './TopHeader';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const NavbarTwoFixed = () => {
  const { t } = useTranslation("common");

  //   const [menu, setMenu] = React.useState(true);
  const menu = true;

  const toggleNavbar = () => {
    console.log("toggle");
  };
  const router = useRouter();

  const switchLngClick = (locale) => {
    const path = router.asPath;

    return router.push(path, path, { locale });
  };

  //   React.useEffect(() => {
  //     let elementId = document.getElementById("navbar");
  //     elementId.classList.add("is-sticky");
  //   });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top mb-5">
        {/* TopHeader */}
        {/* <TopHeader /> */}

        <div id="navbar" className="navbar-area nav-style-two is-sticky">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link href="/" onClick={toggleNavbar} className="navbar-brand">
                  <img
                    src="/images/santepay-logo-white.png"
                    alt="logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    {/* <LngSwitcher /> */}

                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="/about"
                        activeClassName="active"
                      >
                        {t("About us")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="/how-it-works"
                        activeClassName="active"
                      >
                        {t("HowItWorks")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="/pricing"
                        activeClassName="active"
                      >
                        {t("Pricing")}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="#"
                      >
                        {t("Switch language")}{" "}
                        <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <button
                            className="bg-transparent text-white"
                            onClick={(e) => {
                              e.preventDefault();
                              switchLngClick("en");
                            }}
                          >
                            English
                          </button>
                        </li>

                        <li className="nav-item">
                          <button
                            className="bg-transparent text-white"
                            onClick={(e) => {
                              e.preventDefault();
                              switchLngClick("ru");
                            }}
                          >
                            Русский
                          </button>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="#"
                      >
                        {t("User")} <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            onClick={toggleNavbar}
                            className="nav-link"
                            href="/sign-up"
                            activeClassName="active"
                          >
                            {t("Sign Up")}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            onClick={toggleNavbar}
                            className="nav-link"
                            href="/sign-in"
                            activeClassName="active"
                          >
                            {t("Sign In")}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            onClick={toggleNavbar}
                            className="nav-link"
                            href="/recover-password"
                            activeClassName="active"
                          >
                            {t("Recover Password")}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <SignOutButton />
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        onClick={toggleNavbar}
                        className="nav-link"
                        href="/contact"
                        activeClassName="active"
                      >
                        {t("Customer support")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarTwoFixed;
