import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const TestimonialStyleTwo = () => {
  return (
    <div className="testimonial-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
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
                <h3>Denial Peer</h3>
                <span>Marketer</span>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur quam adipisicing elit.
                Itaque exercitationem quia modi ipsam veniam obcaecati
                temporibus rerum quam velit ab eius, reiciendis rem a nemo
                facilis porro ad corrupti nulla rerum quam, velit temporibus.
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
                <h3>Anna Dew</h3>
                <span>Developer</span>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur quam adipisicing elit.
                Itaque exercitationem quia modi ipsam veniam obcaecati
                temporibus rerum quam velit ab eius, reiciendis rem a nemo
                facilis porro ad corrupti nulla rerum quam, velit temporibus.
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
                <img src="/images/testimonials/client12.jpg" alt="Image" />
                <h3>Jecty Smith</h3>
                <span>UI UX Designer</span>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur quam adipisicing elit.
                Itaque exercitationem quia modi ipsam veniam obcaecati
                temporibus rerum quam velit ab eius, reiciendis rem a nemo
                facilis porro ad corrupti nulla rerum quam, velit temporibus.
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
