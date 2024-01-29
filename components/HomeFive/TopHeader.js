import React from 'react';

const TopHeader = () => {
    return (
        <>
            <div className="top-header-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="header-content location">
								<span>
									<i className="bx bx-location-plus"></i>
									123, Western Road, Melbourne Australia
								</span>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="header-content envelope">
								<span>
									<i className="bx bx-envelope"></i> 
									Email:
								</span> {' '}
								<a href="mailto:hello@flexa.com">
									hello@flexa.com
								</a>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="header-content phone">
								<span>
									<i className="bx bx-phone-call"></i>
									Call Us For Inquiry:
								</span>
								{' '}
								<a href="tel:+822456974">
									+822456974
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default TopHeader;