import React, { useState } from "react";
import { submitCustomerSupportTicket } from "../../backend/requests";
import WhatsappButton from "../Common/WhatsappButton";
import baseUrl from "../../utils/baseUrl";
import { useTranslation } from "next-i18next";
import { toast } from "react-hot-toast";
const alertContent = ({ success }) => {
  if (success) {
    toast.success("success");
    return;
  } else {
    toast.error("error - please try again");
    return;
  }
};
const FALLBACK_NUMBER = "+7 (705) 743-04-11";
// Form initial state
const INITIAL_STATE = {
  email: "",
  number: "",
  text: "",
};

const ContactForm = () => {
  const { t } = useTranslation("common");
  const [contact, setContact] = useState(INITIAL_STATE);
  const [errorOccured, setErrorOccured] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, number, text } = contact;
      const payload = { email, number, text };
      submitCustomerSupportTicket(payload)
        .then((res) => {
          alertContent({ success: true });
        })
        .catch((err) => {
          alertContent({ success: false });
          setErrorOccured(true);
        });

      setContact(INITIAL_STATE);
    } catch (error) {
      console.log(error);
      alertContent({ success: false });
      setErrorOccured(true);
    }
  };

  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="w-50 mx-auto">
          <div className="contact-wrap">
            <div className="contact-form">
              <div className="section-title">
                <h2>{t("Contact us")}</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder={t("email")}
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder={t("Phone number")}
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder={t("Message")}
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="default-btn page-btn">
                      {t("Continue")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {errorOccured === true && (
        <h4 className="text-muted text-center bg-white shadow rounded">
          {t("Error, please write us on")}: {FALLBACK_NUMBER}
        </h4>
      )}
    </div>
  );
};

export default ContactForm;
