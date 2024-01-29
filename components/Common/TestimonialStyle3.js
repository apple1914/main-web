import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TestimonialStyle3 = () => {
  return (
    <>
      <div className="testimonial-area-six ptb-100">
        <div className="container">
          <div className="section-title white-title">
            <h2>Testimonials</h2>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="testimonial-wrap-six"
          >
            <SwiperSlide>
              <div className="single-testimonial">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisismagna aliqua. ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. magna aliqua. ipsum suspendisse
                  ultrices gravida. Risus commodo Risus commodo viverra
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

                <h3>Denial Peer</h3>
                <span>Marketer</span>

                <img src="/images/testimonials/client1.jpg" alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisismagna aliqua. ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. magna aliqua. ipsum suspendisse
                  ultrices gravida. Risus commodo Risus commodo viverra
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

                <h3>Jecty Smith</h3>
                <span>Car CEO</span>

                <img src="/images/testimonials/client2.jpg" alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisismagna aliqua. ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. magna aliqua. ipsum suspendisse
                  ultrices gravida. Risus commodo Risus commodo viverra
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

                <h3>Peadalock Shen</h3>
                <span>Home CEO</span>

                <img src="/images/testimonials/client3.jpg" alt="Image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyle3;
