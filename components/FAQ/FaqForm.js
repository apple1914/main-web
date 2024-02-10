import React, { useState } from 'react'
import axios from 'axios'

import baseUrl from '../../utils/baseUrl'
import { useTranslation } from "next-i18next";

const alertContent = () => {
    alert('success')
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const FaqForm = () => {
	const {t} = useTranslation("common")


	const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-area mt-0 ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>{t("Ask us anything!")}</h2>
								</div>

								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input 
													type="text" 
													name="name" 
													placeholder="Name" 
													className="form-control" 
													value={contact.name}
													onChange={handleChange} 
													required 
												/>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input 
													type="text" 
													name="email" 
													placeholder="Email" 
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
													placeholder="Phone number" 
													className="form-control" 
													value={contact.number}
													onChange={handleChange} 
													required 
												/>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input 
													type="text" 
													name="subject" 
													placeholder="Subject" 
													className="form-control" 
													value={contact.subject}
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
													placeholder="Write your message..." 
													className="form-control" 
													value={contact.text}
													onChange={handleChange} 
													required 
												/>
											</div>
										</div>
										<div className="col-lg-12 col-sm-12">
											<button type="submit" className="default-btn page-btn">
												{t("Send Message")}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FaqForm;