import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { useTranslation } from "next-i18next";

const TestimonialStyleTwo = () => {
  const {t} = useTranslation("common")
  return (
    <div className="testimonial-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>{t("Testimonials")}</span>
          <h2>{t("What our customers say")}</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p> */}
        </div>

        <Swiper
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="testimonial-wrap-two"
        >
          <SwiperSlide>
            <div className="single-client">
              <div className="client-text">
                <img src="/images/testimonials/client10.jpg" alt="Image" />
                <h3>Marat</h3>
                <span>{t("Customer")}</span>
              </div>

              <p>
                {t("testimonials.p1")}
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="quotes">
                <i className="flaticon-left-quotes-sign"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-client">
              <div className="client-text">
                <img src="/images/testimonials/client11.jpg" alt="Image" />
                <h3>Inokentii</h3>
                <span>{t("Customer")}</span>
              </div>

              <p>
                {t("testimonials.p2")}
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="quotes">
                <i className="flaticon-left-quotes-sign"></i>
              </div>
            </div>
          </SwiperSlide>

        
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialStyleTwo;
