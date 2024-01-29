import React from "react";

const CTA = () => {
  return (
    <>
      <div className="business-contact-area-five ptb-100">
        <div className="container">
          <div className="business-contact-bg">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="business-contact">
                  <p>Call Us Today</p>

                  <a className="one" href="tel:+82546-564-234">
                    +82546-564-234
                  </a>
                  <a href="tel:+82546-564-235">+82546-564-235</a>
                  <span>OR</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="business-content-email">
                  <p>Sign Up For Emails</p>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button className="default-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
