import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="hero-slider-area-six"
      >
        <SwiperSlide>
          <div className="slider-item slider-item-bg-1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text one">
                    <span className="top-title">Welcome to Flexa</span>
                    <h1>We Can Insurance You From Any Kind of Trouble</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis.
                    </p>

                    <div className="slider-btn">
                      <Link href="/contact">
                        <a className="default-btn btn-six">Contact</a>
                      </Link>
                      <a className="default-btn btn-six active" href="#">
                        Get a Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-item slider-item-bg-2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text two">
                    <span className="top-title">Welcome to Flexa</span>
                    <h1>Keep Your Business Safe With Our Services</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis.
                    </p>

                    <div className="slider-btn">
                      <Link href="/contact">
                        <a className="default-btn btn-six">Contact</a>
                      </Link>
                      <a className="default-btn btn-six active" href="#">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
