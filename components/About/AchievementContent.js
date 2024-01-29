import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from "next/link";

const AchievementContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={ toggler }
        sources={ [
          'https://www.youtube.com/embed/bk7McNUjWgw'
        ] }
      />
 
      <div className="achievement-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="video-img">
                <img src="/images/video-img.jpg" alt="Image" />

                <div className="video">
                  <div
                    onClick={ () => setToggler(!toggler) }
                    className="video-btn"
                  >
                    <i className="flaticon-play-button"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="achievement-content">
                <span>Achievement</span>
                <h2>We have Achieved Many National Award For Our Success</h2>

                <p>
                  Lorem ipsum dolor commod sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. ipsum suspendisse ultrices gravida. Risus commod
                  o viverra maecenas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/contact">
                  <a className="default-btn">Be Connected</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementContent;
