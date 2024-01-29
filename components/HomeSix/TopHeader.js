import React from 'react';

const TopHeader = () => {
    return (
        <>
            <div className="top-header-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-8">
							<ul className="header-content-right">
								<li>
									<i className="bx bx-phone-call"></i>
									Call Us For Inquiry: {' '}
									<a href="tel:+822456974">
										+822456974
									</a>
								</li>
								<li>
									<i className="bx bx-envelope"></i>
									Email: {' '}
									<a href="mailto:hello@flexa.com">
										hello@flexa.com
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-6 col-md-4">
							<ul className="header-content-left">
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
					</div>
				</div>
			</div>
        </>
    )
}

export default TopHeader;