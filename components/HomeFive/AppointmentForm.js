import React from "react";

const AppointmentForm = () => {
  return (
    <>
      <div className="appointment-area ptb-100">
        <div className="container">
          <div className="appointment-here-form">
            <h2>Life & Business Insurance</h2>
            <p>Customized to meet your specific business needs</p>

            <form>
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="form-group">
                    <select className="form-select">
                      <option defaultselected="true">Select</option>
                      <option defaultValue="1">Item One</option>
                      <option defaultValue="2">Item Two</option>
                      <option defaultValue="3">Item Three</option>
                      <option defaultValue="4">Item Four</option>
                      <option defaultValue="5">Item Five</option>
                      <option defaultValue="6">Item Six</option>
                      <option defaultValue="7">Item Seven</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <button type="submit" className="default-btn btn-five">
                    Get a Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
