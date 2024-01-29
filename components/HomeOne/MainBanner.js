import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <span
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Investment Retirement Insurance
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  The Right Protection to Keep You Moving Forward
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum.
                  </p>
                </div>

                <div
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>

                  <Link href="/contact">
                    <a className="default-btn active">Find An Agent</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div
                className="banner-img"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/banner/banner-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape">
          <img src="/images/banner/banner-shape.png" alt="Image" />
        </div>
        <div className="banner-shape-right">
          <img src="/images/banner/banner-shape-right.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
