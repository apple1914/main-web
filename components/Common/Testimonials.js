import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Testimonials = () => {
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
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
          modules={[Navigation, Autoplay]}
          className="testimonial-wrap"
        >
          <SwiperSlide>
            <div className="single-client">
              <img src="/images/testimonials/client1.jpg" alt="img" />

              <h3>Denial Peer</h3>
              <span>Marketer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
              <img src="/images/testimonials/client2.jpg" alt="img" />

              <h3>Anna Dew</h3>
              <span>Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
              <img src="/images/testimonials/client3.jpg" alt="img" />

              <h3>Jecty Smith</h3>
              <span>UI/UX Designer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
              <img src="/images/testimonials/client4.jpg" alt="img" />

              <h3>Jonson</h3>
              <span>React Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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

export default Testimonials;
