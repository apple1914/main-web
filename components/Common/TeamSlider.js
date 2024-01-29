import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const TeamSlider = () => {
  return (
    <div className="team-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Team</span>
          <h2>Our Expert Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
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
          modules={[Pagination]}
          className="team-wrap"
        >
          <SwiperSlide>
            <div className="single-team">
              <div className="image">
                <img src="/images/team/team1.jpg" alt="image" />

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h3>Denial Vetori</h3>
                <span>Team Lead</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="image">
                <img src="/images/team/team2.jpg" alt="image" />

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h3>David Jon Korola</h3>
                <span>Marketer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="image">
                <img src="/images/team/team3.jpg" alt="image" />

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h3>Merris Polar</h3>
                <span>CEO</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="image">
                <img src="/images/team/team4.jpg" alt="image" />

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h3>Jeck Dew</h3>
                <span>Founder</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
