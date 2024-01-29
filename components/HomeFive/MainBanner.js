import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area main-banner-area-five">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      Investment Retirement Insurance!
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      Keep Your Business Safe With Our Services
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus tenetur, voluptatem id dolorem eveniet dolor
                      veniam ullam.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <Link href="/contact">
                        <a className="default-btn btn-five">Get Started</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="banner-img-five"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <img src="/images/banner/banner-img-five.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-shape-right-five">
          <img src="/images/banner/banner-shape-right-five.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
