import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const MainBannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="hero-slider-area"
      >
        <SwiperSlide>
          <div className="slider-item slider-item-bg-1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text one">
                    <span>Life Insurance</span>
                    <h1>Reliable Insurance for Any Purpose</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis esse natus nisi iure.
                    </p>

                    <div className="slider-btn">
                      <Link href="/contact">
                        <a className="default-btn">Contact Us</a>
                      </Link>
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
                    <span>Life Insurance</span>
                    <h1>Insurance for Any Purpose Reliable</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis esse natus nisi iure.
                    </p>

                    <div className="slider-btn">
                      <Link href="/contact">
                        <a className="default-btn">Contact Us</a>
                      </Link>
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

export default MainBannerSlider;
