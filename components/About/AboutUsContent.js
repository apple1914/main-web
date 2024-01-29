import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>About Us</span>
							<h2>We have been Thriving in 37 Years The Area</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>	

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>

							<div className="about-list">
								<ul>
									<li>
										<i className="flaticon-checked"></i>
										Save Money
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Fast Application
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Flexible Insurance
									</li>
									<li>
										<i className="flaticon-checked"></i>
										No Brokers, No Upselling
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Investment Planning
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Professional Advisor
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div 
							className="about-img"
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="1200"
							data-aos-once="true"
						>
							<img src="/images/about-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;