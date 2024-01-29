import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-us-area mt-50 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Why Choose Us</span>
            <h2>We are Dedicated to Support You</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="flaticon-kindness"></span>
                <h3>Service With Love</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-kindness"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="flaticon-target"></span>
                <h3>Clients Focused</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-target"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="flaticon-support"></span>
                <h3>Awesome Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-support"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
